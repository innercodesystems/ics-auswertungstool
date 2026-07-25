const input = document.getElementById("ics-input");

let antwort = "Danke für deine Nachricht. Erzähl mir bitte etwas mehr darüber.";

const t = text.toLowerCase();

if (t.includes("angst")) {

    antwort = "Ich nehme wahr, dass Angst gerade viel Raum einnimmt. Wovor hast du im Moment am meisten Angst?";

} else if (t.includes("stress")) {

    antwort = "Stress ist oft ein Signal deines Nervensystems. Was belastet dich aktuell am meisten?";

} else if (t.includes("energie")) {

    antwort = "Energie folgt Aufmerksamkeit. Wofür verwendest du im Moment die meiste Energie?";

} else if (t.includes("beziehung")) {

    antwort = "Beziehungen spiegeln oft unsere tiefsten Bedürfnisse. Was beschäftigt dich dort gerade?";

}

const send = document.getElementById("ics-send");
const messages = document.getElementById("ics-messages");

send.addEventListener("click", sendeNachricht);

function sendeNachricht() {
  const text = input.value.trim();

  if (text === "") return;

  messages.innerHTML += `
    <div class="chat-row user-row">
      <div class="chat-bubble user-bubble">
        ${text}
      </div>
    </div>
  `;

  input.value = "";

  setTimeout(() => {
    messages.innerHTML += `
      <div class="chat-row mentor-row">
        <div class="chat-avatar">🧠</div>

        <div class="chat-bubble mentor-bubble">
          <strong>ICS Mentor</strong>
          <p>${antwort}</p>
        </div>
      </div>
    `;

    messages.scrollTop = messages.scrollHeight;
  }, 700);

  messages.scrollTop = messages.scrollHeight;
}
