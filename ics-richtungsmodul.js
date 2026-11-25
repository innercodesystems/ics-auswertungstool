(function(){if(document.getElementById('icsDirectionAnchor'))return;document.body.insertAdjacentHTML('beforeend',"<style>\n#icsDirectionAnchor{position:fixed;right:16px;bottom:max(16px,env(safe-area-inset-bottom));z-index:9000;background:#D4A03A;color:#181612;border:1px solid #e7bf72;border-radius:30px;padding:12px 18px;font:600 14px system-ui;cursor:pointer;box-shadow:0 4px 20px #0005}\n#icsDirectionDialog{box-sizing:border-box;width:min(440px,calc(100% - 24px));max-height:85dvh;overflow:auto;background:#211e19;color:#fffdf8;border:1px solid #8c703e;border-radius:20px;padding:24px;font:16px system-ui}\n#icsDirectionDialog::backdrop{background:#0009}\n#icsDirectionDialog a{display:block;color:#fffdf8;text-decoration:none;padding:14px 0;border-bottom:1px solid #655333}\n#icsDirectionDialog button{float:right;background:transparent;color:#fffdf8;border:1px solid #8c703e;border-radius:8px;padding:8px;cursor:pointer}\n#icsDirectionDialog h2{color:#e5b85d;margin:0 0 12px;font-size:24px}\n#icsDirectionDialog a:focus-visible,#icsDirectionAnchor:focus-visible{outline:3px solid #fffdf8;outline-offset:3px}\n</style>\n<button type=\"button\" id=\"icsDirectionAnchor\" aria-haspopup=\"dialog\">◈ Deine Richtung</button>\n<dialog id=\"icsDirectionDialog\" aria-labelledby=\"icsDirectionTitle\"><button type=\"button\" id=\"icsDirectionClose\" aria-label=\"Schließen\">✕</button><h2 id=\"icsDirectionTitle\">Deine Richtung</h2><p>Wohin möchtest du als Nächstes?</p><div id=\"icsDirectionLinks\"></div></dialog>\n");

(function(){
const routes=[
{key:'kompasswelt',name:'Kompasswelt',url:'https://ics-goldenes-portal.pages.dev/ICS-Kompasswelt-Panorama.html'},
{key:'next',name:'Glaubenssatz-Kompass',url:'https://www.innercodesystems.com/glaubenssatz-kompass.html'},
{key:'portal',name:'Das Goldene Tor',url:'https://ics-goldenes-portal.pages.dev/'},
{key:'website',name:'ICS kennenlernen',url:'https://www.innercodesystems.com/'}
];
const current=location.pathname.split('/').pop();
if(current==='glaubenssatz-kompass.html'){routes[1]={key:'next',name:'Modus-Kompass',url:'https://www.innercodesystems.com/modus-kompass.html'};}
if(current==='modus-kompass.html'){routes[1]={key:'next',name:'Trigger-Kompass',url:'https://www.innercodesystems.com/trigger-kompass.html'};}
if(current==='trigger-kompass.html'){routes[1]={key:'next',name:'Werte-Kompass',url:'https://www.innercodesystems.com/werte-kompass.html'};}
const from=new URLSearchParams(location.search).get('ics_from');
const first=routes.findIndex(r=>r.key===from);
if(first>0)routes.unshift(routes.splice(first,1)[0]);
const dialog=document.getElementById('icsDirectionDialog');
const links=document.getElementById('icsDirectionLinks');
routes.forEach(r=>{const a=document.createElement('a');a.href=r.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=r.name+' ↗';links.appendChild(a)});
const open=()=>{if(!dialog.open)dialog.showModal()};
document.getElementById('icsDirectionAnchor').addEventListener('click',open);
document.querySelectorAll('[data-ics-direction]').forEach(b=>b.addEventListener('click',open));
document.getElementById('icsDirectionClose').addEventListener('click',()=>dialog.close());
})();

})();