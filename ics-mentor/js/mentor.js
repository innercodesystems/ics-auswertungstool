window.ICS = window.ICS || {};

const input = document.getElementById("ics-input");
const send = document.getElementById("ics-send");
const messages = document.getElementById("ics-messages");
const counter = document.getElementById("ics-counter");
const reset = document.getElementById("ics-reset");
const profileButton = document.getElementById("ics-profile");
const typing = document.getElementById("ics-typing");

let gespraech = neu();

function neu(){
  return {
    thema: "",
    muster: "",
    weitereMuster: [],
    nebenthemen: [],
    schritt: 0,
    modus: "",
    strategie: "zuhören",
    antworten: [],
    analysen: [],
    erkenntnisse: [],
    hypothesen: [],
    offeneFragen: [],
    abgeschlossen: false,
    gespeichert: false
  };
}

send.addEventListener("click", senden);

input.addEventListener("keydown", function(e){
  if(e.key === "Enter" && !e.shiftKey){
    e.preventDefault();
    senden();
  }
});

input.addEventListener("input", function(){
  counter.textContent = input.value.length + " / 1500";
});

reset.addEventListener("click", neustart);

if(profileButton){
  profileButton.addEventListener("click", profilAnzeigen);
}

function senden(){
  const text = input.value.trim();
  if(!text || send.disabled) return;

  userNachricht(text);
  gespraech.antworten.push(text);

  input.value = "";
  counter.textContent = "0 / 1500";
  send.disabled = true;
  typing.hidden = false;
  scrollen();

  setTimeout(function(){
    typing.hidden = true;
    mentorNachricht(antwort(text));
    send.disabled = false;
    input.focus();
  }, Math.min(1400, 450 + text.length * 7));
}

function antwort(text){
  if(auswertungsWunsch(text)){
    gespraech.abgeschlossen = true;
    speichern();
    return ICS.erstelleAuswertung(gespraech);
  }

  if(themaWechsel(text)){
    gespraech = neu();
  }

  const smalltalk = ICS.pruefeSmalltalk ? ICS.pruefeSmalltalk(text) : null;
  if(smalltalk && gespraech.antworten.length <= 1) return smalltalk;

  const analyse = ICS.brain.analysieren(text, gespraech);

const hypothesen = ICS.Hypothesen.erstellen(
    gespraech,
    analyse
);

const prioritaet = ICS.Prioritaeten.wichtigste(
    analyse,
    gespraech
);
  
  gespraech.analysen.push(analyse);

  const update = ICS.brain.aktualisieren(gespraech, analyse);
  gespraech.strategie = ICS.brain.naechsteStrategie(gespraech, analyse);

  if(update.hypothese && !gespraech.hypothesen.includes(update.hypothese)){
    gespraech.hypothesen.push(update.hypothese);
  }

  uebernehmen(analyse);

  if(!gespraech.muster && !gespraech.thema){
    return unbekanntAntwort(analyse);
  }

  return dialogAntwort(text, analyse, update, hypothesen);
}

function uebernehmen(analyse){
  analyse.muster.forEach((m, index) => {
    if(!gespraech.muster && index === 0){
      gespraech.muster = m.id;
      gespraech.modus = "muster";
      gespraech.erkenntnisse.push(m.name);
      return;
    }

    if(m.id !== gespraech.muster && !gespraech.weitereMuster.includes(m.id)){
      gespraech.weitereMuster.push(m.id);
      gespraech.erkenntnisse.push(m.name);
    }
  });

  if(analyse.thema){
    if(!gespraech.thema){
      gespraech.thema = analyse.thema.id;
    } else if(analyse.thema.id !== gespraech.thema && !gespraech.nebenthemen.includes(analyse.thema.id)){
      gespraech.nebenthemen.push(analyse.thema.id);
    }
  }

  if(!gespraech.modus && gespraech.thema){
    gespraech.modus = "thema";
  }
}

function dialogAntwort(text, analyse, update, hypothesen){
  const teile = [];
  const faden = ICS.brain.roterFaden(gespraech, analyse, update);

  if(faden) teile.push(faden);

  if(gespraech.strategie === "stabilisieren"){
    teile.push("Bevor wir tiefer gehen: Atme einmal langsam aus. Du musst gerade nicht alles auf einmal lösen.");
  }

  if(gespraech.strategie === "verbinden"){
    teile.push(zusammenhang());
  }

  if(gespraech.strategie === "spiegeln"){
    teile.push(zwischenSpiegel());
  }

let hypothesenFrage = "";

if(hypothesen && hypothesen.length){

    teile.push(
        `💡 <strong>${ICS.escapen(hypothesen[0].text)}</strong>`
    );

    hypothesenFrage = hypothesen[0].frage || "";

    if(hypothesenFrage){
        gespraech.offeneFragen.push(hypothesenFrage);
        teile.push(`<strong>${ICS.escapen(hypothesenFrage)}</strong>`);
    }

}

const frage = hypothesenFrage ? "" : intelligenteFrage(analyse);
  if(frage) {
    gespraech.offeneFragen.push(frage);
    teile.push(`<strong>${ICS.escapen(frage)}</strong>`);
  }

  return teile.filter(Boolean).join("<br><br>");
}

function intelligenteFrage(analyse){
  const hauptmuster = gespraech.muster ? ICS.MUSTER?.[gespraech.muster] : null;
  const thema = gespraech.thema ? ICS.THEMEN?.[gespraech.thema] : null;

  if(gespraech.strategie === "stabilisieren"){
    return "Was würde dir in diesem Moment zuerst etwas Sicherheit oder Entlastung geben?";
  }

  if(hauptmuster?.fragen?.length){
    const index = Math.min(gespraech.schritt, hauptmuster.fragen.length - 1);
    gespraech.schritt++;
    return hauptmuster.fragen[index];
  }

  if(thema?.fragen?.length){
    const index = Math.min(gespraech.schritt, thema.fragen.length - 1);
    gespraech.schritt++;
    return thema.fragen[index];
  }

  if(analyse.emotion){
    return "Was versucht dir dieses Gefühl gerade zu zeigen?";
  }

  return "Was daran ist für dich im Moment am wichtigsten?";
}

function zusammenhang(){
  const namen = [];

  if(gespraech.muster && ICS.MUSTER?.[gespraech.muster]){
    namen.push(ICS.MUSTER[gespraech.muster].name);
  }

  gespraech.weitereMuster.forEach(id => {
    if(ICS.MUSTER?.[id]) namen.push(ICS.MUSTER[id].name);
  });

  if(gespraech.thema && ICS.THEMEN?.[gespraech.thema]){
    namen.push(ICS.THEMEN[gespraech.thema].name);
  }

  if(namen.length < 2) return "";

  return `Ich sehe inzwischen einen möglichen Zusammenhang zwischen <strong>${namen.map(ICS.escapen).join(", ")}</strong>. Diese Aspekte wirken vermutlich nicht getrennt voneinander.`;
}

function zwischenSpiegel(){
  const letzte = gespraech.antworten.filter(a => a.length > 15).slice(-3);
  if(!letzte.length) return "";

  return `Dein roter Faden wird klarer: ${letzte.map(a => `„${ICS.escapen(a.length > 90 ? a.slice(0,87) + "…" : a)}“`).join(" – ")}`;
}

function unbekanntAntwort(analyse){
  if(analyse.emotion){
    return `${ICS.escapen(analyse.emotion.antwort || "Ich nehme wahr, dass dich etwas emotional bewegt.")}<br><br><strong>Was ist unmittelbar davor passiert?</strong>`;
  }

  return "Ich möchte dich richtig verstehen. Geht es gerade eher um eine Situation, ein Gefühl, eine Beziehung, eine Entscheidung oder ein wiederkehrendes Verhalten?";
}

function profilAnzeigen(){
  const memory = ICS.brain.laden();
  const muster = ICS.brain.topScores(memory.musterScores, 5);
  const themen = ICS.brain.topScores(memory.themenScores, 4);

  const musterHtml = muster.length
    ? muster.map(x => `${ICS.escapen(x.label)} <strong>${x.score}%</strong>`).join("<br>")
    : "Noch nicht genügend Gesprächsdaten.";

  const themenHtml = themen.length
    ? themen.map(x => `${ICS.escapen(x.label)} <strong>${x.score}%</strong>`).join("<br>")
    : "Noch keine stabilen Themenschwerpunkte.";

  mentorNachricht(`
    <div class="ics-auswertung">
      <strong>Mein ICS Profil</strong><br><br>
      <strong>Wiederkehrende Muster</strong><br>
      ${musterHtml}<br><br>
      <strong>Wichtige Lebensbereiche</strong><br>
      ${themenHtml}<br><br>
      <strong>Gespeicherte Gesprächsimpulse</strong><br>
      ${memory.gespraeche.length}
    </div>
  `);
}

function speichern(){
  if(!gespraech.gespeichert && ICS.profilAktualisieren){
    ICS.profilAktualisieren(gespraech);
    gespraech.gespeichert = true;
  }
}

function auswertungsWunsch(text){
  const n = ICS.normalisiere(text);
  return ["auswertung", "zusammenfassung", "ics spiegel", "was erkennst du", "was ist dein fazit"]
    .some(b => n.includes(ICS.normalisiere(b)));
}

function themaWechsel(text){
  const n = ICS.normalisiere(text);
  return ["anderes thema", "thema wechseln", "jetzt ueber", "moechte ueber"]
    .some(b => n.includes(ICS.normalisiere(b)));
}

function userNachricht(text){
  const r = document.createElement("div");
  r.className = "chat-row user-row";
  r.innerHTML = `<div class="chat-bubble user-bubble"><strong>Du</strong><p>${ICS.escapen(text)}</p></div>`;
  messages.appendChild(r);
  scrollen();
}

function mentorNachricht(html){
  const r = document.createElement("div");
  r.className = "chat-row mentor-row";
  r.innerHTML = `<div class="chat-avatar">🧠</div><div class="chat-bubble mentor-bubble"><strong>ICS Mentor</strong><p>${html}</p></div>`;
  messages.appendChild(r);
  scrollen();
}

function neustart(){
  gespraech = neu();
  messages.innerHTML = `<div class="chat-row mentor-row"><div class="chat-avatar">🧠</div><div class="chat-bubble mentor-bubble"><strong>ICS Mentor</strong><p>Das Gespräch wurde neu gestartet. Was beschäftigt dich im Moment am meisten?</p></div></div>`;
  input.value = "";
  counter.textContent = "0 / 1500";
  input.focus();
  scrollen();
}

function scrollen(){
  requestAnimationFrame(function(){
    messages.scrollTop = messages.scrollHeight;
  });
}
