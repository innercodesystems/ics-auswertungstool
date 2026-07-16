/**
 * ICS Tool Journey — Speichermodul (ics-journey.js)
 * ============================================================
 * Setzt den in "ICS Tool Journey – Integrationsarchitektur v2.0"
 * freigegebenen Speichervertrag um.
 *
 * WICHTIG — Abgrenzung:
 * - Reine Speicherlogik. Keine DOM-Manipulation, keine Nutzertexte.
 * - Kennt weder RESET-Check noch KI-Auswertung noch den
 *   Gegenpol-Generator inhaltlich — nur die Struktur des
 *   gemeinsamen Journey-Objekts.
 * - Verwendet ausschließlich sessionStorage, niemals localStorage.
 * - Gibt bei Problemen ausschließlich interne Fehlercodes (J01–J06)
 *   zurück — die Übersetzung in Nutzertexte ist Aufgabe der
 *   jeweiligen HTML-Datei (Live-/Testmodus-UI), nicht dieses Moduls.
 * - Verändert keine bestehende HTML-Datei und nichts an der
 *   Gegenpol-Datenbasis oder -Engine.
 * ============================================================
 */

const ICS_JOURNEY = (function () {

  const STORAGE_KEY = "ics_journey_v2";
  const VERSION = "2.0";
  const GUELTIGKEITSDAUER_MS = 2 * 60 * 60 * 1000; // 2 Stunden

  const FEHLERCODES = {
    J01: "kein Journey-Objekt vorhanden",
    J02: "Journey-Objekt beschädigt oder nicht parsebar",
    J03: "Versionskonflikt",
    J04: "Sitzung abgelaufen",
    J05: "Speicherzugriff nicht möglich",
    J06: "Pflichtfeld für den aktuellen Schritt fehlt"
  };

  const PFLICHTFELDER = ["version", "session_id", "created_at", "expires_at", "completed_steps"];

  // ---------- Hilfsfunktionen (intern, nicht exportiert) ----------

  function erzeugeSessionId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    // Fallback ohne crypto.randomUUID (ältere Browser)
    return "sess-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }

  function istoDatum(wert) {
    return typeof wert === "string" && !isNaN(Date.parse(wert));
  }

  function hatAllePflichtfelder(objekt) {
    return PFLICHTFELDER.every(feld => Object.prototype.hasOwnProperty.call(objekt, feld));
  }

  // Prüft Struktur + Version + Ablaufzeit. Gibt entweder
  // { ok: true } oder { ok: false, fehlercode: "J0x" } zurück.
  function validiereJourneyObjekt(objekt) {
    if (!objekt || typeof objekt !== "object") {
      return { ok: false, fehlercode: "J02" };
    }
    if (!hatAllePflichtfelder(objekt)) {
      return { ok: false, fehlercode: "J06" };
    }
    if (!istoDatum(objekt.created_at) || !istoDatum(objekt.expires_at)) {
      return { ok: false, fehlercode: "J02" };
    }
    if (objekt.version !== VERSION) {
      return { ok: false, fehlercode: "J03" };
    }
    if (Date.now() > Date.parse(objekt.expires_at)) {
      return { ok: false, fehlercode: "J04" };
    }
    if (!Array.isArray(objekt.completed_steps)) {
      return { ok: false, fehlercode: "J02" };
    }
    return { ok: true };
  }

  // Roh-Lesezugriff auf sessionStorage, fängt Exceptions ab
  // (z.B. private Browsermodi, die den Zugriff verweigern).
  function leseRoh() {
    try {
      const roh = sessionStorage.getItem(STORAGE_KEY);
      return { ok: true, roh };
    } catch (e) {
      return { ok: false, fehlercode: "J05" };
    }
  }

  // Roh-Schreibzugriff auf sessionStorage, fängt Exceptions ab.
  function schreibeRoh(objekt) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(objekt));
      return { ok: true };
    } catch (e) {
      return { ok: false, fehlercode: "J05" };
    }
  }

  // ---------- 1. Journey-Objekt erzeugen ----------
  function erzeugeNeuesJourneyObjekt() {
    const jetzt = new Date();
    const ablauf = new Date(jetzt.getTime() + GUELTIGKEITSDAUER_MS);
    return {
      version: VERSION,
      session_id: erzeugeSessionId(),
      created_at: jetzt.toISOString(),
      expires_at: ablauf.toISOString(),
      reset_check: null,
      ki_auswertung: null,
      gegenpol: null,
      freitext: null,
      security: null,
      completed_steps: []
    };
  }

  // ---------- 2. Journey-Objekt lesen (inkl. Validierung) ----------
  function leseJourney() {
    const roh = leseRoh();
    if (!roh.ok) return { ok: false, fehlercode: roh.fehlercode };
    if (roh.roh === null) return { ok: false, fehlercode: "J01" };

    let objekt;
    try {
      objekt = JSON.parse(roh.roh);
    } catch (e) {
      return { ok: false, fehlercode: "J02" };
    }

    const pruefung = validiereJourneyObjekt(objekt);
    if (!pruefung.ok) return { ok: false, fehlercode: pruefung.fehlercode };

    return { ok: true, objekt };
  }

  // ---------- 4. Speichern (vollständiges Objekt) ----------
  function speichereJourney(objekt) {
    const pruefung = validiereJourneyObjekt(objekt);
    if (!pruefung.ok) return { ok: false, fehlercode: pruefung.fehlercode };
    return schreibeRoh(objekt);
  }

  // ---------- 5. Einzelne Schritte ergänzen ----------
  // schrittName: "reset_check" | "ki_auswertung" | "gegenpol"
  // Legt bei Bedarf ein neues Journey-Objekt an (z.B. beim ersten
  // Schritt "reset_check"), sonst wird das bestehende ergänzt.
  function ergaenzeSchritt(schrittName, daten) {
    if (schrittName !== "reset_check" && schrittName !== "ki_auswertung" && schrittName !== "gegenpol") {
      return { ok: false, fehlercode: "J06" };
    }

    let basis;
    const gelesen = leseJourney();
    if (gelesen.ok) {
      basis = gelesen.objekt;
    } else if (schrittName === "reset_check") {
      // reset_check ist der Reisebeginn: bei fehlendem/ungültigem/abgelaufenem
      // Journey-Objekt wird hier bewusst neu begonnen.
      basis = erzeugeNeuesJourneyObjekt();
    } else {
      // ki_auswertung ohne gültiges Journey-Objekt (auch ohne reset_check) ist
      // ein echter Voraussetzungsfehler — kein automatisches Neuanlegen.
      return { ok: false, fehlercode: gelesen.fehlercode };
    }

    basis[schrittName] = daten;
    if (!basis.completed_steps.includes(schrittName)) {
      basis.completed_steps.push(schrittName);
    }
    // Bei der KI-Auswertung wird ausschließlich der bereinigte Freitext
    // zentral in basis.freitext übernommen — nie ein unbereinigter Rohtext.
    // Fehlt freitext_bereinigt oder ist er leer, wird basis.freitext explizit
    // auf null gesetzt (kein Verlassen auf einen eventuell alten Wert).
    if (schrittName === "ki_auswertung") {
      const bereinigt = daten && typeof daten.freitext_bereinigt === "string"
        ? daten.freitext_bereinigt.trim()
        : "";
      basis.freitext = bereinigt.length > 0 ? bereinigt : null;
      if (daten && daten.security) {
        basis.security = daten.security;
      }
    }

    const speicherErgebnis = speichereJourney(basis);
    if (!speicherErgebnis.ok) return speicherErgebnis;
    return { ok: true, objekt: basis };
  }

  // ---------- 6. Voraussetzungen prüfen ----------
  // schrittName: "ki_auswertung" | "gegenpol_generator"
  function pruefeVoraussetzung(schrittName) {
    const gelesen = leseJourney();
    if (!gelesen.ok) return { erlaubt: false, fehlercode: gelesen.fehlercode };

    const objekt = gelesen.objekt;
    if (schrittName === "ki_auswertung" && objekt.reset_check == null) {
      return { erlaubt: false, fehlercode: "J06" };
    }
    if (schrittName === "gegenpol_generator" && objekt.ki_auswertung == null) {
      return { erlaubt: false, fehlercode: "J06" };
    }
    return { erlaubt: true, objekt };
  }

  // ---------- 7. Freitext gezielt löschen ----------
  // Wird direkt nach erfolgreicher Verarbeitung durch den
  // Gegenpol-Generator aufgerufen — löscht das freitext-Feld UND die
  // ursprüngliche freitext_bereinigt-Stelle in ki_auswertung (falls
  // vorhanden), damit der Text nicht an zwei Stellen liegen bleibt.
  // Alle übrigen Felder, insbesondere security, bleiben unverändert.
  function loescheFreitext() {
    const gelesen = leseJourney();
    if (!gelesen.ok) return { ok: false, fehlercode: gelesen.fehlercode };
    const objekt = gelesen.objekt;
    objekt.freitext = null;
    if (objekt.ki_auswertung && typeof objekt.ki_auswertung === "object") {
      objekt.ki_auswertung.freitext_bereinigt = null;
    }
    return speichereJourney(objekt);
  }

  // ---------- 8. Gesamte Journey löschen ----------
  function loescheGesamteJourney() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      return { ok: true };
    } catch (e) {
      return { ok: false, fehlercode: "J05" };
    }
  }

  // ---------- Öffentliche Schnittstelle ----------
  return {
    STORAGE_KEY,
    VERSION,
    GUELTIGKEITSDAUER_MS,
    FEHLERCODES,
    erzeugeNeuesJourneyObjekt,
    leseJourney,
    validiereJourneyObjekt,
    speichereJourney,
    ergaenzeSchritt,
    pruefeVoraussetzung,
    loescheFreitext,
    loescheGesamteJourney
  };
})();

// Für Node-Tests (siehe Testskript) und ggf. spätere Bundler exportieren,
// ohne das Verhalten im Browser zu verändern (dort bleibt ICS_JOURNEY
// einfach eine globale Konstante, wie von den drei HTML-Dateien erwartet).
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ICS_JOURNEY };
}
