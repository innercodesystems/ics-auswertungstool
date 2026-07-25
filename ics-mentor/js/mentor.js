const input = document.getElementById("ics-input");
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
          <p>Danke für deine Nachricht. Erzähl mir bitte etwas mehr darüber.</p>
        </div>
      </div>
    `;

    messages.scrollTop = messages.scrollHeight;
  }, 700);

  messages.scrollTop = messages.scrollHeight;
}
