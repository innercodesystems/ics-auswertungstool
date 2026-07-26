const input = document.getElementById("ics-input");
const send = document.getElementById("ics-send");
const messages = document.getElementById("ics-messages");
const counter = document.getElementById("ics-counter");
const reset = document.getElementById("ics-reset");
const typing = document.getElementById("ics-typing");

let gespraech = {
  thema: "",
  schritt: 0,
  antworten: [],
  abgeschlossen: false
};

const themen = {
  angst: {
    name: "Angst und Unsicherheit",
    begriffe: [
      "angst",
      "aengste",
      "aengstlich",
      "unsicher",
      "unsicherheit",
      "sorge",
      "sorgen",
      "versagen",
      "ablehnung",
      "panik"
    ],
    start:
      "Ich nehme wahr, dass Angst oder Unsicherheit gerade viel Raum einnimmt. Wovor hast du im Moment am meisten Angst?",
    fragen: [
      "Was glaubst du, könnte im schlimmsten Fall geschehen?",
      "Was tust du momentan, um dieses Gefühl oder diese Situation zu vermeiden?",
      "Was würdest du tun, wenn du dich innerlich sicher fühlen würdest?"
    ],
    innerCode:
      "Du musst nicht warten, bis jede Unsicherheit verschwunden ist. Innere Sicherheit kann entstehen, während du einen kleinen bewussten Schritt gehst.",
    bodyCode:
      "Atme langsam und länger aus als ein. Spüre beide Füße auf dem Boden und orientiere dich bewusst im Raum.",
    actionCode:
      "Wähle heute einen kleinen Schritt, der Mut zeigt, ohne dich zu überfordern.",
    reset:
      "Realisiere die Angst. Erkenne ihre Schutzabsicht. Nimm deinen Körper wahr. Entscheide dich für einen kleinen Schritt. Transformiere Unsicherheit durch eine neue Erfahrung."
  },

  stress: {
    name: "Stress und Überforderung",
    begriffe: [
      "stress",
      "gestresst",
      "druck",
      "ueberfordert",
      "ueberforderung",
      "erschoepft",
      "erschoepfung",
      "zu viel",
      "keine zeit",
      "belastet",
      "belastung",
      "funktionieren"
    ],
    start:
      "Ich nehme wahr, dass Stress oder Überforderung gerade viel Raum einnimmt. Was belastet dich im Moment am stärksten?",
    fragen: [
      "Woran merkst du körperlich, dass die Belastung zu viel wird?",
      "Was versuchst du trotzdem weiterhin zu leisten oder aufrechtzuerhalten?",
      "Was würde dir heute konkret etwas mehr Ruhe oder Entlastung geben?"
    ],
    innerCode:
      "Du musst nicht alles gleichzeitig tragen. Klarheit entsteht dort, wo du bewusst entscheidest, was heute wirklich wichtig ist.",
    bodyCode:
      "Senke bewusst deine Schultern, löse den Kiefer und atme langsam aus.",
    actionCode:
      "Verschiebe, vereinfache oder streiche heute bewusst eine Aufgabe.",
    reset:
      "Realisiere deine Belastung. Erkenne, was heute nicht notwendig ist. Nimm deine Körpersignale wahr. Entscheide dich für Entlastung."
  },

  beziehung: {
    name: "Beziehung und Nähe",
    begriffe: [
      "beziehung",
      "partner",
      "partnerin",
      "liebe",
      "ehe",
      "trennung",
      "naehe",
      "distanz",
      "streit",
      "einsam",
      "freund",
      "freundin"
    ],
    start:
      "Beziehungen berühren oft unsere tiefsten Bedürfnisse. Was beschäftigt dich dort gerade am meisten?",
    fragen: [
      "Welches Bedürfnis von dir wird in dieser Situation gerade nicht erfüllt?",
      "Wie reagierst du normalerweise, wenn du dich nicht gesehen oder verstanden fühlst?",
      "Was wäre eine ehrliche und gleichzeitig respektvolle Handlung, die dir selbst treu bleibt?"
    ],
    innerCode:
      "Nähe entsteht nicht durch Selbstaufgabe. Eine tragfähige Verbindung beginnt dort, wo du deine Wahrheit wahrnimmst und ausdrückst.",
    bodyCode:
      "Lege eine Hand auf deinen Brustkorb und eine auf deinen Bauch. Spüre, ob dein Körper Nähe, Abstand, Schutz oder Ausdruck braucht.",
    actionCode:
      "Formuliere heute einen ehrlichen Satz über dein Bedürfnis – ohne Vorwurf und ohne Forderung.",
    reset:
      "Realisiere, was geschieht. Erkenne dein Bedürfnis. Nimm deine Reaktion wahr. Entscheide dich für eine klare Haltung."
  },

  arbeit: {
    name: "Arbeit und berufliche Klarheit",
    begriffe: [
      "arbeit",
      "job",
      "beruf",
      "chef",
      "kollege",
      "kollegen",
      "firma",
      "kunde",
      "kunden",
      "karriere",
      "business",
      "selbststaendig"
    ],
    start:
      "Deine berufliche Situation scheint dich gerade zu beschäftigen. Was ist dort im Moment das eigentliche Problem?",
    fragen: [
      "Was davon kannst du beeinflussen – und was liegt außerhalb deiner Kontrolle?",
      "Welche Grenze oder Entscheidung vermeidest du momentan?",
      "Wie würde ein beruflicher Schritt aussehen, der besser zu deiner Kraft und deinen Werten passt?"
    ],
    innerCode:
      "Berufliche Klarheit entsteht, wenn du erkennst, was nicht länger zu dir passt.",
    bodyCode:
      "Achte darauf, ob dein Körper bei einer Möglichkeit enger, schwerer und unruhiger oder weiter und klarer wird.",
    actionCode:
      "Definiere heute eine konkrete berufliche Grenze oder einen nächsten überprüfbaren Schritt.",
    reset:
      "Realisiere deine Situation. Erkenne deinen beeinflussbaren Bereich. Nimm deine Resonanz wahr. Entscheide dich für Klarheit."
  },

  finanzen: {
    name: "Finanzen und Sicherheit",
    begriffe: [
      "geld",
      "finanzen",
      "finanziell",
      "rechnung",
      "rechnungen",
      "schulden",
      "miete",
      "steuer",
      "einkommen",
      "ausgaben",
      "zahlung",
      "konto"
    ],
    start:
      "Finanzielle Themen können starken inneren Druck erzeugen. Was belastet dich daran im Moment am meisten?",
    fragen: [
      "Welche konkrete Zahl, Zahlung oder Unsicherheit macht dir derzeit am meisten Sorgen?",
      "Was vermeidest du möglicherweise, weil der Blick darauf unangenehm ist?",
      "Welcher realistische nächste Schritt würde dir heute mehr Kontrolle und Klarheit geben?"
    ],
    innerCode:
      "Finanzielle Klarheit beginnt mit einem ehrlichen Blick auf die aktuelle Realität.",
    bodyCode:
      "Trenne für einen Moment die tatsächlichen Zahlen von deinen inneren Befürchtungen.",
    actionCode:
      "Notiere alle offenen Zahlungen und kläre heute genau eine davon.",
    reset:
      "Realisiere die Situation. Erkenne die wichtigste offene Position. Nimm die Angst wahr. Entscheide dich für eine konkrete Klärung."
  },

  selbstwert: {
    name: "Selbstwert und innere Kritik",
    begriffe: [
      "selbstwert",
      "nicht gut genug",
      "wertlos",
      "zweifel",
      "selbstzweifel",
      "versager",
      "kann nichts",
      "unfaehig",
      "kritik"
    ],
    start:
      "Ich höre darin viel Selbstzweifel oder innere Bewertung. Was glaubst du im Moment über dich selbst?",
    fragen: [
      "Wessen Stimme oder Erwartung könnte hinter dieser inneren Kritik stehen?",
      "Wie verhältst du dich, wenn du glaubst, nicht gut genug zu sein?",
      "Was würdest du einem Menschen sagen, den du liebst, wenn er genauso über sich denken würde?"
    ],
    innerCode:
      "Dein Wert hängt nicht davon ab, ob du jederzeit funktionierst oder die Erwartungen anderer erfüllst.",
    bodyCode:
      "Richte dich bewusst auf, atme ruhig und spüre den Boden unter deinen Füßen.",
    actionCode:
      "Notiere eine Fähigkeit oder Handlung, auf die du ehrlich stolz bist.",
    reset:
      "Realisiere deine Selbstkritik. Erkenne ihre Herkunft. Nimm deine Reaktion wahr. Entscheide dich für Selbstachtung."
  }
};

const musterDaten = {
  rueckzug: {
    begriffe: [
      "ich ziehe mich zurueck",
      "ziehe mich zurueck",
      "ich gehe auf abstand",
      "ich mache dicht",
      "ich sage nichts mehr",
      "ich isoliere mich"
    ],
    antwort:
      "Ich erkenne darin möglicherweise ein <strong>Rückzugsmuster</strong>.<br><br>Rückzug kann kurzfristig schützen, verhindert aber manchmal, dass deine wirklichen Bedürfnisse sichtbar werden.<br><br>Ziehst du dich eher zurück, um dich zu schützen, einen Konflikt zu vermeiden oder weil du dich überfordert fühlst?"
  },

  kontrolle: {
    begriffe: [
      "ich muss alles kontrollieren",
      "ich will alles kontrollieren",
      "ich kann nicht loslassen",
      "ich muss alles im griff haben",
      "ich mache lieber alles selbst"
    ],
    antwort:
      "Ich erkenne darin möglicherweise ein <strong>Kontrollmuster</strong>.<br><br>Kontrolle versucht häufig, Unsicherheit zu reduzieren und kostet gleichzeitig viel Kraft.<br><br>Was befürchtest du, könnte geschehen, wenn du einen Teil der Kontrolle abgeben würdest?"
  },

  perfektionismus: {
    begriffe: [
      "es muss perfekt sein",
      "ich muss perfekt sein",
      "ich darf keinen fehler machen",
      "es ist nie gut genug",
      "ich muss es besser machen"
    ],
    antwort:
      "Ich erkenne darin möglicherweise ein <strong>Perfektionsmuster</strong>.<br><br>Perfektionismus schützt oft vor Kritik oder Ablehnung.<br><br>Was würde passieren, wenn dein Ergebnis heute gut und stimmig wäre – aber nicht perfekt?"
  },

  anpassung: {
    begriffe: [
      "ich sage immer ja",
      "ich kann nicht nein sagen",
      "ich passe mich immer an",
      "ich mache es allen recht",
      "ich stelle mich hinten an"
    ],
    antwort:
      "Ich erkenne darin möglicherweise ein <strong>Anpassungsmuster</strong>.<br><br>Was würdest du sagen oder entscheiden, wenn deine Bedürfnisse genauso wichtig wären wie die der anderen?"
  },

  vermeidung: {
    begriffe: [
      "ich schiebe es auf",
      "ich vermeide es",
      "ich gehe dem aus dem weg",
      "ich ignoriere es",
      "ich mache es spaeter"
    ],
    antwort:
      "Ich erkenne darin möglicherweise ein <strong>Vermeidungsmuster</strong>.<br><br>Vermeidung entlastet kurzfristig, hält die Belastung aber häufig aufrecht.<br><br>Was wäre der kleinstmögliche Schritt, mit dem du dich der Situation heute annähern könntest?"
  },

  leistung: {
    begriffe: [
      "ich muss funktionieren",
      "ich muss leisten",
      "ich darf nicht ausfallen",
      "ich muss weitermachen",
      "ich kann keine pause machen",
      "ich muss stark sein"
    ],
    antwort:
      "Ich erkenne darin möglicherweise ein <strong>Leistungs- und Funktionsmuster</strong>.<br><br>Wer wärst du in diesem Moment, wenn du gerade nichts beweisen müsstest?"
  }
};

send.addEventListener("click", sendeNachricht);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendeNachricht();
  }
});

input.addEventListener("input", function () {
  if (counter) {
    counter.textContent = input.value.length + " / 1500";
  }
});

reset.addEventListener("click", neuesGespraech);

function neuesGespraech() {
  gespraech = {
    thema: "",
    schritt: 0,
    antworten: [],
    abgeschlossen: false
  };

  messages.innerHTML = `
    <div class="chat-row mentor-row">
      <div class="chat-avatar">🧠</div>

      <div class="chat-bubble mentor-bubble">
        <strong>ICS Mentor</strong>
        <p>Willkommen. Was beschäftigt dich im Moment am meisten?</p>
      </div>
    </div>
  `;

  input.value = "";

  if (counter) {
    counter.textContent = "0 / 1500";
  }

  if (typing) {
    typing.hidden = true;
  }

  send.disabled = false;
  input.focus();
}

function sendeNachricht() {
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  userNachricht(text);

  input.value = "";

  if (counter) {
    counter.textContent = "0 / 1500";
  }

  send.disabled = true;

  if (typing) {
    typing.hidden = false;
  }

  setTimeout(function () {
    try {
      const antwort = passendeAntwort(text);

      if (typing) {
        typing.hidden = true;
      }

      mentorNachricht(antwort);
    } catch (fehler) {
      console.error("ICS Mentor Fehler:", fehler);

      if (typing) {
        typing.hidden = true;
      }

      mentorNachricht(
        "Entschuldige, gerade ist ein technischer Fehler aufgetreten. Bitte starte das Gespräch neu."
      );
    } finally {
      send.disabled = false;
      input.focus();
    }
  }, 800);
}

function passendeAntwort(text) {
  const t = normalisieren(text);

  const smalltalk = smalltalkAntwort(t);

  if (smalltalk !== "") {
    return smalltalk;
  }

  const erkanntesThema = themaErkennen(t);
  const erkanntesMuster = musterErkennen(t);

  if (gespraech.thema === "") {
    if (erkanntesThema !== "") {
      gespraech.thema = erkanntesThema;
      gespraech.schritt = 0;
      gespraech.antworten = [];
      gespraech.abgeschlossen = false;

      return themen[erkanntesThema].start;
    }

    if (erkanntesMuster !== "") {
      return musterDaten[erkanntesMuster].antwort;
    }

    const emotion = emotionAntwort(t);

    if (emotion !== "") {
      return emotion;
    }

    return `
      Danke für deine Offenheit.<br><br>
      Geht es dabei hauptsächlich um
      <strong>Angst, Stress, Beziehung, Arbeit, Finanzen oder Selbstwert</strong>?
    `;
  }

  if (gespraech.abgeschlossen) {
    if (erkanntesThema !== "") {
      gespraech = {
        thema: erkanntesThema,
        schritt: 0,
        antworten: [],
        abgeschlossen: false
      };

      return themen[erkanntesThema].start;
    }

    return `
      Dieses Thema haben wir zunächst abgeschlossen.<br><br>
      Starte oben ein neues Gespräch oder nenne direkt ein neues Thema.
    `;
  }

  if (
    erkanntesThema !== "" &&
    erkanntesThema !== gespraech.thema &&
    willThemaWechseln(t)
  ) {
    gespraech = {
      thema: erkanntesThema,
      schritt: 0,
      antworten: [],
      abgeschlossen: false
    };

    return `
      Wir wechseln zum Thema
      <strong>${themen[erkanntesThema].name}</strong>.<br><br>

      ${themen[erkanntesThema].start}
    `;
  }

  gespraech.antworten.push(text);

  const daten = themen[gespraech.thema];

  if (gespraech.schritt < daten.fragen.length) {
    const frage = daten.fragen[gespraech.schritt];

    gespraech.schritt += 1;

    return frage;
  }

  gespraech.abgeschlossen = true;

  return auswertungErstellen();
}

function smalltalkAntwort(text) {
  if (
    text === "hallo" ||
    text === "hi" ||
    text === "hey" ||
    text.includes("guten morgen") ||
    text.includes("guten tag") ||
    text.includes("guten abend")
  ) {
    return "Hallo 😊 Schön, dass du da bist. Was beschäftigt dich heute?";
  }

  if (
    text.includes("wie geht es dir") ||
    text.includes("wie gehts dir")
  ) {
    return "Danke, dass du fragst. Ich bin hier, um dich zu begleiten. Wie geht es dir gerade wirklich?";
  }

  if (
    text === "danke" ||
    text === "dankeschoen" ||
    text === "vielen dank"
  ) {
    return "Sehr gern. Was möchtest du als Nächstes mit mir anschauen?";
  }

  if (
    text === "okay" ||
    text === "ok" ||
    text === "alles klar"
  ) {
    return "Gut. Was beschäftigt dich im Moment am meisten?";
  }

  if (
    text === "super" ||
    text === "gut" ||
    text === "sehr gut"
  ) {
    return "Das freut mich. Was möchtest du heute noch für dich klären?";
  }

  return "";
}

function emotionAntwort(text) {
  if (
    text.includes("traurig") ||
    text.includes("trauer")
  ) {
    return "Traurigkeit möchte oft zuerst wahrgenommen werden. Was macht dich gerade traurig?";
  }

  if (
    text.includes("wuetend") ||
    text.includes("wut") ||
    text.includes("sauer")
  ) {
    return "Wut zeigt häufig, dass eine Grenze verletzt wurde. Worüber bist du gerade wütend?";
  }

  if (
    text.includes("einsam") ||
    text.includes("alleine")
  ) {
    return "Was fehlt dir gerade am meisten: Nähe, Verständnis oder Verbindung?";
  }

  if (
    text.includes("verwirrt") ||
    text.includes("unklar") ||
    text.includes("weiss nicht")
  ) {
    return "Welche zwei Gedanken oder Möglichkeiten stehen gerade gegeneinander?";
  }

  return "";
}

function themaErkennen(text) {
  let bestesThema = "";
  let bestePunkte = 0;

  for (const thema in themen) {
    let punkte = 0;

    for (const begriff of themen[thema].begriffe) {
      if (begriffGefunden(text, begriff)) {
        punkte += begriff.includes(" ") ? 3 : 1;
      }
    }

    if (punkte > bestePunkte) {
      bestePunkte = punkte;
      bestesThema = thema;
    }
  }

  return bestesThema;
}

function begriffGefunden(text, begriff) {
  const saubererText = normalisieren(text);
  const saubererBegriff = normalisieren(begriff);

  if (saubererBegriff.includes(" ")) {
    return saubererText.includes(saubererBegriff);
  }

  const woerter = saubererText.split(" ");

  return woerter.includes(saubererBegriff);
}

function musterErkennen(text) {
  const saubererText = normalisieren(text);

  for (const muster in musterDaten) {
    for (const begriff of musterDaten[muster].begriffe) {
      if (saubererText.includes(normalisieren(begriff))) {
        return muster;
      }
    }
  }

  return "";
}

function willThemaWechseln(text) {
  const formulierungen = [
    "thema wechseln",
    "wechseln zu",
    "jetzt ueber",
    "lieber ueber",
    "neues thema",
    "stattdessen",
    "ich moechte ueber",
    "lass uns ueber"
  ];

  return formulierungen.some(function (formulierung) {
    return text.includes(formulierung);
  });
}

function auswertungErstellen() {
  const daten = themen[gespraech.thema];
  const antworten = gespraech.antworten;

  return `
    <div class="ics-auswertung">

      <div class="auswertung-label">
        INNER CODE SYSTEMS
      </div>

      <h2>🔎 Deine persönliche Auswertung</h2>

      <p class="auswertung-thema">
        <strong>Thema:</strong> ${daten.name}
      </p>

      <div class="auswertung-bereich">
        <strong>Was dich aktuell beschäftigt</strong>
        <p>${htmlSicher(antworten[0] || "Nicht näher beschrieben")}</p>
      </div>

      <div class="auswertung-bereich">
        <strong>Was darunter liegen könnte</strong>
        <p>${htmlSicher(antworten[1] || "Nicht näher beschrieben")}</p>
      </div>

      <div class="auswertung-bereich">
        <strong>Dein bisheriges Reaktionsmuster</strong>
        <p>${htmlSicher(antworten[2] || "Nicht näher beschrieben")}</p>
      </div>

      <div class="auswertung-bereich">
        <strong>Deine mögliche neue Richtung</strong>
        <p>${htmlSicher(antworten[3] || "Nicht näher beschrieben")}</p>
      </div>

      <div class="code-card">
        <strong>🧠 Inner Code</strong>
        <p>${daten.innerCode}</p>
      </div>

      <div class="code-card">
        <strong>❤️ Body Code</strong>
        <p>${daten.bodyCode}</p>
      </div>

      <div class="code-card">
        <strong>🔥 Action Code</strong>
        <p>${daten.actionCode}</p>
      </div>

      <div class="reset-card">
        <strong>🔄 RESET-Impuls</strong>
        <p>${daten.reset}</p>
      </div>

    </div>
  `;
}

function userNachricht(text) {
  messages.insertAdjacentHTML(
    "beforeend",
    `
      <div class="chat-row user-row">
        <div class="chat-bubble user-bubble">
          ${htmlSicher(text)}
        </div>
      </div>
    `
  );

  scrollZumEnde();
}

function mentorNachricht(antwort) {
  if (!antwort) {
    return;
  }

  messages.insertAdjacentHTML(
    "beforeend",
    `
      <div class="chat-row mentor-row">

        <div class="chat-avatar">
          🧠
        </div>

        <div class="chat-bubble mentor-bubble">
          <strong>ICS Mentor</strong>

          <div class="mentor-text">
            ${antwort}
          </div>
        </div>

      </div>
    `
  );

  scrollZumEnde();
}

function scrollZumEnde() {
  requestAnimationFrame(function () {
    messages.scrollTop = messages.scrollHeight;
  });
}

function normalisieren(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[.,!?;:()"]/g, "")
    .replace(/\s+/g, " ");
}

function htmlSicher(text) {
  const element = document.createElement("div");
  element.textContent = text;
  return element.innerHTML;
}
