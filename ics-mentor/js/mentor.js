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

  if (text === "") return;

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

  const neuesThema = themaErkennen(t);

  if (
    gespraech.thema !== "" &&
    neuesThema !== "" &&
    neuesThema !== gespraech.thema
  ) {
    gespraech.thema = neuesThema;
    gespraech.schritt = 1;
    gespraech.antworten = [];

    return startFrageFuerThema(neuesThema);
  }

  if (gespraech.thema === "") {
    if (neuesThema !== "") {
      gespraech.thema = neuesThema;
      gespraech.schritt = 1;

      return startFrageFuerThema(neuesThema);
    }

    return "Danke für deine Offenheit. Welches Gefühl steht für dich gerade im Vordergrund?";
  }

  if (gespraech.thema === "angst") {
    gespraech.antworten.push(text);

    if (gespraech.schritt === 1) {
      gespraech.schritt = 2;
      return "Was glaubst du, könnte im schlimmsten Fall geschehen?";
    }

    if (gespraech.schritt === 2) {
      gespraech.schritt = 3;
      return "Was tust du aktuell, um dieses Gefühl oder diese Situation zu vermeiden?";
    }

    if (gespraech.schritt === 3) {
      gespraech.schritt = 4;
      return "Was würdest du tun, wenn du dich innerlich sicher fühlen würdest?";
    }

    if (gespraech.schritt === 4) {
      gespraech.schritt = 5;
      return auswertungAngst();
    }

    return "Das Gespräch ist abgeschlossen. Du kannst oben ein neues Gespräch starten.";
  }

  if (gespraech.thema === "stress") {
    gespraech.antworten.push(text);

    if (gespraech.schritt === 1) {
      gespraech.schritt = 2;
      return "Was belastet dich im Moment am stärksten?";
    }

    if (gespraech.schritt === 2) {
      gespraech.schritt = 3;
      return "Woran merkst du körperlich, dass der Stress zu viel wird?";
    }

    if (gespraech.schritt === 3) {
      gespraech.schritt = 4;
      return "Was könntest du heute bewusst weglassen oder vereinfachen?";
    }

    return "Danke. Wir bauen die Stress-Auswertung im nächsten Schritt ein.";
  }

  return "Erzähl mir bitte mehr darüber.";
}

function auswertungAngst() {
  const ausloeser = htmlSicher(gespraech.antworten[0] || "");
  const folge = htmlSicher(gespraech.antworten[1] || "");
  const schutz = htmlSicher(gespraech.antworten[2] || "");
  const moeglichkeit = htmlSicher(gespraech.antworten[3] || "");

  return `
    <strong>🔎 Deine persönliche Auswertung</strong><br><br>

    <strong>Dein innerer Auslöser</strong><br>
    ${ausloeser}<br><br>

    <strong>Was du befürchtest</strong><br>
    ${folge}<br><br>

    <strong>Deine bisherige Schutzreaktion</strong><br>
    ${schutz}<br><br>

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
