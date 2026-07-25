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

}
