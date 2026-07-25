const input = document.getElementById("ics-input");
const send = document.getElementById("ics-send");
const messages = document.getElementById("ics-messages");
const counter = document.getElementById("ics-counter");
const reset = document.getElementById("ics-reset");
const typing = document.getElementById("ics-typing");

const startNachricht =
  "Willkommen. Was beschäftigt dich im Moment am meisten?";

/* =========================================================
   GESPRÄCHSSPEICHER
========================================================= */

let gespraech = {
  thema: "",
  schritt: 0,
  antworten: [],
  abgeschlossen: false
};

/* =========================================================
   THEMEN UND GESPRÄCHSABLAUF
========================================================= */

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
      "panik",
      "befuerchtung"
    ],

    start:
      "Ich nehme wahr, dass Angst oder Unsicherheit gerade viel Raum einnimmt. Wovor hast du im Moment am meisten Angst?",

    fragen: [
      "Was glaubst du, könnte im schlimmsten Fall geschehen?",
      "Was tust du momentan, um dieses Gefühl oder diese Situation zu vermeiden?",
      "Was würdest du tun, wenn du dich innerlich sicher fühlen würdest?"
    ],

    auswertung: {
      titel: "Dein aktuelles Angst- und Sicherheitsmuster",

      innerCode:
        "Du musst nicht warten, bis jede Unsicherheit verschwunden ist. Innere Sicherheit kann entstehen, während du einen kleinen bewussten Schritt gehst.",

      bodyCode:
        "Atme langsam und länger aus als ein. Spüre beide Füße auf dem Boden und orientiere dich bewusst im Raum. Dein Körper darf erfahren, dass du in diesem Moment sicher bist.",

      actionCode:
        "Wähle heute einen kleinen Schritt, der Mut zeigt, ohne dich zu überfordern.",

      reset:
        "Realisiere die Angst, ohne sie zu bekämpfen. Erkenne ihre Schutzabsicht. Nimm deinen Körper wahr. Entscheide dich für einen kleinen Schritt. Transformiere Unsicherheit durch eine neue Erfahrung."
    }
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

    auswertung: {
      titel: "Dein aktuelles Belastungs- und Entlastungsmuster",

      innerCode:
        "Du musst nicht alles gleichzeitig tragen. Klarheit entsteht oft dort, wo du bewusst entscheidest, was heute wirklich wichtig ist.",

      bodyCode:
        "Senke bewusst deine Schultern. Löse den Kiefer und atme langsam aus. Gib deinem Nervensystem für einen Moment das Signal, dass du gerade nichts leisten musst.",

      actionCode:
        "Verschiebe, vereinfache oder streiche heute bewusst eine Aufgabe.",

      reset:
        "Realisiere deine aktuelle Belastung. Erkenne, was nicht wirklich heute erledigt werden muss. Nimm deine Körpersignale wahr. Entscheide dich für Entlastung. Transformiere Dauerfunktionieren in bewusste Priorität."
    }
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
      "allein",
      "einsam",
      "petra",
      "freundin",
      "freund"
    ],

    start:
      "Beziehungen berühren oft unsere tiefsten Bedürfnisse. Was beschäftigt dich in deiner Beziehung oder Verbindung gerade am meisten?",

    fragen: [
      "Welches Bedürfnis von dir wird in dieser Situation gerade nicht erfüllt?",
      "Wie reagierst du normalerweise, wenn du dich nicht gesehen, verstanden oder sicher fühlst?",
      "Was wäre eine ehrliche und gleichzeitig respektvolle Handlung, die dir selbst treu bleibt?"
    ],

    auswertung: {
      titel: "Dein aktuelles Beziehungs- und Bedürfnismuster",

      innerCode:
        "Nähe entsteht nicht durch Selbstaufgabe. Eine tragfähige Verbindung beginnt dort, wo du deine Wahrheit wahrnimmst und respektvoll ausdrückst.",

      bodyCode:
        "Lege eine Hand auf den Brustkorb und eine auf den Bauch. Spüre, ob dein Körper gerade Nähe, Abstand, Schutz oder Ausdruck braucht.",

      actionCode:
        "Formuliere heute einen ehrlichen Satz über dein Bedürfnis, ohne Vorwurf und ohne Forderung.",

      reset:
        "Realisiere, was zwischen euch geschieht. Erkenne dein eigentliches Bedürfnis. Nimm deine körperliche Reaktion wahr. Entscheide dich für eine klare Haltung. Transformiere unausgesprochene Spannung in ehrliche Kommunikation."
    }
  },

  energie: {
    name: "Energie und Erschöpfung",

    begriffe: [
      "energie",
      "energielos",
      "muedigkeit",
      "muede",
      "kraftlos",
      "keine kraft",
      "ausgelaugt",
      "antriebslos",
      "erschoepft",
      "erschoepfung"
    ],

    start:
      "Deine Energie scheint gerade Aufmerksamkeit zu brauchen. Wodurch verlierst du im Moment am meisten Kraft?",

    fragen: [
      "Welche Menschen, Aufgaben oder Gedanken ziehen regelmäßig Energie von dir ab?",
      "Was gibt dir normalerweise spürbar Kraft, kommt momentan aber zu kurz?",
      "Welche eine Veränderung würde deine Energie heute am stärksten schützen?"
    ],

    auswertung: {
      titel: "Dein aktuelles Energie- und Kraftmuster",

      innerCode:
        "Energie entsteht nicht nur durch mehr Ruhe, sondern auch dadurch, dass du aufhörst, dich ständig gegen dich selbst zu bewegen.",

      bodyCode:
        "Schließe für einen Moment die Augen und frage deinen Körper: Brauche ich gerade Ruhe, Bewegung, Nahrung, Abstand oder Verbindung?",

      actionCode:
        "Schütze heute mindestens 30 Minuten bewusst vor fremden Anforderungen und digitalen Reizen.",

      reset:
        "Realisiere deinen Energieverlust. Erkenne seine wichtigste Quelle. Nimm das Bedürfnis deines Körpers wahr. Entscheide dich für eine Grenze. Transformiere Energieverlust in bewusste Selbstführung."
    }
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
      "kuendigen",
      "kuendigung",
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

    auswertung: {
      titel: "Dein aktuelles Arbeits- und Entscheidungsmuster",

      innerCode:
        "Berufliche Klarheit entsteht nicht dadurch, dass du jede Unsicherheit vermeidest. Sie entsteht, wenn du erkennst, was nicht länger zu dir passt.",

      bodyCode:
        "Achte darauf, wie dein Körper auf verschiedene berufliche Möglichkeiten reagiert: Wird es enger, schwerer und unruhiger – oder weiter und klarer?",

      actionCode:
        "Definiere heute eine konkrete berufliche Grenze oder einen nächsten überprüfbaren Schritt.",

      reset:
        "Realisiere deine aktuelle Arbeitssituation. Erkenne deinen beeinflussbaren Bereich. Nimm deine körperliche Resonanz wahr. Entscheide dich für eine klare Grenze. Transformiere berufliche Unklarheit in eine konkrete Handlung."
    }
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
      "unterhalt",
      "zahlung",
      "bezahlen",
      "konto"
    ],

    start:
      "Finanzielle Themen können schnell starken inneren Druck erzeugen. Was belastet dich daran im Moment am meisten?",

    fragen: [
      "Welche konkrete Zahl, Zahlung oder Unsicherheit macht dir derzeit am meisten Sorgen?",
      "Was vermeidest du möglicherweise, weil der Blick darauf unangenehm ist?",
      "Welcher realistische nächste Schritt würde dir heute etwas mehr Kontrolle und Klarheit geben?"
    ],

    auswertung: {
      titel: "Dein aktuelles Finanz- und Sicherheitsmuster",

      innerCode:
        "Finanzielle Klarheit beginnt nicht erst, wenn genug Geld vorhanden ist. Sie beginnt mit einem ehrlichen Blick auf die aktuelle Realität.",

      bodyCode:
        "Beobachte, wo du finanziellen Druck im Körper spürst. Atme bewusst in diesen Bereich und trenne für einen Moment die tatsächlichen Zahlen von den inneren Befürchtungen.",

      actionCode:
        "Notiere heute alle offenen Zahlungen und markiere genau eine, die du konkret klärst.",

      reset:
        "Realisiere deine finanzielle Situation ohne Bewertung. Erkenne die wichtigste offene Position. Nimm die Angstreaktion deines Körpers wahr. Entscheide dich für eine konkrete Klärung. Transformiere Vermeidung in Überblick."
    }
  },

  familie: {
    name: "Familie und Verantwortung",

    begriffe: [
      "familie",
      "mutter",
      "vater",
      "eltern",
      "sohn",
      "tochter",
      "kind",
      "kinder",
      "bruder",
      "schwester",
      "familiaer"
    ],

    start:
      "Familienthemen können viele alte Rollen und Verpflichtungen berühren. Was beschäftigt dich in deiner Familie gerade am stärksten?",

    fragen: [
      "Welche Verantwortung übernimmst du dort möglicherweise automatisch?",
      "Was würdest du dir von den anderen wünschen, sprichst es aber nicht klar aus?",
      "Welche gesunde Grenze oder ehrliche Aussage wäre jetzt wichtig?"
    ],

    auswertung: {
      titel: "Dein aktuelles Familien- und Verantwortungsmuster",

      innerCode:
        "Du darfst verbunden sein, ohne für alles verantwortlich zu sein. Liebe und Abgrenzung schließen sich nicht aus.",

      bodyCode:
        "Spüre, ob dein Körper bei diesem Familienthema eher zusammenzieht, schwer wird oder in Alarm geht. Diese Reaktion zeigt dir, wo eine Grenze fehlt.",

      actionCode:
        "Formuliere einen klaren Satz darüber, wofür du verantwortlich bist – und wofür nicht.",

      reset:
        "Realisiere deine familiäre Rolle. Erkenne übernommene Verantwortung. Nimm deine innere Belastung wahr. Entscheide dich für eine gesunde Grenze. Transformiere Pflichtgefühl in bewusste Verbindung."
    }
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
      "kritik",
      "vergleichen",
      "vergleich"
    ],

    start:
      "Ich höre darin viel Selbstzweifel oder innere Bewertung. Was glaubst du im Moment über dich selbst?",

    fragen: [
      "Wessen Stimme oder Erwartung könnte hinter dieser inneren Kritik stehen?",
      "Wie verhältst du dich, wenn du glaubst, nicht gut genug zu sein?",
      "Was würdest du einem Menschen sagen, den du liebst, wenn er genauso über sich denken würde?"
    ],

    auswertung: {
      titel: "Dein aktuelles Selbstwert- und Kritikmuster",

      innerCode:
        "Dein Wert hängt nicht davon ab, ob du jederzeit funktionierst, erfolgreich bist oder die Erwartungen anderer erfüllst.",

      bodyCode:
        "Richte dich bewusst auf, atme ruhig und spüre den Boden. Dein Körper darf eine Haltung einnehmen, die nicht um Erlaubnis bittet.",

      actionCode:
        "Notiere eine konkrete Fähigkeit oder Handlung, auf die du ehrlich stolz bist, und handle heute einmal aus dieser Haltung heraus.",

      reset:
        "Realisiere deine Selbstkritik. Erkenne ihre Herkunft. Nimm wahr, wie dein Körper darauf reagiert. Entscheide dich für eine neue innere Aussage. Transformiere Abwertung in Selbstachtung."
    }
  }
};

/* =========================================================
   EREIGNISSE
========================================================= */

send.addEventListener("click", sendeNachricht);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendeNachricht();
  }
});

input.addEventListener("input", function () {
  counter.textContent = input.value.length + " / 1500";
});

reset.addEventListener("click", neuesGespraech);

/* =========================================================
   NEUES GESPRÄCH
========================================================= */

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
        <p>${startNachricht}</p>
      </div>
    </div>
  `;

  input.value = "";
  counter.textContent = "0 / 1500";
  send.disabled = false;

  if (typing) {
    typing.hidden = true;
  }

  input.focus();
}

/* =========================================================
   NACHRICHT SENDEN
========================================================= */

function sendeNachricht() {
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  userNachricht(text);

  input.value = "";
  counter.textContent = "0 / 1500";
  send.disabled = true;

  if (typing) {
    typing.hidden = false;
  }

  const denkzeit = berechneDenkzeit(text);

  setTimeout(function () {
    if (typing) {
      typing.hidden = true;
    }

    const antwort = passendeAntwort(text);

    mentorNachricht(antwort);

    send.disabled = false;
    input.focus();
  }, denkzeit);
}

/* =========================================================
   ANTWORTLOGIK
========================================================= */

function passendeAntwort(text) {
  const t = normalisieren(text);

  /* Gespräch neu starten per Texteingabe */

  if (
    t === "neu starten" ||
    t === "neues gespraech" ||
    t === "anderes thema"
  ) {
    neuesGespraech();

    return "";
  }

  /* Smalltalk funktioniert auch während eines Gesprächs */

  const smalltalk = smalltalkAntwort(t);

  if (smalltalk !== "") {
    return smalltalk;
  }

  const erkanntesThema = themaErkennen(t);

  /* Ein neues Hauptthema wird ausdrücklich genannt */

  if (
    gespraech.thema !== "" &&
    erkanntesThema !== "" &&
    erkanntesThema !== gespraech.thema
  ) {
    gespraech = {
      thema: erkanntesThema,
      schritt: 0,
      antworten: [],
      abgeschlossen: false
    };

    return themen[erkanntesThema].start;
  }

  /* Noch kein Thema aktiv */

  if (gespraech.thema === "") {
    if (erkanntesThema !== "") {
      gespraech.thema = erkanntesThema;
      gespraech.schritt = 0;
      gespraech.antworten = [];
      gespraech.abgeschlossen = false;

      return themen[erkanntesThema].start;
    }

    const emotionsAntwort = emotionErkennen(t);

    if (emotionsAntwort !== "") {
      return emotionsAntwort;
    }

    return `
      Danke für deine Offenheit. Ich möchte dich besser verstehen.<br><br>
      Geht es dabei hauptsächlich um
      <strong>Angst, Stress, Beziehung, Energie, Arbeit, Finanzen, Familie oder Selbstwert?</strong>
    `;
  }

  /* Aktives Gespräch abgeschlossen */

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
      Du kannst oben ein <strong>neues Gespräch starten</strong>
      oder mir direkt ein neues Thema nennen.
    `;
  }

  /* Antwort im aktiven Gespräch speichern */

  gespraech.antworten.push(text);

  const themaDaten = themen[gespraech.thema];

  if (gespraech.schritt < themaDaten.fragen.length) {
    const frage = themaDaten.fragen[gespraech.schritt];

    gespraech.schritt += 1;

    return frage;
  }

  gespraech.abgeschlossen = true;

  return auswertungErstellen();
}

/* =========================================================
   SMALLTALK
========================================================= */

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
    return "Danke, dass du fragst. Ich bin hier, um dich zu begleiten. Viel wichtiger ist: Wie geht es dir gerade wirklich?";
  }

  if (
    text === "danke" ||
    text === "dankeschoen" ||
    text === "vielen dank"
  ) {
    if (gespraech.thema !== "" && !gespraech.abgeschlossen) {
      return "Sehr gern. Wir können uns dafür alle Zeit nehmen, die du brauchst. Möchtest du bei diesem Thema weitermachen?";
    }

    return "Sehr gern. Was möchtest du als Nächstes mit mir anschauen?";
  }

  if (
    text === "okay" ||
    text === "ok" ||
    text === "alles klar"
  ) {
    if (gespraech.thema !== "" && !gespraech.abgeschlossen) {
      return "Gut. Nimm dir einen Moment und antworte so ehrlich, wie es sich für dich richtig anfühlt.";
    }

    return "Gut. Was beschäftigt dich im Moment am meisten?";
  }

  if (
    text === "super" ||
    text === "gut" ||
    text === "sehr gut"
  ) {
    return "Das freut mich. Was möchtest du heute noch für dich klären?";
  }

  if (
    text === "ja" &&
    gespraech.thema === ""
  ) {
    return "Dann erzähl mir bitte, was dich im Moment am stärksten beschäftigt.";
  }

  if (
    text === "nein" &&
    gespraech.thema === ""
  ) {
    return "Das ist völlig in Ordnung. Du kannst einfach frei schreiben, was gerade in dir auftaucht.";
  }

  return "";
}

/* =========================================================
   EMOTIONEN
========================================================= */

function emotionErkennen(text) {
  if (
    text.includes("mir geht es gut") ||
    text.includes("mir gehts gut") ||
    text.includes("gut drauf")
  ) {
    return "Das freut mich. Was trägt heute dazu bei, dass es dir gut geht?";
  }

  if (
    text.includes("mir geht es schlecht") ||
    text.includes("mir gehts schlecht") ||
    text.includes("nicht gut")
  ) {
    return "Danke, dass du das ehrlich sagst. Was belastet dich gerade am meisten?";
  }

  if (
    text.includes("traurig") ||
    text.includes("trauer")
  ) {
    return "Traurigkeit möchte oft nicht sofort gelöst, sondern zuerst wahrgenommen werden. Was macht dich gerade traurig?";
  }

  if (
    text.includes("wuetend") ||
    text.includes("wut") ||
    text.includes("sauer")
  ) {
    return "Wut zeigt häufig, dass eine Grenze verletzt wurde oder etwas nicht stimmig ist. Worüber bist du gerade wütend?";
  }

  if (
    text.includes("enttaeuscht") ||
    text.includes("enttaeuschung")
  ) {
    return "Enttäuschung zeigt oft, dass eine Hoffnung oder Erwartung nicht erfüllt wurde. Was hattest du dir stattdessen gewünscht?";
  }

  if (
    text.includes("einsam") ||
    text.includes("alleine")
  ) {
    return "Einsamkeit kann auch entstehen, wenn wir uns trotz anderer Menschen nicht wirklich gesehen fühlen. Was fehlt dir gerade am meisten?";
  }

  if (
    text.includes("verwirrt") ||
    text.includes("unklar") ||
    text.includes("weiss nicht")
  ) {
    return "Dann müssen wir noch keine fertige Antwort finden. Welche zwei Gedanken oder Möglichkeiten stehen gerade gegeneinander?";
  }

  if (
    text.includes("gluecklich") ||
    text.includes("freue mich") ||
    text.includes("freude")
  ) {
    return "Das klingt schön. Was genau löst dieses Gefühl von Freude in dir aus?";
  }

  return "";
}

/* =========================================================
   THEMENERKENNUNG MIT PUNKTESYSTEM
========================================================= */

function themaErkennen(text) {
  let bestesThema = "";
  let hoechstePunktzahl = 0;

  for (const thema in themen) {
    let punktzahl = 0;

    for (const begriff of themen[thema].begriffe) {
      if (text.includes(normalisieren(begriff))) {
        punktzahl += begriff.includes(" ") ? 3 : 1;
      }
    }

    if (punktzahl > hoechstePunktzahl) {
      hoechstePunktzahl = punktzahl;
      bestesThema = thema;
    }
  }

  return bestesThema;
}

/* =========================================================
   PERSÖNLICHE AUSWERTUNG
========================================================= */

function auswertungErstellen() {
  const daten = themen[gespraech.thema];
  const antworten = gespraech.antworten;

  const antwort1 = htmlSicher(antworten[0] || "Nicht näher beschrieben");
  const antwort2 = htmlSicher(antworten[1] || "Nicht näher beschrieben");
  const antwort3 = htmlSicher(antworten[2] || "Nicht näher beschrieben");
  const antwort4 = htmlSicher(antworten[3] || "Nicht näher beschrieben");

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
        <p>${antwort1}</p>
      </div>

      <div class="auswertung-bereich">
        <strong>Was darunter liegen könnte</strong>
        <p>${antwort2}</p>
      </div>

      <div class="auswertung-bereich">
        <strong>Dein bisheriges Reaktionsmuster</strong>
        <p>${antwort3}</p>
      </div>

      <div class="auswertung-bereich">
        <strong>Deine mögliche neue Richtung</strong>
        <p>${antwort4}</p>
      </div>

      <div class="code-card">
        <strong>🧠 Inner Code</strong>
        <p>${daten.auswertung.innerCode}</p>
      </div>

      <div class="code-card">
        <strong>❤️ Body Code</strong>
        <p>${daten.auswertung.bodyCode}</p>
      </div>

      <div class="code-card">
        <strong>🔥 Action Code</strong>
        <p>${daten.auswertung.actionCode}</p>
      </div>

      <div class="reset-card">
        <strong>🔄 RESET-Impuls</strong>
        <p>${daten.auswertung.reset}</p>
      </div>

      <p class="auswertung-abschluss">
        Du musst nicht alles auf einmal verändern.
        Entscheidend ist der nächste bewusste Schritt.
      </p>

    </div>
  `;
}

/* =========================================================
   CHAT-NACHRICHTEN
========================================================= */

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

  zumChatEndeScrollen();
}

function mentorNachricht(antwort) {
  if (antwort === "") {
    return;
  }

  messages.insertAdjacentHTML(
    "beforeend",
    `
      <div class="chat-row mentor-row">
        <div class="chat-avatar">🧠</div>

        <div class="chat-bubble mentor-bubble">
          <strong>ICS Mentor</strong>
          <div class="mentor-text">${antwort}</div>
        </div>
      </div>
    `
  );

  zumChatEndeScrollen();
}

function zumChatEndeScrollen() {
  requestAnimationFrame(function () {
    messages.scrollTop = messages.scrollHeight;
  });
}

/* =========================================================
   HILFSFUNKTIONEN
========================================================= */

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

function berechneDenkzeit(text) {
  const basis = 700;
  const zusatz = Math.min(text.length * 5, 800);

  return basis + zusatz;
}
