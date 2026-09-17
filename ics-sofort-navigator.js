(function(){
  'use strict';

  const akademieUrl='https://innercodesystems.github.io/ics-auswertungstool/ics-akademie.html';
  const meditationenUrl='https://innercodesystems.github.io/ics-auswertungstool/meditationen.html';
  const toolsUrl='https://innercodesystems.github.io/ics-auswertungstool/tool-bibliothek.html';
  const appUrl='https://app.innercodesystems.com/';

  /* AKADEMIE · Desktop Navigation */
  const desktopNav=document.querySelector('.ics-nav');
  if(desktopNav && !desktopNav.querySelector('a[href*="ics-akademie.html"]')){
    const link=document.createElement('a');
    link.href=akademieUrl;
    link.textContent='AKADEMIE';
    const mein=desktopNav.querySelector('.ics-mein');
    desktopNav.insertBefore(link,mein || null);
  }

  /* AKADEMIE · Mobile Navigation */
  const mobileNav=document.querySelector('.ics-mobile-menu');
  if(mobileNav && !mobileNav.querySelector('a[href*="ics-akademie.html"]')){
    const link=document.createElement('a');
    link.href=akademieUrl;
    link.textContent='AKADEMIE';
    const mein=mobileNav.querySelector('.ics-mein-mobile');
    mobileNav.insertBefore(link,mein || null);
  }

  /* STARTSEITE · sichtbarer Akademie-Einstieg */
  const toolsSection=document.getElementById('tools');
  if(toolsSection && !document.getElementById('ics-akademie-einstieg')){
    const section=document.createElement('section');
    section.id='ics-akademie-einstieg';
    section.innerHTML=`
      <div class="ics-content">
        <div class="ics-section-kicker">ICS AKADEMIE</div>
        <h2 class="ics-section-title">Wissen verstehen. Zusammenhänge erkennen. Bewusst anwenden.</h2>
        <p class="ics-section-intro">Die ICS Akademie ist dein Raum, um dich selbst, deine Muster und die Zusammenhänge deines Lebens tiefer zu verstehen – und aus Erkenntnis bewusste Veränderung entstehen zu lassen.</p>
        <div class="ics-final-cta">
          <div class="ics-section-kicker">VERSTEHEN · ERKENNEN · ANWENDEN · ENTFALTEN</div>
          <h3>Wissen, das etwas bewegt.</h3>
          <p>Entdecke Wissenswelten, die fünf ICS Welten und Wege zur Vertiefung – von Persönlichkeit und Beziehung bis zu Lebensphase, Bewusstsein und digitalen Systemen.</p>
          <a class="ics-gold-button" href="${akademieUrl}">ICS Akademie entdecken →</a>
        </div>
      </div>`;
    toolsSection.insertAdjacentElement('beforebegin',section);
  }

  /* STARTSEITE · vier schlanke Hauptzugänge statt einzelner Kompasse */
  if(toolsSection){
    const grid=toolsSection.querySelector('.ics-card-grid');
    if(grid){
      grid.classList.add('ics-start-hubs');
      grid.innerHTML=`
        <a class="ics-info-card ics-link-card" href="#system-check">
          <div class="ics-card-number">SYSTEM CHECK</div>
          <h3>Wo stehst du gerade?</h3>
          <p>Erkenne deinen aktuellen Zustand und finde heraus, welche ICS-Welt gerade dein stärkster Hebel ist.</p>
          <span class="ics-card-link">System Check starten →</span>
        </a>
        <a class="ics-info-card ics-link-card" href="${toolsUrl}">
          <div class="ics-card-number">TOOL-BIBLIOTHEK</div>
          <h3>Was möchtest du verändern?</h3>
          <p>Entdecke die ICS Werkzeuge für Klarheit, Werte, Glaubenssätze, Muster, Entscheidungen und Veränderung.</p>
          <span class="ics-card-link">Tools entdecken →</span>
        </a>
        <a class="ics-info-card ics-link-card" href="${meditationenUrl}">
          <div class="ics-card-number">MEDITATIONEN</div>
          <h3>Was brauchst du gerade?</h3>
          <p>Finde Meditationen für Ruhe, Verbindung, Regulation und innere Ausrichtung – passend zu deiner ICS-Welt.</p>
          <span class="ics-card-link">Meditationen entdecken →</span>
        </a>
        <a class="ics-info-card ics-link-card" href="${appUrl}">
          <div class="ics-card-number">MEIN ICS</div>
          <h3>Dein persönliches System.</h3>
          <p>Deine Entwicklung, Impulse und persönlichen Werkzeuge an einem Ort – als dein INNER CODE SYSTEM.</p>
          <span class="ics-card-link">Mein ICS öffnen →</span>
        </a>`;
    }

    const contents=toolsSection.querySelectorAll(':scope > .ics-content');
    if(contents.length > 1){
      contents[1].style.display='none';
    }

    if(!document.getElementById('ics-start-hubs-style')){
      const style=document.createElement('style');
      style.id='ics-start-hubs-style';
      style.textContent='.ics-card-grid.ics-start-hubs{grid-template-columns:repeat(2,minmax(0,1fr))}@media(max-width:650px){.ics-card-grid.ics-start-hubs{grid-template-columns:1fr}}';
      document.head.appendChild(style);
    }
  }

  /* STARTSEITE · lokale Marken- und Rechtelinks absichern */
  document.querySelectorAll('.ics-brand-mark img').forEach(function(img){
    img.setAttribute('src','ics-logo.png');
  });

  document.querySelectorAll('.ics-footer-legal a').forEach(function(link){
    const label=(link.textContent || '').trim().toLowerCase();
    if(label === 'impressum') link.setAttribute('href','impressum.html');
    if(label === 'datenschutz') link.setAttribute('href','datenschutz.html');
  });

  /* Der bestehende Sofort-Navigator bleibt in der Startseite nutzbar. */
  const input=document.querySelector('.ics-search input');
  const searchBox=document.querySelector('.ics-search');
  if(!input || !searchBox) return;

  const container=document.createElement('div');
  container.className='ics-navigator-wrap';
  container.innerHTML=`<div class="ics-navigator-examples" aria-label="Beispiele"><button type="button" class="ics-navigator-chip" data-example="Ich habe zu wenig Energie">Zu wenig Energie</button><button type="button" class="ics-navigator-chip" data-example="Ich weiß nicht, wie es weitergeht">Wie geht es weiter?</button><button type="button" class="ics-navigator-chip" data-example="Ich komme nicht ins Handeln">Ich komme nicht ins Handeln</button></div><div class="ics-navigator-result" id="ics-navigator-result" aria-live="polite"></div><div class="ics-navigator-hint">Schreib einfach in deinen eigenen Worten, was dich gerade beschäftigt, und drücke Enter.</div>`;

  if(!document.getElementById('ics-sofort-navigator-style')){
    const style=document.createElement('style');
    style.id='ics-sofort-navigator-style';
    style.textContent='.ics-navigator-wrap{max-width:570px;margin-top:12px;font-family:Arial,Helvetica,sans-serif}.ics-navigator-examples{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.ics-navigator-chip{appearance:none;border:1px solid rgba(212,160,58,.28);background:rgba(255,255,255,.7);color:#6e665d;border-radius:999px;padding:8px 11px;font-size:12px;cursor:pointer}.ics-navigator-result{display:none;margin-top:12px;padding:17px 18px;border-radius:12px;background:#1a1815;color:#f6f1e7;border:1px solid rgba(212,160,58,.42)}.ics-navigator-result.show{display:block}.ics-navigator-kicker{color:#D4A03A;font-size:10px;font-weight:800;letter-spacing:.16em;margin-bottom:7px}.ics-navigator-result h3{margin:0 0 7px;font-family:Georgia,serif;font-size:22px;color:#f6f1e7}.ics-navigator-result p{margin:0;color:#c9c0b3;font-size:13px;line-height:1.55}.ics-navigator-btn{display:inline-flex;margin-top:13px;padding:9px 12px;border-radius:8px;text-decoration:none;font-size:12px;font-weight:800;background:#D4A03A;color:#17130e}.ics-navigator-hint{margin-top:9px;font-size:11px;color:#8b8379}@media(max-width:900px){.ics-navigator-wrap{max-width:none}}';
    document.head.appendChild(style);
  }

  searchBox.insertAdjacentElement('afterend',container);
  const resultBox=container.querySelector('#ics-navigator-result');
  function render(text){
    const t=(text||'').toLowerCase();
    let label='ICS SYSTEM CHECK',title='Mehrere Bereiche können gerade zusammenwirken.',url='#system-check',button='System Check starten';
    if(/müde|muede|erschöpft|erschoepft|energie|körper|koerper/.test(t)){label='BODY';title='Deine Energie und dein Körper stehen gerade im Vordergrund.';url='body.html';button='BODY entdecken';}
    else if(/aufschieben|handeln|umsetzen|anfangen|fokus/.test(t)){label='ACTION';title='Du brauchst gerade einen machbaren nächsten Schritt.';url='action.html';button='ACTION entdecken';}
    else if(/muster|trigger|immer wieder|festhalten|blockade/.test(t)){label='RESET';title='Ein wiederkehrendes Muster scheint gerade wichtig zu sein.';url='reset.html';button='RESET entdecken';}
    else if(/richtung|weitergeht|weiter geht|beruf|beziehung|zukunft|lebensphase|sinn/.test(t)){label='ORIENTIERUNG';title='Du suchst gerade Richtung.';url='orientierung.html';button='ORIENTIERUNG entdecken';}
    else if(/gedanken|kopf|zweifel|klarheit|grübel|gruebel/.test(t)){label='INNER';title='Es geht gerade um Klarheit und innere Führung.';url='inner.html';button='INNER entdecken';}
    resultBox.classList.add('show');
    resultBox.innerHTML=`<div class="ics-navigator-kicker">${label}</div><h3>${title}</h3><p>Nutze den passenden ICS Bereich oder den System Check, um deinen nächsten sinnvollen Schritt zu finden.</p><a class="ics-navigator-btn" href="${url}">${button}</a>`;
  }
  input.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();render(input.value);}});
  container.querySelectorAll('[data-example]').forEach(function(btn){btn.addEventListener('click',function(){input.value=btn.getAttribute('data-example')||'';render(input.value);});});
})();
