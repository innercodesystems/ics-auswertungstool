window.ICS = window.ICS || {};

alert("MENTOR V35 GELADEN");

(function () {
  "use strict";

  const input = document.getElementById("ics-input");
  const sendButton = document.getElementById("ics-send");
  const messages = document.getElementById("ics-messages");
  const counter = document.getElementById("ics-counter");
  const resetButton = document.getElementById("ics-reset");
  const profileButton = document.getElementById("ics-profile");
  const typing = document.getElementById("ics-typing");

  if (!input || !sendButton || !messages) {
    console.error("ICS Mentor: Wichtige HTML-Elemente fehlen.");
    return;
  }

  let gespraech = neuesGespraech();


      function neuesGespraech() {
  return {
    einstieg: "",
    thema: "",
      muster: "",
      weitereMuster: [],
      nebenthemen: [],
      schritt: 0,
      modus: "",
      strategie: "zuhören",
      antworten: [],
      analysen: [],
      erkenntnisse: [],
      hypothesen: [],
      offeneFragen: [],
      abgeschlossen: false,
      gespeichert: false
    };
  }


  function initialisieren() {
    sendButton.addEventListener("click", senden);

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        senden();
      }
    });

    input.addEventListener("input", zaehlerAktualisieren);

    if (resetButton) {
      resetButton.addEventListener("click", neustart);
    }

    if (profileButton) {
      profileButton.addEventListener("click", profilAnzeigen);
    }

    zaehlerAktualisieren();
  }


  function senden() {
    const text = input.value.trim();

    if (!text || sendButton.disabled) {
      return;
    }

    userNachricht(text);

    gespraech.antworten.push(text);

    input.value = "";
    zaehlerAktualisieren();

    statusSetzen(true);

    const wartezeit = Math.min(
      1200,
      350 + text.length * 6
    );

    window.setTimeout(function () {
      try {
        const html = antwortErzeugen(text);

        mentorNachricht(
          html ||
          "Ich möchte dich besser verstehen. Was beschäftigt dich daran am stärksten?"
        );
      } catch (fehler) {
        console.error("ICS Mentor Fehler:", fehler);

        mentorNachricht(
          "Ich konnte deine Nachricht gerade technisch nicht vollständig auswerten. Was ist der wichtigste Teil davon?"
        );
      } finally {
        statusSetzen(false);
        input.focus();
      }
    }, wartezeit);
  }


  function antwortErzeugen(text) {
    if (istAuswertungsWunsch(text)) {
      gespraech.abgeschlossen = true;
      gespraechSpeichern();

      if (typeof ICS.erstelleAuswertung === "function") {
        return ICS.erstelleAuswertung(gespraech);
      }

      return "Für eine vollständige Auswertung liegen noch nicht genügend Daten vor.";
    }

    if (istThemenwechsel(text)) {
      gespraech = neuesGespraech();
    }

    const einstieg = einstiegErkennen(text);

if (einstieg && !gespraech.einstieg) {
    gespraech.einstieg = einstieg;

    if (einstieg === "situation")
        return "Beschreibe mir bitte kurz, was genau passiert ist.";

    if (einstieg === "gefuehl")
        return "Welches Gefühl steht im Moment am stärksten im Vordergrund?";

    if (einstieg === "beziehung")
        return "Um welche Beziehung geht es und was belastet dich darin?";

    if (einstieg === "entscheidung")
        return "Zwischen welchen Möglichkeiten versuchst du gerade zu entscheiden?";

    if (einstieg === "verhalten")
        return "Welches Verhalten wiederholt sich bei dir immer wieder?";
}
    
    const smalltalk =
      typeof ICS.pruefeSmalltalk === "function"
        ? ICS.pruefeSmalltalk(text)
        : null;

    if (smalltalk && gespraech.antworten.length <= 1) {
      return smalltalk;
    }

if (
  ICS.Engine &&
  typeof ICS.Engine.antwort === "function"
) {
  const ergebnis =
    ICS.Engine.antwort(
      text,
      gespraech
    );

  if (ergebnis && ergebnis.html) {
    return ergebnis.html;
  }
}

return "Ich möchte dich besser verstehen. Was beschäftigt dich daran am stärksten?";
}
  
  function analyseErstellen(text) {
    if (
      ICS.brain &&
      typeof ICS.brain.analysieren === "function"
    ) {
      return ICS.brain.analysieren(
        text,
        gespraech
      );
    }

    return {
      muster:
        typeof ICS.musterErkennenAlle === "function"
          ? ICS.musterErkennenAlle(text)
          : [],
      thema: null,
      emotion: null
    };
  }


  function brainAktualisieren(analyse) {
    let update = {};

    if (
      ICS.brain &&
      typeof ICS.brain.aktualisieren === "function"
    ) {
      update =
        ICS.brain.aktualisieren(
          gespraech,
          analyse
        ) || {};
    }

    if (
      ICS.brain &&
      typeof ICS.brain.naechsteStrategie === "function"
    ) {
      gespraech.strategie =
        ICS.brain.naechsteStrategie(
          gespraech,
          analyse
        ) || "zuhören";
    }

    if (
      update.hypothese &&
      !gespraech.hypothesen.includes(
        update.hypothese
      )
    ) {
      gespraech.hypothesen.push(
        update.hypothese
      );
    }

    return update;
  }


  function hypothesenErstellen(analyse) {
    if (
      ICS.Hypothesen &&
      typeof ICS.Hypothesen.erstellen === "function"
    ) {
      return (
        ICS.Hypothesen.erstellen(
          gespraech,
          analyse
        ) || []
      );
    }

    return [];
  }


  function prioritaetErmitteln(analyse) {
    if (
      ICS.Prioritaeten &&
      typeof ICS.Prioritaeten.wichtigste === "function"
    ) {
      return ICS.Prioritaeten.wichtigste(
        analyse,
        gespraech
      );
    }

    if (
      Array.isArray(analyse.muster) &&
      analyse.muster.length
    ) {
      return analyse.muster[0];
    }

    return null;
  }


  function analyseUebernehmen(analyse) {
    const muster =
      Array.isArray(analyse.muster)
        ? analyse.muster
        : [];

    muster.forEach(function (eintrag, index) {
      if (!eintrag || !eintrag.id) {
        return;
      }

      if (!gespraech.muster && index === 0) {
        gespraech.muster = eintrag.id;
        gespraech.modus = "muster";

        if (eintrag.name) {
          gespraech.erkenntnisse.push(
            eintrag.name
          );
        }

        return;
      }

      if (
        eintrag.id !== gespraech.muster &&
        !gespraech.weitereMuster.includes(
          eintrag.id
        )
      ) {
        gespraech.weitereMuster.push(
          eintrag.id
        );

        if (eintrag.name) {
          gespraech.erkenntnisse.push(
            eintrag.name
          );
        }
      }
    });

    if (analyse.thema && analyse.thema.id) {
      if (!gespraech.thema) {
        gespraech.thema =
          analyse.thema.id;
      } else if (
        analyse.thema.id !== gespraech.thema &&
        !gespraech.nebenthemen.includes(
          analyse.thema.id
        )
      ) {
        gespraech.nebenthemen.push(
          analyse.thema.id
        );
      }
    }

    if (!gespraech.modus && gespraech.thema) {
      gespraech.modus = "thema";
    }
  }


  function dialogAntwort(
    analyse,
    update,
    hypothesen,
    prioritaet
  ) {
    const teile = [];

    const spiegel =
  ICS.Spiegel &&
  typeof ICS.Spiegel.erstellen === "function"
    ? ICS.Spiegel.erstellen(
        analyse,
        gespraech
      )
    : null;

    console.log("Spiegel:", spiegel);

    console.log("ICS.Verknuepfungen:", ICS.Verknuepfungen);
console.log("Typ:", typeof ICS.Verknuepfungen);
console.log("Erklärung:", ICS.Verknuepfungen?.erklaerung);
    
const verknuepfung =
  ICS.Verknuepfungen &&
  typeof ICS.Verknuepfungen.erklaerung === "function"
    ? ICS.Verknuepfungen.erklaerung(
        analyse.muster || []
      )
    : null;

console.log("VERKNÜPFUNG:", verknuepfung);

    const dynamischeAnalyse =
  ICS.Intelligenz &&
  typeof ICS.Intelligenz.erklaerung === "function"
    ? ICS.Intelligenz.erklaerung(
        ICS.Verknuepfungen &&
        typeof ICS.Verknuepfungen.analysieren === "function"
          ? ICS.Verknuepfungen.analysieren(
              analyse.muster || []
            )
          : []
      )
    : null;

    const schlussfolgerung =
  ICS.Schlussfolgerungen &&
  typeof ICS.Schlussfolgerungen.erstellen === "function"
    ? ICS.Schlussfolgerungen.erstellen(
        ICS.Verknuepfungen.analysieren(
          analyse.muster || []
        )
      )
    : null;
    
    const beduerfnisse =
  ICS.Beduerfnisse &&
  typeof ICS.Beduerfnisse.erkennen === "function"
    ? ICS.Beduerfnisse.erkennen(
        analyse.muster?.[0]?.id
      )
    : [];

const glaubenssatz =
  ICS.Glaubenssaetze &&
  typeof ICS.Glaubenssaetze.erkennen === "function"
    ? ICS.Glaubenssaetze.erkennen(
        analyse.muster?.[0]?.id
      )
    : null;

    const innerCode =
  ICS.InnerCode &&
  typeof ICS.InnerCode.erkennen === "function"
    ? ICS.InnerCode.erkennen(
        analyse.muster?.[0]?.id
      )
    : null;

    const bodyCode =
  ICS.BodyCode &&
  typeof ICS.BodyCode.erkennen === "function"
    ? ICS.BodyCode.erkennen(
        analyse.muster?.[0]?.id
      )
    : null;

    const actionCode =
  ICS.ActionCode &&
  typeof ICS.ActionCode.erkennen === "function"
    ? ICS.ActionCode.erkennen(
        analyse.muster?.[0]?.id
      )
    : null;

    const analysebericht =
  ICS.Analysebericht &&
  typeof ICS.Analysebericht.erstellen === "function"
    ? ICS.Analysebericht.erstellen({
        spiegel: spiegel,
        verknuepfung: verknuepfung,
        dynamischeAnalyse: dynamischeAnalyse,
        schlussfolgerung: schlussfolgerung,
        beduerfnisse: beduerfnisse,
        innerCode: innerCode,
        bodyCode: bodyCode,
        actionCode: actionCode
      })
    : null;

    if (analysebericht) {

  teile.push(`

<hr style="margin:18px 0">

<h3>🧠 ${escapen(analysebericht.titel)}</h3>

<p><strong>Spiegel</strong><br>
${escapen(analysebericht.spiegel)}</p>

<p><strong>Was ich erkenne</strong><br>
${escapen(analysebericht.erkannt)}</p>

${
  analysebericht.ursache
    ? `<p><strong>Wahrscheinliche Ursache</strong><br>
${escapen(analysebericht.ursache)}</p>`
    : ""
}

<p><strong>Was dein System jetzt braucht</strong><br>
${escapen(analysebericht.beduerfnisse)}</p>

<p><strong>Neuer Blickwinkel</strong><br>
${escapen(analysebericht.innerCode)}</p>

<p><strong>Körperimpuls</strong><br>
${escapen(analysebericht.bodyCode)}</p>

<p><strong>Nächster Schritt</strong><br>
${escapen(analysebericht.actionCode)}</p>

`);

}
  
    if (prioritaet && prioritaet.name) {
      teile.push(
        `<em>Aktueller Schwerpunkt: ${escapen(prioritaet.name)}</em>`
      );
    }

    let hypothesenFrage = "";

    if (
      Array.isArray(hypothesen) &&
      hypothesen.length
    ) {
      const ersteHypothese =
        hypothesen[0];

      if (ersteHypothese.text) {
        teile.push(
          `💡 <strong>${escapen(ersteHypothese.text)}</strong>`
        );
      }

      hypothesenFrage =
        ersteHypothese.frage || "";

      if (hypothesenFrage) {
        gespraech.offeneFragen.push(
          hypothesenFrage
        );

        teile.push(
          `<strong>${escapen(hypothesenFrage)}</strong>`
        );
      }
    }

    if (!hypothesenFrage) {
      const frage =
        intelligenteFrage(analyse);

      if (frage) {
        gespraech.offeneFragen.push(
          frage
        );

        teile.push(
          `<strong>${escapen(frage)}</strong>`
        );
      }
    }

    return teile
      .filter(Boolean)
      .join("<br><br>");
  }


  function intelligenteFrage(analyse) {
    if (gespraech.strategie === "stabilisieren") {
      return "Was würde dir in diesem Moment zuerst etwas Sicherheit oder Entlastung geben?";
    }

    const hauptmuster =
      gespraech.muster &&
      ICS.MUSTER
        ? ICS.MUSTER[gespraech.muster]
        : null;

    if (
      hauptmuster &&
      Array.isArray(hauptmuster.fragen) &&
      hauptmuster.fragen.length
    ) {
      const index = Math.min(
        gespraech.schritt,
        hauptmuster.fragen.length - 1
      );

      gespraech.schritt++;

      return hauptmuster.fragen[index];
    }

    const thema =
      gespraech.thema &&
      ICS.THEMEN
        ? ICS.THEMEN[gespraech.thema]
        : null;

    if (
      thema &&
      Array.isArray(thema.fragen) &&
      thema.fragen.length
    ) {
      const index = Math.min(
        gespraech.schritt,
        thema.fragen.length - 1
      );

      gespraech.schritt++;

      return thema.fragen[index];
    }

    if (analyse.emotion) {
      return "Was versucht dir dieses Gefühl gerade zu zeigen?";
    }

    return "Was daran ist für dich im Moment am wichtigsten?";
  }


  function unbekannteAntwort(analyse) {
    if (analyse.emotion) {
      const emotionText =
        analyse.emotion.antwort ||
        "Ich nehme wahr, dass dich etwas emotional bewegt.";

      return (
        `${escapen(emotionText)}` +
        "<br><br>" +
        "<strong>Was ist unmittelbar davor passiert?</strong>"
      );
    }

    return (
      "Ich möchte dich richtig verstehen. " +
      "Geht es gerade eher um eine Situation, ein Gefühl, " +
      "eine Beziehung, eine Entscheidung oder ein wiederkehrendes Verhalten?"
    );
  }


  function profilAnzeigen() {
    if (
      !ICS.brain ||
      typeof ICS.brain.laden !== "function"
    ) {
      mentorNachricht(
        "Das ICS Profil steht derzeit noch nicht zur Verfügung."
      );
      return;
    }

    const memory =
      ICS.brain.laden() || {};

    const musterScores =
      memory.musterScores || {};

    const themenScores =
      memory.themenScores || {};

    const muster =
      typeof ICS.brain.topScores === "function"
        ? ICS.brain.topScores(
            musterScores,
            5
          )
        : [];

    const themen =
      typeof ICS.brain.topScores === "function"
        ? ICS.brain.topScores(
            themenScores,
            4
          )
        : [];

    const musterHtml =
      muster.length
        ? muster
            .map(function (eintrag) {
              return (
                `${escapen(eintrag.label)} ` +
                `<strong>${eintrag.score}%</strong>`
              );
            })
            .join("<br>")
        : "Noch nicht genügend Gesprächsdaten.";

    const themenHtml =
      themen.length
        ? themen
            .map(function (eintrag) {
              return (
                `${escapen(eintrag.label)} ` +
                `<strong>${eintrag.score}%</strong>`
              );
            })
            .join("<br>")
        : "Noch keine stabilen Themenschwerpunkte.";

    const gespraeche =
      Array.isArray(memory.gespraeche)
        ? memory.gespraeche.length
        : 0;

    mentorNachricht(`
      <div class="ics-auswertung">
        <strong>Mein ICS Profil</strong>

        <br><br>

        <strong>Wiederkehrende Muster</strong>
        <br>
        ${musterHtml}

        <br><br>

        <strong>Wichtige Lebensbereiche</strong>
        <br>
        ${themenHtml}

        <br><br>

        <strong>Gespeicherte Gesprächsimpulse</strong>
        <br>
        ${gespraeche}
      </div>
    `);
  }


  function gespraechSpeichern() {
    if (
      !gespraech.gespeichert &&
      typeof ICS.profilAktualisieren === "function"
    ) {
      ICS.profilAktualisieren(
        gespraech
      );

      gespraech.gespeichert = true;
    }
  }


  function istAuswertungsWunsch(text) {
    const normalisiert =
      normalisieren(text);

    const begriffe = [
      "auswertung",
      "zusammenfassung",
      "ics spiegel",
      "was erkennst du",
      "was ist dein fazit"
    ];

    return begriffe.some(function (begriff) {
      return normalisiert.includes(
        normalisieren(begriff)
      );
    });
  }


  function istThemenwechsel(text) {
    const normalisiert =
      normalisieren(text);

    const begriffe = [
      "anderes thema",
      "thema wechseln",
      "jetzt ueber",
      "moechte ueber"
    ];

    return begriffe.some(function (begriff) {
      return normalisiert.includes(
        normalisieren(begriff)
      );
    });
  }


  function userNachricht(text) {
    const zeile =
      document.createElement("div");

    zeile.className =
      "chat-row user-row";

    zeile.innerHTML = `
      <div class="chat-bubble user-bubble">
        <strong>Du</strong>
        <p>${escapen(text)}</p>
      </div>
    `;

    messages.appendChild(zeile);

    scrollen();
  }


  function mentorNachricht(html) {
    const zeile =
      document.createElement("div");

    zeile.className =
      "chat-row mentor-row";

    zeile.innerHTML = `
      <div class="chat-avatar">🧠</div>

      <div class="chat-bubble mentor-bubble">
        <strong>ICS Mentor</strong>
        <p>${html}</p>
      </div>
    `;

    messages.appendChild(zeile);

    scrollen();
  }


  function neustart() {
    gespraech = neuesGespraech();

    messages.innerHTML = `
      <div class="chat-row mentor-row">
        <div class="chat-avatar">🧠</div>

        <div class="chat-bubble mentor-bubble">
          <strong>ICS Mentor</strong>
          <p>
            Das Gespräch wurde neu gestartet.
            Was beschäftigt dich im Moment am meisten?
          </p>
        </div>
      </div>
    `;

    input.value = "";

    zaehlerAktualisieren();

    statusSetzen(false);

    input.focus();

    scrollen();
  }


  function statusSetzen(aktiv) {
    sendButton.disabled = aktiv;

    if (typing) {
      typing.hidden = !aktiv;
    }
  }


  function zaehlerAktualisieren() {
    if (counter) {
      counter.textContent =
        input.value.length + " / 1500";
    }
  }


  function scrollen() {
    window.requestAnimationFrame(
      function () {
        messages.scrollTop =
          messages.scrollHeight;
      }
    );
  }


  function escapen(text) {
    if (typeof ICS.escapen === "function") {
      return ICS.escapen(
        String(text ?? "")
      );
    }

    const element =
      document.createElement("div");

    element.textContent =
      String(text ?? "");

    return element.innerHTML;
  }


  function normalisieren(text) {
    if (typeof ICS.normalisiere === "function") {
      return ICS.normalisiere(text);
    }

    return String(text || "")
      .toLowerCase()
      .trim()
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss");
  }

  function einstiegErkennen(text){

    const n = normalisieren(text);

    if(n === "situation") return "situation";

    if(n === "gefuehl") return "gefuehl";
    if(n === "gefühl") return "gefuehl";

    if(n === "beziehung") return "beziehung";

    if(n === "entscheidung") return "entscheidung";

    if(
        n === "wiederkehrendes verhalten" ||
        n === "verhalten"
    ){
        return "verhalten";
    }

    return "";
}

  initialisieren();

})();
