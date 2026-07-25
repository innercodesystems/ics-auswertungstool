const input = document.getElementById("ics-input");
const send = document.getElementById("ics-send");
const messages = document.getElementById("ics-messages");
const counter = document.getElementById("ics-counter");
const reset = document.getElementById("ics-reset");
const typing = document.getElementById("ics-typing");

let gespraech = {
  thema: "",
  schritt: 0,
  antworten: []
};

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

function neuesGespraech() {
  gespraech = {
    thema: "",
    schritt: 0,
    antworten: []
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
  counter.textContent = "0 / 1500";
  input.focus();
}

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

  setTimeout(function () {
    if (typing) {
      typing.hidden = true;
    }

    const antwort = passendeAntwort(text);

    mentorNachricht(antwort);

    send.disabled = false;
    input.focus();
  }, 700);
}

function passendeAntwort(text) {
  const t = normalisieren(text);

  if (
  t === "hallo" ||
  t === "hi" ||
  t === "hey" ||
  t.includes("guten morgen") ||
  t.includes("guten tag") ||
  t.includes("guten abend")
) {
  return "Hallo 😊 Schön, dass du da bist. Was beschäftigt dich heute?";
}

if (
  t.includes("wie geht es dir") ||
  t.includes("wie gehts dir")
) {
  return "Danke, dass du fragst. Ich bin hier, um dich zu begleiten. Viel wichtiger ist: Wie geht es dir gerade wirklich?";
}

if (
  t === "danke" ||
  t === "dankeschön" ||
  t === "vielen dank"
) {
  return "Sehr gern. Nimm dir die Zeit, die du brauchst. Was möchtest du als Nächstes mit mir anschauen?";
}

if (
  t === "okay" ||
  t === "ok" ||
  t === "alles klar"
) {
  return "Gut. Was beschäftigt dich im Moment am meisten?";
}

if (
  t === "super" ||
  t === "gut" ||
  t === "sehr gut"
) {
  return "Das freut mich. Was möchtest du heute noch für dich klären?";
}

if (
  t.includes("mir geht es gut") ||
  t.includes("mir gehts gut") ||
  t === "ich bin gut drauf"
) {
  return "Das freut mich. Was trägt heute dazu bei, dass es dir gut geht?";
}

if (
  t.includes("mir geht es schlecht") ||
  t.includes("mir gehts schlecht") ||
  t.includes("nicht gut")
) {
  return "Danke, dass du das so ehrlich sagst. Was belastet dich gerade am meisten?";
}

if (
  t.includes("traurig") ||
  t.includes("trauer")
) {
  return "Traurigkeit möchte oft nicht sofort gelöst, sondern zuerst wahrgenommen werden. Was macht dich gerade traurig?";
}

if (
  t.includes("wuetend") ||
  t.includes("wut")
) {
  return "Wut zeigt häufig, dass eine Grenze verletzt wurde oder etwas nicht stimmig ist. Worüber bist du gerade wütend?";
}

if (
  t.includes("muede") ||
  t.includes("erschoepft")
) {
  return "Dein Körper scheint gerade nach Entlastung zu fragen. Ist es eher körperliche Müdigkeit oder innere Erschöpfung?";
}
  
  const neuesThema = themaErkennen(t);

  if (
    gespraech.thema !== "" &&
    neuesThema !== "" &&
    neuesThema !== gespraech.thema
  ) {
    gespraech.thema = neuesThema;
    gespraech.schritt = 2;
    gespraech.antworten = [];

    return startFrageFuerThema(neuesThema);
  }

  if (gespraech.thema === "") {
    if (neuesThema !== "") {
      gespraech.thema = neuesThema;
      gespraech.schritt = 2;
      gespraech.antworten = [];

      return startFrageFuerThema(neuesThema);
    }

    return "Danke für deine Offenheit. Welches Gefühl steht für dich gerade im Vordergrund?";
  }

  if (gespraech.thema === "angst") {
    gespraech.antworten.push(text);

    if (gespraech.schritt === 2) {
      gespraech.schritt = 3;

      return "Was glaubst du, könnte im schlimmsten Fall geschehen?";
    }

    if (gespraech.schritt === 3) {
      gespraech.schritt = 4;

      return "Was tust du aktuell, um dieses Gefühl oder diese Situation zu vermeiden?";
    }

    if (gespraech.schritt === 4) {
      gespraech.schritt = 5;

      return "Was würdest du tun, wenn du dich innerlich sicher fühlen würdest?";
    }

    if (gespraech.schritt === 5) {
      gespraech.schritt = 6;

      return auswertungAngst();
    }

    return "Das Gespräch ist abgeschlossen. Du kannst oben ein neues Gespräch starten.";
  }

  if (gespraech.thema === "stress") {
    gespraech.antworten.push(text);

    if (gespraech.schritt === 2) {
      gespraech.schritt = 3;

      return "Woran merkst du körperlich, dass der Stress zu viel wird?";
    }

    if (gespraech.schritt === 3) {
      gespraech.schritt = 4;

      return "Was könntest du heute bewusst weglassen oder vereinfachen?";
    }

    if (gespraech.schritt === 4) {
      gespraech.schritt = 5;

      return "Was würde dir heute konkret etwas mehr Ruhe oder Entlastung geben?";
    }

    if (gespraech.schritt === 5) {
      gespraech.schritt = 6;

      return auswertungStress();
    }

    return "Das Gespräch ist abgeschlossen. Du kannst oben ein neues Gespräch starten.";
  }

  return "Erzähl mir bitte mehr darüber.";
}

function themaErkennen(text) {
  if (
    text.includes("angst") ||
    text.includes("aengste") ||
    text.includes("versagen") ||
    text.includes("unsicher") ||
    text.includes("sorge")
  ) {
    return "angst";
  }

  if (
    text.includes("stress") ||
    text.includes("druck") ||
    text.includes("ueberfordert") ||
    text.includes("erschoepft")
  ) {
    return "stress";
  }

  return "";
}

function startFrageFuerThema(thema) {
  if (thema === "angst") {
    return "Ich nehme wahr, dass Angst gerade viel Raum einnimmt. Wovor hast du im Moment am meisten Angst?";
  }

  if (thema === "stress") {
    return "Ich nehme wahr, dass Stress gerade viel Raum einnimmt. Was belastet dich im Moment am stärksten?";
  }

  return "Erzähl mir bitte mehr darüber.";
}

function auswertungAngst() {
  const ausloeser = htmlSicher(gespraech.antworten[0] || "");
  const befürchtung = htmlSicher(gespraech.antworten[1] || "");
  const schutzreaktion = htmlSicher(gespraech.antworten[2] || "");
  const moeglichkeit = htmlSicher(gespraech.antworten[3] || "");

  return `
    <strong>🔎 Deine persönliche Auswertung</strong><br><br>

    <strong>Dein innerer Auslöser</strong><br>
    ${ausloeser}<br><br>

    <strong>Was du befürchtest</strong><br>
    ${befürchtung}<br><br>

    <strong>Deine bisherige Schutzreaktion</strong><br>
    ${schutzreaktion}<br><br>

    <strong>Was eigentlich möglich wäre</strong><br>
    ${moeglichkeit}<br><br>

    <strong>🧠 Inner Code</strong><br>
    Du brauchst nicht völlige Sicherheit, bevor du handelst. Sicherheit kann auch durch einen kleinen bewussten Schritt entstehen.<br><br>

    <strong>❤️ Body Code</strong><br>
    Atme langsam aus und spüre für einen Moment bewusst deine Füße. Dein Körper darf erfahren, dass du im jetzigen Moment sicher bist.<br><br>

    <strong>🔥 Action Code</strong><br>
    Wähle heute einen kleinen Schritt, der Mut zeigt, ohne dich zu überfordern.
  `;
}

function auswertungStress() {
  const belastung = htmlSicher(gespraech.antworten[0] || "");
  const koerpersignal = htmlSicher(gespraech.antworten[1] || "");
  const vereinfachung = htmlSicher(gespraech.antworten[2] || "");
  const entlastung = htmlSicher(gespraech.antworten[3] || "");

  return `
    <strong>🔎 Deine persönliche Auswertung</strong><br><br>

    <strong>Deine größte aktuelle Belastung</strong><br>
    ${belastung}<br><br>

    <strong>Das Signal deines Körpers</strong><br>
    ${koerpersignal}<br><br>

    <strong>Was du vereinfachen könntest</strong><br>
    ${vereinfachung}<br><br>

    <strong>Was dir Entlastung geben würde</strong><br>
    ${entlastung}<br><br>

    <strong>🧠 Inner Code</strong><br>
    Du musst nicht alles gleichzeitig tragen. Klarheit entsteht oft dort, wo du bewusst entscheidest, was heute wirklich wichtig ist.<br><br>

    <strong>❤️ Body Code</strong><br>
    Atme länger aus als ein. Senke bewusst deine Schultern und gib deinem Nervensystem für einen Moment das Signal, dass du nichts leisten musst.<br><br>

    <strong>🔥 Action Code</strong><br>
    Wähle heute eine Aufgabe, die du verschiebst, vereinfachst oder ganz weglässt.
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

  messages.scrollTop = messages.scrollHeight;
}

function mentorNachricht(antwort) {
  messages.insertAdjacentHTML(
    "beforeend",
    `
      <div class="chat-row mentor-row">
        <div class="chat-avatar">🧠</div>

        <div class="chat-bubble mentor-bubble">
          <strong>ICS Mentor</strong>
          <p>${antwort}</p>
        </div>
      </div>
    `
  );

  messages.scrollTop = messages.scrollHeight;
}

function normalisieren(text) {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss");
}

function htmlSicher(text) {
  const element = document.createElement("div");
  element.textContent = text;
  return element.innerHTML;
}
