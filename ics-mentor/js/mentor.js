window.ICS = window.ICS || {};

const input=document.getElementById("ics-input");
const send=document.getElementById("ics-send");
const messages=document.getElementById("ics-messages");
const counter=document.getElementById("ics-counter");
const reset=document.getElementById("ics-reset");
const typing=document.getElementById("ics-typing");

let gespraech=neuesGespraechObjekt();

function neuesGespraechObjekt(){
  return {thema:"",muster:"",schritt:0,modus:"",antworten:[],abgeschlossen:false};
}

send.addEventListener("click",sendeNachricht);
input.addEventListener("keydown",function(event){
  if(event.key==="Enter"&&!event.shiftKey){
    event.preventDefault();
    sendeNachricht();
  }
});
input.addEventListener("input",()=>counter.textContent=input.value.length+" / 1500");
reset.addEventListener("click",neuesGespraech);

function sendeNachricht(){
  const text=input.value.trim();
  if(!text||send.disabled) return;

  userNachricht(text);
  gespraech.antworten.push(text);
  input.value="";
  counter.textContent="0 / 1500";
  send.disabled=true;
  typing.hidden=false;
  scrollNachUnten();

  const wartezeit=Math.min(1500,550+text.length*8);

  setTimeout(function(){
    typing.hidden=true;
    mentorNachricht(erzeugeAntwort(text));
    send.disabled=false;
    input.focus();
  },wartezeit);
}

function erzeugeAntwort(text){
  if(istAuswertungsWunsch(text)){
    gespraech.abgeschlossen=true;
    return ICS.erstelleAuswertung(gespraech);
  }

  if(willThemaWechseln(text)){
    gespraech=neuesGespraechObjekt();
  }

  if(!gespraech.thema&&!gespraech.muster){
    const smalltalk=ICS.pruefeSmalltalk(text);
    if(smalltalk) return smalltalk;

    const muster=ICS.musterErkennen(text);
    const thema=ICS.themaErkennen(text);
    const emotion=ICS.emotionErkennen(text);

    if(muster&&muster.punkte>0){
      gespraech.muster=muster.id;
      gespraech.modus="muster";
      gespraech.schritt=0;
      if(thema&&thema.punkte>0) gespraech.thema=thema.id;

      return `Ich erkenne darin möglicherweise ein <strong>${ICS.escapen(muster.name)}</strong>.<br><br>${ICS.escapen(muster.spiegel)}<br><br>${ICS.escapen(muster.fragen[0])}`;
    }

    if(thema&&thema.punkte>0){
      gespraech.thema=thema.id;
      gespraech.modus="thema";
      gespraech.schritt=0;
      return ICS.escapen(thema.start);
    }

    if(emotion&&emotion.punkte>0) return ICS.escapen(emotion.antwort);

    return "Ich möchte dich richtig verstehen. Geht es gerade eher um eine Situation, ein Gefühl, eine Beziehung, eine Entscheidung oder ein wiederkehrendes Verhalten?";
  }

  if(gespraech.modus==="muster"&&gespraech.muster) return fuehreMusterDialog();
  if(gespraech.modus==="thema"&&gespraech.thema) return fuehreThemenDialog();

  return "Was daran ist für dich im Moment am wichtigsten?";
}

function fuehreMusterDialog(){
  const muster=ICS.MUSTER[gespraech.muster];
  gespraech.schritt+=1;

  if(gespraech.schritt<muster.fragen.length){
    return ICS.escapen(muster.fragen[gespraech.schritt]);
  }

  gespraech.abgeschlossen=true;
  return `Danke für deine Offenheit.<br><br>Aus deinen Antworten lässt sich bereits ein klarer roter Faden erkennen.<br><br>${ICS.erstelleAuswertung(gespraech)}<br><br>Welchen kleinen Schritt möchtest du daraus heute wirklich umsetzen?`;
}

function fuehreThemenDialog(){
  const thema=ICS.THEMEN[gespraech.thema];

  if(gespraech.schritt<thema.fragen.length){
    const frage=thema.fragen[gespraech.schritt];
    gespraech.schritt+=1;
    return ICS.escapen(frage);
  }

  gespraech.abgeschlossen=true;
  return `Danke für deine Offenheit.<br><br>${ICS.erstelleAuswertung(gespraech)}<br><br>Welcher Teil davon spricht dich am stärksten an?`;
}

function istAuswertungsWunsch(text){
  const normal=ICS.normalisiere(text);
  return ["auswertung","zusammenfassung","ics spiegel","was erkennst du","was ist dein fazit","beende das gespraech"]
    .some(begriff=>normal.includes(ICS.normalisiere(begriff)));
}

function willThemaWechseln(text){
  const normal=ICS.normalisiere(text);
  return ["anderes thema","thema wechseln","jetzt ueber","moechte ueber","sprechen wir ueber"]
    .some(begriff=>normal.includes(ICS.normalisiere(begriff)));
}

function userNachricht(text){
  const row=document.createElement("div");
  row.className="chat-row user-row";
  row.innerHTML=`<div class="chat-bubble user-bubble"><strong>Du</strong><p>${ICS.escapen(text)}</p></div>`;
  messages.appendChild(row);
  scrollNachUnten();
}

function mentorNachricht(html){
  const row=document.createElement("div");
  row.className="chat-row mentor-row";
  row.innerHTML=`<div class="chat-avatar">🧠</div><div class="chat-bubble mentor-bubble"><strong>ICS Mentor</strong><p>${html}</p></div>`;
  messages.appendChild(row);
  scrollNachUnten();
}

function neuesGespraech(){
  gespraech=neuesGespraechObjekt();
  messages.innerHTML=`<div class="chat-row mentor-row"><div class="chat-avatar">🧠</div><div class="chat-bubble mentor-bubble"><strong>ICS Mentor</strong><p>Das Gespräch wurde neu gestartet. Was beschäftigt dich im Moment am meisten?</p></div></div>`;
  input.value="";
  counter.textContent="0 / 1500";
  input.focus();
  scrollNachUnten();
}

function scrollNachUnten(){
  requestAnimationFrame(()=>messages.scrollTop=messages.scrollHeight);
}
