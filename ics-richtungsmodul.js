(function(){if(document.getElementById('icsDirectionAnchor'))return;document.body.insertAdjacentHTML('beforeend',"<style>\n#icsDirectionAnchor{position:fixed;right:16px;bottom:max(16px,env(safe-area-inset-bottom));z-index:9000;background:#D4A03A;color:#181612;border:1px solid #e7bf72;border-radius:30px;padding:12px 18px;font:600 14px system-ui;cursor:pointer;box-shadow:0 4px 20px #0005}\n#icsDirectionDialog{box-sizing:border-box;width:min(440px,calc(100% - 24px));max-height:85dvh;overflow:auto;background:#211e19;color:#fffdf8;border:1px solid #8c703e;border-radius:20px;padding:24px;font:16px system-ui}\n#icsDirectionDialog::backdrop{background:#0009}\n#icsDirectionDialog a{display:block;color:#fffdf8;text-decoration:none;padding:14px 0;border-bottom:1px solid #655333}\n#icsDirectionDialog button{float:right;background:transparent;color:#fffdf8;border:1px solid #8c703e;border-radius:8px;padding:8px;cursor:pointer}\n#icsDirectionDialog h2{color:#e5b85d;margin:0 0 12px;font-size:24px}\n#icsDirectionDialog a:focus-visible,#icsDirectionAnchor:focus-visible{outline:3px solid #fffdf8;outline-offset:3px}\n</style>\n<button type=\"button\" id=\"icsDirectionAnchor\" aria-haspopup=\"dialog\">◈ Deine Richtung</button>\n<dialog id=\"icsDirectionDialog\" aria-labelledby=\"icsDirectionTitle\"><button type=\"button\" id=\"icsDirectionClose\" aria-label=\"Schließen\">✕</button><h2 id=\"icsDirectionTitle\">Deine Richtung</h2><p>Wohin möchtest du als Nächstes?</p><div id=\"icsDirectionLinks\"></div></dialog>\n");

(function(){
const base='https://www.innercodesystems.com/';
const catalog={
entdecken:['ICS Entdecken','ics-entdecken.html'],
start:['ICS Startseite','ics-startseite.html'],
werte:['Werte-Kompass','werte-kompass.html'],glauben:['Glaubenssatz-Kompass','glaubenssatz-kompass.html'],modus:['Modus-Kompass','modus-kompass.html'],trigger:['Trigger-Kompass','trigger-kompass.html'],entscheidung:['Entscheidungs-Kompass','ics-entscheidungs-kompass.html'],wort:['Wort- & Metaphernkompass','https://ics-wort-metaphernkompass.peter-wicklein.workers.dev/'],system:['ICS System Check','ICS_System_Check_V20_TESTMARKIERUNG.html'],naehrt:['Was nährt dich?','was-naehrt-dich.html'],schoepfer:['Schöpfer-Codefinder','ics-schoepfer-codefinder.html'],mikro:['Mikro-RESET','ics-mikro-reset.html'],fragen:['30 Fragen an dich','30-fragen.html'],meditation:['Meditationen','meditationen.html'],gegenpol:['Gegenpol-Generator','gegenpol-generator.html'],sieben:['7-Tage-RESET','7-tage-reset.html'],achtsam:['Achtsamkeits-Guide','achtsamkeits-guide/'],inner:['INNER CODE','inner.html'],body:['BODY CODE','body.html'],action:['ACTION CODE','action.html'],reset:['RESET','reset.html'],orientierung:['Orientierung','orientierung.html'],akademie:['ICS Akademie','ics-akademie.html'],kompasswelt:['Kompasswelt','https://ics-goldenes-portal.pages.dev/ICS-Kompasswelt-Panorama.html'],portal:['Das Goldene Tor','https://ics-goldenes-portal.pages.dev/'],website:['ICS kennenlernen',''],bibliothek:['Weitere Anwendungen','tool-bibliothek.html']
};
const map={
start:['portal','entdecken','system','kompasswelt'],
werte:['glauben','entscheidung','fragen','kompasswelt'],
glauben:['mikro','wort','modus','kompasswelt'],
modus:['schoepfer','mikro','system','kompasswelt'],
trigger:['glauben','mikro','gegenpol','kompasswelt'],
entscheidung:['werte','fragen','action','kompasswelt'],
wort:['glauben','fragen','gegenpol','kompasswelt'],
system:['inner','body','action','reset'],
naehrt:['body','achtsam','meditation','werte'],
schoepfer:['modus','entscheidung','action','werte'],
mikro:['sieben','achtsam','modus','reset'],
fragen:['werte','wort','entscheidung','inner'],
meditation:['achtsam','naehrt','body','reset'],
gegenpol:['trigger','wort','glauben','mikro'],
sieben:['mikro','achtsam','modus','reset'],
bibliothek:['entdecken','system','kompasswelt','portal'],
inner:['glauben','werte','wort','fragen'],
body:['naehrt','meditation','achtsam','mikro'],
action:['entscheidung','schoepfer','modus','werte'],
reset:['mikro','sieben','trigger','meditation'],
orientierung:['system','werte','entscheidung','kompasswelt'],
akademie:['inner','system','kompasswelt','website'],
achtsam:['meditation','naehrt','mikro','body']
};
const currentPath=location.pathname.replace(/\/$/,'').split('/').pop()||'';
const current=location.hostname==='ics-wort-metaphernkompass.peter-wicklein.workers.dev'?'wort':Object.keys(catalog).find(k=>catalog[k][1]&&!catalog[k][1].startsWith('https:')&&(catalog[k][1].replace(/\/$/,'')===currentPath||catalog[k][1].replace(/\.html$/,'').replace(/\/$/,'')===currentPath));
const routes=(map[current]||['system','kompasswelt','portal','website']).filter(k=>k!==current).map(key=>({key,name:catalog[key][0],url:new URL(catalog[key][1],base).href}));
const dialog=document.getElementById('icsDirectionDialog');
const links=document.getElementById('icsDirectionLinks');
routes.forEach(r=>{const a=document.createElement('a');a.href=r.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=r.name+' ↗';links.appendChild(a)});
const open=()=>{if(!dialog.open)dialog.showModal()};
document.getElementById('icsDirectionAnchor').addEventListener('click',open);
document.querySelectorAll('[data-ics-direction]').forEach(b=>b.addEventListener('click',open));
document.getElementById('icsDirectionClose').addEventListener('click',()=>dialog.close());
})();

})();

(function(){
const pages=new Set(['ics-entdecken.html','werte-kompass.html','glaubenssatz-kompass.html','modus-kompass.html','trigger-kompass.html','ics-entscheidungs-kompass.html','tool-bibliothek.html','ICS_System_Check_V20_TESTMARKIERUNG.html','was-naehrt-dich.html','ics-schoepfer-codefinder.html','ics-mikro-reset.html','30-fragen.html','meditationen.html','gegenpol-generator.html','7-tage-reset.html','inner.html','body.html','action.html','reset.html','orientierung.html','ics-akademie.html','ics-startseite.html','ics-methode.html','persoenliche-begleitung.html','transformationsmassage.html']);
function apply(a){
const raw=a.getAttribute('href');if(!raw||raw.startsWith('#')||a.hasAttribute('download')||a.dataset.icsSameTab!==undefined)return;
try{
const u=new URL(raw,location.href),p=u.pathname.split('/').filter(Boolean).pop()||'';
if(u.protocol!=='https:'|| (u.origin===location.origin&&u.pathname===location.pathname))return;
const site=['www.innercodesystems.com','innercodesystems.com','innercodesystems.github.io'].includes(u.hostname);
const publicTarget=(site&&(pages.has(p)||['achtsamkeits-guide','was-naehrt-dich','werte-kompass','ics-todo-kalender'].includes(p)||u.pathname==='/'))||['ics-goldenes-portal.pages.dev','ics-wort-metaphernkompass.peter-wicklein.workers.dev'].includes(u.hostname);
if(!publicTarget)return;
a.target='_blank';a.rel='noopener noreferrer';
}catch(e){}
}
document.querySelectorAll('a[href]').forEach(apply);
document.addEventListener('click',e=>{const a=e.target.closest?.('a[href]');if(a)apply(a)},true);
window.addEventListener('load',()=>document.querySelectorAll('a[href]').forEach(apply),{once:true});
})();
