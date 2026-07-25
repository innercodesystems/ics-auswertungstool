const input = document.getElementById("ics-input");
const send = document.getElementById("ics-send");
const messages = document.getElementById("ics-messages");
const counter = document.getElementById("ics-counter");
const reset = document.getElementById("ics-reset");
const typing = document.getElementById("ics-typing");

let gespraech = {
  thema: "",
  schritt: 0
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

reset.addEventListener("click", function () {
  gespraech = {
    thema: "",
    schritt: 0
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
});

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
  const t = text.toLowerCase();

  if (gespraech.thema === "") {
    if (
      t.includes("angst") ||
      t.includes("ängste") ||
      t.includes("unsicher") ||
      t.includes("sorge")
    ) {
      gespraech.thema = "angst";
      gespraech.schritt = 1;

      return "Ich nehme wahr, dass Angst gerade viel Raum einnimmt. Wovor hast du im Moment am meisten Angst?";
    }

    return "Danke für deine Offenheit. Erzähl mir bitte etwas mehr darüber.";
  }

  if (gespraech.thema === "angst" && gespraech.schritt === 1) {
    gespraech.schritt = 2;

    return "Was glaubst du, könnte im schlimmsten Fall geschehen?";
  }

  return "Danke. Ich höre dir zu. Was löst diese Situation innerlich in dir aus?";
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

function htmlSicher(text) {
  const element = document.createElement("div");
  element.textContent = text;
  return element.innerHTML;
}
