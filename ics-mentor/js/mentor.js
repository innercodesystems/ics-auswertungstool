window.ICS = window.ICS || {};

const input=document.getElementById("ics-input");
const send=document.getElementById("ics-send");
const messages=document.getElementById("ics-messages");
const counter=document.getElementById("ics-counter");
const reset=document.getElementById("ics-reset");
const profileButton=document.getElementById("ics-profile");
const typing=document.getElementById("ics-typing");

let gespraech=neuesGespraechObjekt();

function neuesGespraechObjekt(){
  return {
    thema:"",
    muster:"",
    weitereMuster:[],
    nebenthemen:[],
    schritt:0,
    modus:"",
    antworten:[],
    abgeschlossen:false,
    gespeichert:false
  };
}

send.addEventListener("click",sendeNachricht);

input.addEventListener("keydown",function(event){
  if(event.key==="Enter"&&!event.shiftKey){
    event.preventDefault();
    sendeNachricht();
  }
});

input.addEventListener("input",function(){
  counter.textContent=input.value.length+" / 1500";
});

reset.addEventListener("click",neuesGespraech);

profileButton.addEventListener("click",function(){
  mentorNachricht(ICS.profilHtml());
});

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

  setTimeout(function(){
    typing.hidden=true;
    mentorNachricht(erzeugeAntwort(text));
    send.disabled=false;
    input.focus();
  },Math.min(1500,550+text.length*8));
}

function erzeugeAntwort(text){
  if(istAuswertungsWunsch(text)){
    gespraech.abgeschlossen=true;
    speichereGespraechEinmal();
    return ICS.erstelleAuswertung(gespraech);
  }

  if(willThemaWechseln(text)){
    gespraech=neuesGespraechObjekt();
  }

  if(!gespraech.thema&&!gespraech.muster){
    return starteNeuesThema(text);
  }

  const neuesThema=ICS.themaErkennen(text);
  const neuesMuster=ICS.musterErkennen(text);

  if(istNeuerWichtigerAspekt(neuesThema,neuesMuster)){
    merkeNebenthema(neuesThema,neuesMuster);

    const aktuell=gespraech.muster
      ? ICS.MUSTER[gespraech.muster].name
      : ICS.THEMEN[gespraech.thema].name;

    const erkannt=neuesMuster ? neuesMuster.name : neuesThema.name;

    return `Ich nehme wahr, dass neben <strong>${ICS.escapen(aktuell)}</strong> auch <strong>${ICS.escapen(erkannt)}</strong> wichtig ist.<br><br>Ich halte diesen zweiten Aspekt fest. Lass uns den aktuellen roten Faden kurz zu Ende führen, damit daraus echte Klarheit entsteht.<br><br>${naechsteAktuelleFrage()}`;
  }

  if(gespraech.modus==="muster"&&gespraech.muster){
    return fuehreMusterDialog();
  }

  if(gespraech.modus==="thema"&&gespraech.thema){
    return fuehreThemenDialog();
  }

  return "Was daran ist für dich im Moment am wichtigsten?";
}

function starteNeuesThema(text){
  const smalltalk=ICS.pruefeSmalltalk(text);
  if(smalltalk) return smalltalk;

  const musterListe=ICS.musterErkennenAlle(text);
  const muster=musterListe[0]||null;
  const thema=ICS.themaErkennen(text);
  const emotion=ICS.emotionErkennen(text);

  if(muster){
    gespraech.muster=muster.id;
    gespraech.weitereMuster=musterListe.slice(1).map(m=>m.id);
    gespraech.modus="muster";
    gespraech.schritt=0;
    if(thema) gespraech.thema=thema.id;

    let zusatz="";
    if(musterListe.length>1){
      zusatz="<br><br>Daneben zeigen sich auch Anteile von <strong>"+
        musterListe.slice(1).map(m=>ICS.escapen(m.name)).join(" und ")+"</strong>.";
    }

    return `Ich erkenne darin möglicherweise ein <strong>${ICS.escapen(muster.name)}</strong>.<br><br>${ICS.escapen(muster.spiegel)}${zusatz}<br><br>${ICS.escapen(muster.fragen[0])}`;
  }

  if(thema){
    gespraech.thema=thema.id;
    gespraech.modus="thema";
    gespraech.schritt=0;
    return ICS.escapen(thema.start);
  }

  if(emotion) return ICS.escapen(emotion.antwort);

  return "Ich möchte dich richtig verstehen. Geht es gerade eher um eine Situation, ein Gefühl, eine Beziehung, eine Entscheidung oder ein wiederkehrendes Verhalten?";
}

function istNeuerWichtigerAspekt(thema,muster){
  if(muster&&muster.id!==gespraech.muster&&!gespraech.weitereMuster.includes(muster.id)){
    return true;
  }

  if(thema&&thema.id!==gespraech.thema&&!gespraech.nebenthemen.includes(thema.id)){
    return true;
  }

  return false;
}

function merkeNebenthema(thema,muster){
  if(muster&&muster.id!==gespraech.muster&&!gespraech.weitereMuster.includes(muster.id)){
    gespraech.weitereMuster.push(muster.id);
  }

  if(thema&&thema.id!==gespraech.thema&&!gespraech.nebenthemen.includes(thema.id)){
    gespraech.nebenthemen.push(thema.id);
  }
}

function naechsteAktuelleFrage(){
  if(gespraech.modus==="muster"&&gespraech.muster){
    const muster=ICS.MUSTER[gespraech.muster];
    const index=Math.min(gespraech.schritt+1,muster.fragen.length-1);
    gespraech.schritt=index;
    return ICS.escapen(muster.fragen[index]);
  }

  if(gespraech.modus==="thema"&&gespraech.thema){
    const thema=ICS.THEMEN[gespraech.thema];
    const index=Math.min(gespraech.schritt,thema.fragen.length-1);
    gespraech.schritt=index+1;
    return ICS.escapen(thema.fragen[index]);
  }

  return "Was ist daran für dich der wichtigste Punkt?";
}

function fuehreMusterDialog(){
  const muster=ICS.MUSTER[gespraech.muster];
  gespraech.schritt+=1;

  if(gespraech.schritt<muster.fragen.length){
    return ICS.escapen(muster.fragen[gespraech.schritt]);
  }

  gespraech.abgeschlossen=true;
  speichereGespraechEinmal();

  return `Danke für deine Offenheit.<br><br>Aus deinen Antworten lässt sich ein klarer roter Faden erkennen.<br><br>${ICS.erstelleAuswertung(gespraech)}<br><br>Dein ICS Profil wurde aktualisiert.<br><br>Welchen kleinen Schritt möchtest du daraus heute wirklich umsetzen?`;
}

function fuehreThemenDialog(){
  const thema=ICS.THEMEN[gespraech.thema];

  if(gespraech.schritt<thema.fragen.length){
    const frage=thema.fragen[gespraech.schritt];
    gespraech.schritt+=1;
    return ICS.escapen(frage);
  }

  gespraech.abgeschlossen=true;
  speichereGespraechEinmal();

  return `Danke für deine Offenheit.<br><br>${ICS.erstelleAuswertung(gespraech)}<br><br>Dein ICS Profil wurde aktualisiert.<br><br>Welcher Teil davon spricht dich am stärksten an?`;
}

function speichereGespraechEinmal(){
  if(gespraech.gespeichert) return;
  ICS.profilAktualisieren(gespraech);
  gespraech.gespeichert=true;
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
  requestAnimationFrame(function(){
    messages.scrollTop=messages.scrollHeight;
  });
}
