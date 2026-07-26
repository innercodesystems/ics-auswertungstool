window.ICS = window.ICS || {};

const input=document.getElementById("ics-input");
const send=document.getElementById("ics-send");
const messages=document.getElementById("ics-messages");
const counter=document.getElementById("ics-counter");
const reset=document.getElementById("ics-reset");
const profileButton=document.getElementById("ics-profile");
const typing=document.getElementById("ics-typing");

let gespraech=neu();

function neu(){
  return {
    thema:"",
    muster:"",
    weitereMuster:[],
    nebenthemen:[],
    schritt:0,
    modus:"",
    antworten:[],
    erkenntnisse:[],
    abgeschlossen:false,
    gespeichert:false
  };
}

send.addEventListener("click",senden);

input.addEventListener("keydown",function(e){
  if(e.key==="Enter"&&!e.shiftKey){
    e.preventDefault();
    senden();
  }
});

input.addEventListener("input",function(){
  counter.textContent=input.value.length+" / 1500";
});

reset.addEventListener("click",neustart);

if(profileButton){
  profileButton.addEventListener("click",function(){
    mentorNachricht(ICS.profilHtml());
  });
}

function senden(){
  const text=input.value.trim();
  if(!text||send.disabled)return;

  userNachricht(text);
  gespraech.antworten.push(text);

  input.value="";
  counter.textContent="0 / 1500";
  send.disabled=true;
  typing.hidden=false;
  scrollen();

  setTimeout(function(){
    typing.hidden=true;
    mentorNachricht(antwort(text));
    send.disabled=false;
    input.focus();
  },Math.min(1500,550+text.length*8));
}

function antwort(text){
  if(auswertungsWunsch(text)){
    gespraech.abgeschlossen=true;
    speichern();
    return ICS.erstelleAuswertung(gespraech);
  }

  if(themaWechsel(text)){
    gespraech=neu();
  }

  const erkanntesMuster=ICS.musterErkennen(text);
  const erkanntesThema=ICS.themaErkennen(text);

  if(!gespraech.muster&&!gespraech.thema){
    return starten(text,erkanntesMuster,erkanntesThema);
  }

  if(erkanntesMuster&&erkanntesMuster.id!==gespraech.muster&&!gespraech.weitereMuster.includes(erkanntesMuster.id)){
    gespraech.weitereMuster.push(erkanntesMuster.id);
    gespraech.erkenntnisse.push(erkanntesMuster.name);

    return verbindeAspekt(
      erkanntesMuster.name,
      "Muster",
      naechsteFrage()
    );
  }

  if(erkanntesThema&&erkanntesThema.id!==gespraech.thema&&!gespraech.nebenthemen.includes(erkanntesThema.id)){
    gespraech.nebenthemen.push(erkanntesThema.id);
    gespraech.erkenntnisse.push(erkanntesThema.name);

    return verbindeAspekt(
      erkanntesThema.name,
      "Thema",
      naechsteFrage()
    );
  }

  if(gespraech.modus==="muster")return musterDialog(text);
  if(gespraech.modus==="thema")return themenDialog(text);

  return "Was daran ist für dich im Moment am wichtigsten?";
}

function starten(text,muster,thema){
  const smalltalk=ICS.pruefeSmalltalk(text);
  if(smalltalk)return smalltalk;

  const musterListe=ICS.musterErkennenAlle(text);
  muster=muster||musterListe[0]||null;
  const emotion=ICS.emotionErkennen(text);

  if(muster){
    gespraech.muster=muster.id;
    gespraech.weitereMuster=musterListe.filter(m=>m.id!==muster.id).map(m=>m.id);
    gespraech.modus="muster";
    gespraech.schritt=0;
    gespraech.erkenntnisse.push(muster.name);
    if(thema)gespraech.thema=thema.id;

    return `Ich erkenne darin möglicherweise ein <strong>${ICS.escapen(muster.name)}</strong>.<br><br>${ICS.escapen(muster.spiegel)}<br><br>${ICS.escapen(muster.fragen[0])}`;
  }

  if(thema){
    gespraech.thema=thema.id;
    gespraech.modus="thema";
    gespraech.schritt=0;
    gespraech.erkenntnisse.push(thema.name);
    return ICS.escapen(thema.start);
  }

  if(emotion)return ICS.escapen(emotion.antwort);

  return "Ich möchte dich richtig verstehen. Geht es gerade eher um eine Situation, ein Gefühl, eine Beziehung, eine Entscheidung oder ein wiederkehrendes Verhalten?";
}

function verbindeAspekt(name,typ,frage){
  const haupt=fokus();
  const verbindung=zusammenhangSatz();

  return `Ich nehme wahr, dass neben <strong>${ICS.escapen(haupt)}</strong> auch ${typ==="Muster"?"ein":"das"} <strong>${ICS.escapen(name)}</strong> wichtig ist.<br><br>${verbindung}<br><br>Ich halte diesen Zusammenhang fest und bleibe zunächst beim roten Faden.<br><br>${frage}`;
}

function zusammenhangSatz(){
  const musterNamen=[gespraech.muster]
    .concat(gespraech.weitereMuster)
    .filter(Boolean)
    .map(id=>ICS.MUSTER[id]?.name)
    .filter(Boolean);

  const themenNamen=[gespraech.thema]
    .concat(gespraech.nebenthemen)
    .filter(Boolean)
    .map(id=>ICS.THEMEN[id]?.name)
    .filter(Boolean);

  const alle=[...musterNamen,...themenNamen];

  if(alle.length>=3){
    return `Die bisherigen Aspekte – <strong>${alle.map(ICS.escapen).join(", ")}</strong> – könnten sich gegenseitig verstärken.`;
  }

  if(alle.length===2){
    return `<strong>${ICS.escapen(alle[0])}</strong> und <strong>${ICS.escapen(alle[1])}</strong> könnten miteinander verbunden sein.`;
  }

  return "Es könnte hier einen wichtigen Zusammenhang geben.";
}

function musterDialog(text){
  const m=ICS.MUSTER[gespraech.muster];

  if(text.length>20){
    gespraech.erkenntnisse.push(text);
  }

  gespraech.schritt++;

  if(gespraech.schritt<m.fragen.length){
    const bezug=kurzerBezug(text);
    return `${bezug}${ICS.escapen(m.fragen[gespraech.schritt])}`;
  }

  gespraech.abgeschlossen=true;
  speichern();

  return `Danke für deine Offenheit.<br><br>${ICS.erstelleAuswertung(gespraech)}<br><br>Dein ICS Profil wurde aktualisiert.`;
}

function themenDialog(text){
  const t=ICS.THEMEN[gespraech.thema];

  if(text.length>20){
    gespraech.erkenntnisse.push(text);
  }

  if(gespraech.schritt<t.fragen.length){
    const frage=t.fragen[gespraech.schritt++];
    return `${kurzerBezug(text)}${ICS.escapen(frage)}`;
  }

  gespraech.abgeschlossen=true;
  speichern();

  return `Danke für deine Offenheit.<br><br>${ICS.erstelleAuswertung(gespraech)}<br><br>Dein ICS Profil wurde aktualisiert.`;
}

function kurzerBezug(text){
  const gekuerzt=text.length>110 ? text.slice(0,107)+"…" : text;

  if(text.length<12)return "";

  return `Du beschreibst: <em>„${ICS.escapen(gekuerzt)}“</em><br><br>`;
}

function fokus(){
  if(gespraech.muster&&ICS.MUSTER[gespraech.muster])return ICS.MUSTER[gespraech.muster].name;
  if(gespraech.thema&&ICS.THEMEN[gespraech.thema])return ICS.THEMEN[gespraech.thema].name;
  return "deinem bisherigen Thema";
}

function naechsteFrage(){
  if(gespraech.modus==="muster"){
    const m=ICS.MUSTER[gespraech.muster];
    const i=Math.min(gespraech.schritt+1,m.fragen.length-1);
    gespraech.schritt=i;
    return ICS.escapen(m.fragen[i]);
  }

  const t=ICS.THEMEN[gespraech.thema];
  const i=Math.min(gespraech.schritt,t.fragen.length-1);
  gespraech.schritt=i+1;
  return ICS.escapen(t.fragen[i]);
}

function speichern(){
  if(!gespraech.gespeichert){
    ICS.profilAktualisieren(gespraech);
    gespraech.gespeichert=true;
  }
}

function auswertungsWunsch(text){
  const n=ICS.normalisiere(text);
  return ["auswertung","zusammenfassung","ics spiegel","was erkennst du","was ist dein fazit"]
    .some(function(b){return n.includes(ICS.normalisiere(b));});
}

function themaWechsel(text){
  const n=ICS.normalisiere(text);
  return ["anderes thema","thema wechseln","jetzt ueber","moechte ueber"]
    .some(function(b){return n.includes(ICS.normalisiere(b));});
}

function userNachricht(text){
  const r=document.createElement("div");
  r.className="chat-row user-row";
  r.innerHTML=`<div class="chat-bubble user-bubble"><strong>Du</strong><p>${ICS.escapen(text)}</p></div>`;
  messages.appendChild(r);
  scrollen();
}

function mentorNachricht(html){
  const r=document.createElement("div");
  r.className="chat-row mentor-row";
  r.innerHTML=`<div class="chat-avatar">🧠</div><div class="chat-bubble mentor-bubble"><strong>ICS Mentor</strong><p>${html}</p></div>`;
  messages.appendChild(r);
  scrollen();
}

function neustart(){
  gespraech=neu();
  messages.innerHTML=`<div class="chat-row mentor-row"><div class="chat-avatar">🧠</div><div class="chat-bubble mentor-bubble"><strong>ICS Mentor</strong><p>Das Gespräch wurde neu gestartet. Was beschäftigt dich im Moment am meisten?</p></div></div>`;
  input.value="";
  counter.textContent="0 / 1500";
  input.focus();
  scrollen();
}

function scrollen(){
  requestAnimationFrame(function(){
    messages.scrollTop=messages.scrollHeight;
  });
}
