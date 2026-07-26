window.ICS=window.ICS||{};
const input=document.getElementById("ics-input"),send=document.getElementById("ics-send"),messages=document.getElementById("ics-messages"),counter=document.getElementById("ics-counter"),reset=document.getElementById("ics-reset"),profileButton=document.getElementById("ics-profile"),typing=document.getElementById("ics-typing");
let gespraech=neu();
function neu(){return{thema:"",muster:"",weitereMuster:[],nebenthemen:[],schritt:0,modus:"",antworten:[],abgeschlossen:false,gespeichert:false};}
send.addEventListener("click",senden);
input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();senden();}});
input.addEventListener("input",()=>counter.textContent=input.value.length+" / 1500");
reset.addEventListener("click",neustart);
if(profileButton)profileButton.addEventListener("click",()=>mentorNachricht(ICS.profilHtml()));

function senden(){const text=input.value.trim();if(!text||send.disabled)return;userNachricht(text);gespraech.antworten.push(text);input.value="";counter.textContent="0 / 1500";send.disabled=true;typing.hidden=false;scrollen();setTimeout(()=>{typing.hidden=true;mentorNachricht(antwort(text));send.disabled=false;input.focus();},Math.min(1500,550+text.length*8));}

function antwort(text){
  if(auswertungsWunsch(text)){gespraech.abgeschlossen=true;speichern();return ICS.erstelleAuswertung(gespraech);}
  if(themaWechsel(text))gespraech=neu();
  if(!gespraech.thema&&!gespraech.muster)return starten(text);

  const nm=ICS.musterErkennen(text),nt=ICS.themaErkennen(text);

  if(nm&&nm.id!==gespraech.muster&&!gespraech.weitereMuster.includes(nm.id)){
    gespraech.weitereMuster.push(nm.id);
    return `Ich nehme neben <strong>${ICS.escapen(fokus())}</strong> auch ein <strong>${ICS.escapen(nm.name)}</strong> wahr.<br><br>Ich halte diesen Zusammenhang fest.<br><br>${naechsteFrage()}`;
  }

  if(nt&&nt.id!==gespraech.thema&&!gespraech.nebenthemen.includes(nt.id)){
    gespraech.nebenthemen.push(nt.id);
    return `Ich nehme neben <strong>${ICS.escapen(fokus())}</strong> auch das Thema <strong>${ICS.escapen(nt.name)}</strong> wahr.<br><br>Ich halte diesen Zusammenhang fest.<br><br>${naechsteFrage()}`;
  }

  if(gespraech.modus==="muster")return musterDialog();
  if(gespraech.modus==="thema")return themenDialog();
  return "Was daran ist für dich im Moment am wichtigsten?";
}

function starten(text){
  const st=ICS.pruefeSmalltalk(text);if(st)return st;
  const ml=ICS.musterErkennenAlle(text),m=ml[0]||null,t=ICS.themaErkennen(text),e=ICS.emotionErkennen(text);
  if(m){gespraech.muster=m.id;gespraech.weitereMuster=ml.slice(1).map(x=>x.id);gespraech.modus="muster";gespraech.schritt=0;if(t)gespraech.thema=t.id;return `Ich erkenne darin möglicherweise ein <strong>${ICS.escapen(m.name)}</strong>.<br><br>${ICS.escapen(m.spiegel)}<br><br>${ICS.escapen(m.fragen[0])}`;}
  if(t){gespraech.thema=t.id;gespraech.modus="thema";gespraech.schritt=0;return ICS.escapen(t.start);}
  if(e)return ICS.escapen(e.antwort);
  return "Ich möchte dich richtig verstehen. Geht es gerade eher um eine Situation, ein Gefühl, eine Beziehung, eine Entscheidung oder ein wiederkehrendes Verhalten?";
}

function fokus(){if(gespraech.muster&&ICS.MUSTER[gespraech.muster])return ICS.MUSTER[gespraech.muster].name;if(gespraech.thema&&ICS.THEMEN[gespraech.thema])return ICS.THEMEN[gespraech.thema].name;return "deinem bisherigen Thema";}
function naechsteFrage(){if(gespraech.modus==="muster"){const m=ICS.MUSTER[gespraech.muster],i=Math.min(gespraech.schritt+1,m.fragen.length-1);gespraech.schritt=i;return ICS.escapen(m.fragen[i]);}const t=ICS.THEMEN[gespraech.thema],i=Math.min(gespraech.schritt,t.fragen.length-1);gespraech.schritt=i+1;return ICS.escapen(t.fragen[i]);}
function musterDialog(){const m=ICS.MUSTER[gespraech.muster];gespraech.schritt++;if(gespraech.schritt<m.fragen.length)return ICS.escapen(m.fragen[gespraech.schritt]);gespraech.abgeschlossen=true;speichern();return `Danke für deine Offenheit.<br><br>${ICS.erstelleAuswertung(gespraech)}<br><br>Dein ICS Profil wurde aktualisiert.`;}
function themenDialog(){const t=ICS.THEMEN[gespraech.thema];if(gespraech.schritt<t.fragen.length){const f=t.fragen[gespraech.schritt++];return ICS.escapen(f);}gespraech.abgeschlossen=true;speichern();return `Danke für deine Offenheit.<br><br>${ICS.erstelleAuswertung(gespraech)}<br><br>Dein ICS Profil wurde aktualisiert.`;}
function speichern(){if(!gespraech.gespeichert){ICS.profilAktualisieren(gespraech);gespraech.gespeichert=true;}}
function auswertungsWunsch(text){const n=ICS.normalisiere(text);return["auswertung","zusammenfassung","ics spiegel","was erkennst du","was ist dein fazit"].some(b=>n.includes(ICS.normalisiere(b)));}
function themaWechsel(text){const n=ICS.normalisiere(text);return["anderes thema","thema wechseln","jetzt ueber","moechte ueber"].some(b=>n.includes(ICS.normalisiere(b)));}
function userNachricht(text){const r=document.createElement("div");r.className="chat-row user-row";r.innerHTML=`<div class="chat-bubble user-bubble"><strong>Du</strong><p>${ICS.escapen(text)}</p></div>`;messages.appendChild(r);scrollen();}
function mentorNachricht(html){const r=document.createElement("div");r.className="chat-row mentor-row";r.innerHTML=`<div class="chat-avatar">🧠</div><div class="chat-bubble mentor-bubble"><strong>ICS Mentor</strong><p>${html}</p></div>`;messages.appendChild(r);scrollen();}
function neustart(){gespraech=neu();messages.innerHTML=`<div class="chat-row mentor-row"><div class="chat-avatar">🧠</div><div class="chat-bubble mentor-bubble"><strong>ICS Mentor</strong><p>Das Gespräch wurde neu gestartet. Was beschäftigt dich im Moment am meisten?</p></div></div>`;input.value="";counter.textContent="0 / 1500";input.focus();scrollen();}
function scrollen(){requestAnimationFrame(()=>messages.scrollTop=messages.scrollHeight);}
