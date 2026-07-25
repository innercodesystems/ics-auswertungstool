const input = document.getElementById("ics-input");
const send = document.getElementById("ics-send");
const messages = document.getElementById("ics-messages");
const counter = document.getElementById("ics-counter");
const reset = document.getElementById("ics-reset");
const typing = document.getElementById("ics-typing");

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

reset.addEventListener("click", function () {
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
});

function sendeNachricht() {
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  let antwort =
    "Danke für deine Nachricht. Erzähl mir bitte etwas mehr darüber.";

  const t = text.toLowerCase();

  if (
    t.includes("angst") ||
    t.includes("ängste") ||
    t.includes("unsicher") ||
    t.includes("sorge")
  ) {
    antwort =
      "Ich nehme wahr, dass Angst gerade viel Raum einnimmt. Wovor hast du im Moment am meisten Angst?";
  } else if (
    t.includes("stress") ||
    t.includes("überfordert") ||
    t.includes("druck")
  ) {
    antwort =
      "Stress ist oft ein Signal deines Nervensystems. Was belastet dich aktuell am meisten?";
  } else if (
    t.includes("energie") ||
    t.includes("müde") ||
    t.includes("erschöpft")
  ) {
    antwort =
      "Energie folgt Aufmerksamkeit. Wofür verwendest du im Moment die meiste Energie?";
  } else if (
    t.includes("beziehung") ||
    t.includes("partner") ||
    t.includes("liebe")
  ) {
    antwort =
      "Beziehungen spiegeln oft unsere tiefsten Bedürfnisse. Was beschäftigt dich dort gerade am meisten?";
  }

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

  input.value = "";
  counter.textContent = "0 / 1500";

  messages.scrollTop = messages.scrollHeight;

  if (typing) {
    typing.hidden = false;
  }

  send.disabled = true;

  setTimeout(function () {
    if (typing) {
      typing.hidden = true;
    }

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
    send.disabled = false;
    input.focus();
  }, 700);
}

function htmlSicher(text) {
  const element = document.createElement("div");
  element.textContent = text;
  return element.innerHTML;
}
