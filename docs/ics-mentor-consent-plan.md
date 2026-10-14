# ICS-Mentor 2.0 – Einwilligung und Erinnerung (Testkonzept)

Stand: 14.10.2026. Nur Testbranch, keine Live-Aktivierung.

## Grundsatz
- Ohne ausdrueckliche Einwilligung keine dauerhafte Speicherung persoenlicher Mentor-Erinnerungen.
- Getrennte, standardmaessig deaktivierte Optionen:
  1. Wichtige Erkenntnisse, Ziele und Entscheidungen merken.
  2. Zusaetzlich Gespraechsverlaeufe speichern.
- Keine Kopplung der optionalen Speicherung an die Nutzung des Mentors.
- Einwilligung jederzeit widerrufbar. Erinnerungen einsehen, berichtigen, exportieren und loeschen.
- Keine automatische Uebernahme vorhandener Browserdaten ohne informierte Zustimmung.

## Bestehender Code
- `ics-mentor/js/brain.js`: `ICS_MENTOR_BRAIN_V10`, bis zu 100 Eintraege mit je 500 Zeichen, Scores und Hypothesen.
- `ics-mentor/js/profil.js`: `ICS_MENTOR_PROFILE_V1`, zaehlt Gespraeche und gewichtet Muster/Themen.
- `ics-mentor/js/mentor.js`: ruft `ICS.brain.aktualisieren` auf; Neustart ist kein vollstaendiges Loeschen.
- Die App bettet `ics-mentor/` per iframe ein.

## Technische Reihenfolge
1. Alle lokalen Schreib- und Lesepfade inventarisieren; weitere Speicherorte und Nutzeridentitaet pruefen.
2. Einwilligungsstatus getrennt und versioniert abbilden; keine Speicherung vor Opt-in; Widerruf sperrt weitere Schreibvorgaenge.
3. Bestandsdaten vorerst nicht automatisch loeschen oder migrieren; dem Nutzer eine informierte Auswahl geben.
4. Loeschen aller relevanten Mentor-Schluessel mit Bestaetigung und anschliessender Verifikation.
5. Tests: Default-off, Opt-in getrennt, Widerruf, Loeschung, Reload, eingebettete App, Migration und Fehlerfaelle.
6. Geraeteuebergreifende Speicherung erst nach Authentifizierung, Zugriffsschutz, Datenschutz- und Sicherheitspruefung.

Dieses Dokument ist noch keine Implementierung und aktiviert keine Datenspeicherung.
