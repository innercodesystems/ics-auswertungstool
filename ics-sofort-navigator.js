(function(){
  'use strict';

  const input = document.querySelector('.ics-search input');
  const searchBox = document.querySelector('.ics-search');
  if(!input || !searchBox) return;

  const STYLE_ID = 'ics-sofort-navigator-style';

  if(!document.getElementById(STYLE_ID)){
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .ics-navigator-wrap{max-width:570px;margin-top:12px;font-family:Arial,Helvetica,sans-serif}
      .ics-navigator-examples{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
      .ics-navigator-chip{appearance:none;border:1px solid rgba(212,160,58,.28);background:rgba(255,255,255,.7);color:#6e665d;border-radius:999px;padding:8px 11px;font-size:12px;cursor:pointer;transition:.18s ease}
      .ics-navigator-chip:hover,.ics-navigator-chip:focus{border-color:#D4A03A;color:#1A1A1A;outline:none;transform:translateY(-1px)}
      .ics-navigator-result{display:none;margin-top:12px;padding:17px 18px;border-radius:12px;background:#1a1815;color:#f6f1e7;border:1px solid rgba(212,160,58,.42);box-shadow:0 14px 30px rgba(26,26,26,.14)}
      .ics-navigator-result.show{display:block}
      .ics-navigator-kicker{color:#D4A03A;font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;margin-bottom:7px}
      .ics-navigator-result h3{margin:0 0 7px;font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:500;color:#f6f1e7}
      .ics-navigator-result p{margin:0;color:#c9c0b3;font-size:13px;line-height:1.55}
      .ics-navigator-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:13px}
      .ics-navigator-btn{display:inline-flex;align-items:center;justify-content:center;min-height:39px;padding:9px 12px;border-radius:8px;text-decoration:none;font-size:12px;font-weight:800;background:#D4A03A;color:#17130e;border:1px solid #D4A03A}
      .ics-navigator-btn.secondary{background:transparent;color:#f6f1e7;border-color:#5b4c34}
      .ics-navigator-hint{margin-top:9px;font-size:11px;color:#8b8379}
      @media(max-width:900px){.ics-navigator-wrap{max-width:none}}
      @media(max-width:520px){
        .ics-navigator-examples{gap:6px}
        .ics-navigator-chip{font-size:11px;padding:7px 9px}
        .ics-navigator-result{padding:15px}
        .ics-navigator-result h3{font-size:20px}
        .ics-navigator-actions{display:grid;grid-template-columns:1fr}
        .ics-navigator-btn{width:100%}
      }
    `;
    document.head.appendChild(style);
  }

  const container = document.createElement('div');
  container.className = 'ics-navigator-wrap';
  container.innerHTML = `
    <div class="ics-navigator-examples" aria-label="Beispiele">
      <button type="button" class="ics-navigator-chip" data-example="Ich habe zu wenig Energie">Zu wenig Energie</button>
      <button type="button" class="ics-navigator-chip" data-example="Ich weiß nicht, wie es weitergeht">Wie geht es weiter?</button>
      <button type="button" class="ics-navigator-chip" data-example="Ich komme nicht ins Handeln">Ich komme nicht ins Handeln</button>
    </div>
    <div class="ics-navigator-result" id="ics-navigator-result" aria-live="polite"></div>
    <div class="ics-navigator-hint">Schreib einfach in deinen eigenen Worten, was dich gerade beschäftigt, und drücke Enter.</div>
  `;

  searchBox.insertAdjacentElement('afterend', container);

  const resultBox = container.querySelector('#ics-navigator-result');

  const worlds = {
    inner:{
      label:'INNER',
      title:'Es geht gerade um Klarheit und innere Führung.',
      text:'Deine Worte deuten darauf hin, dass Gedanken, Zweifel, innere Unruhe oder die Frage nach dem, was für dich wirklich stimmt, im Vordergrund stehen.',
      url:'https://innercodesystems.github.io/ics-auswertungstool/inner.html',
      button:'INNER entdecken'
    },
    body:{
      label:'BODY',
      title:'Deine Energie und dein Körper stehen gerade im Vordergrund.',
      text:'Deine Eingabe spricht dafür, zuerst auf Energie, Regulation, Erschöpfung oder Körpersignale zu schauen – bevor du noch mehr im Kopf lösen willst.',
      url:'https://innercodesystems.github.io/ics-auswertungstool/body.html',
      button:'BODY entdecken'
    },
    action:{
      label:'ACTION',
      title:'Du brauchst gerade weniger Denken und mehr einen machbaren nächsten Schritt.',
      text:'Deine Worte passen zu Umsetzung, Prioritäten, Aufschieben oder dem Gefühl, eigentlich zu wissen, was zu tun wäre – aber nicht in Bewegung zu kommen.',
      url:'https://innercodesystems.github.io/ics-auswertungstool/action.html',
      button:'ACTION entdecken'
    },
    reset:{
      label:'RESET',
      title:'Ein wiederkehrendes Muster scheint gerade wichtiger zu sein als die einzelne Situation.',
      text:'Deine Eingabe deutet auf automatische Reaktionen, Festhalten, Stressmuster oder etwas hin, das immer wieder ähnlich abläuft.',
      url:'https://innercodesystems.github.io/ics-auswertungstool/reset.html',
      button:'RESET entdecken'
    },
    orientation:{
      label:'ORIENTIERUNG',
      title:'Du suchst gerade Richtung.',
      text:'Deine Worte sprechen für eine Frage nach Lebensphase, Beziehung, Beruf, Entscheidung oder dem nächsten Kapitel.',
      url:'https://innercodesystems.github.io/ics-auswertungstool/orientierung.html',
      button:'ORIENTIERUNG entdecken'
    }
  };

  const rules = {
    inner:[
      'gedanken','denke','denken','kopf','zweifel','zweifle','unsicher',
      'klarheit','grübeln','grueble','erwartungen','bedürfnis',
      'beduerfnis','was will ich','wer bin ich','innerlich'
    ],
    body:[
      'müde','muede','erschöpft','erschoepft','energie','kraftlos',
      'keine kraft','schlapp','körper','koerper','schmerzen','spannung',
      'verspannt','unruhe','schlaf','ausgelaugt','regeneration','atem'
    ],
    action:[
      'aufschieben','prokrast','nicht ins handeln','nicht anfangen',
      'komme nicht ins handeln','umsetzen','umsetzung','priorität',
      'prioritaet','zu viel auf einmal','perfektion','anfangen','fokus',
      'mache es nicht','durchziehen'
    ],
    reset:[
      'immer wieder','gleiches muster','muster','wiederholt',
      'wiederholung','stressreaktion','reaktion','trigger','festhalten',
      'loslassen','rückfall','rueckfall','alte reaktion','blockade',
      'blockiert'
    ],
    orientation:[
      'wie es weitergeht','weitergehen','weiter geht','richtung',
      'orientierung','beruf','job','arbeit','business','beziehung',
      'partnerschaft','trennung','lebensphase','zukunft','entscheidung',
      'wechseln','wohin','sinn','lebensaufgabe'
    ]
  };

  function normalize(text){
    return text.toLowerCase().trim().replace(/[!?.,;:()]/g,' ');
  }

  function scoreText(text){
    const t = normalize(text);
    const scores = {
      inner:0,
      body:0,
      action:0,
      reset:0,
      orientation:0
    };

    Object.keys(rules).forEach(key=>{
      rules[key].forEach(term=>{
        if(t.includes(term)){
          scores[key] += term.includes(' ') ? 3 : 2;
        }
      });
    });

    if(/nicht weiß|nicht weiss|unklar|ratlos/.test(t)){
      scores.orientation += 2;
    }

    if(/ständig|staendig|immer|wieder/.test(t) && scores.reset>0){
      scores.reset += 2;
    }

    if(/müde|muede|erschöpft|erschoepft|energie/.test(t)){
      scores.body += 2;
    }

    if(/tun|machen|anfangen|handeln/.test(t) && /nicht|kaum|schwer/.test(t)){
      scores.action += 2;
    }

    if(/gedanken|kopf|grübel|gruebel/.test(t)){
      scores.inner += 2;
    }

    return Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  }

  function render(text){
    const cleaned = text.trim();

    if(cleaned.length < 4){
      resultBox.classList.add('show');
      resultBox.innerHTML = `
        <div class="ics-navigator-kicker">ICS SOFORT-NAVIGATOR</div>
        <h3>Schreib mir ein wenig mehr.</h3>
        <p>Ein kurzer Satz reicht.</p>
      `;
      return;
    }

    const ranked = scoreText(cleaned);
    const top = ranked[0];
    const second = ranked[1];

    if(!top || top[1] === 0 || (second && top[1] === second[1])){
      resultBox.classList.add('show');
      resultBox.innerHTML = `
        <div class="ics-navigator-kicker">MEHRERE BEREICHE BERÜHRT</div>
        <h3>Das lässt sich nicht sinnvoll auf nur eine ICS Welt reduzieren.</h3>
        <p>Genau dafür ist der System Check da.</p>
        <div class="ics-navigator-actions">
          <a class="ics-navigator-btn" href="#system-check">System Check starten</a>
        </div>
      `;
      return;
    }

    const w = worlds[top[0]];
    const mixed = second && second[1] > 0 && (top[1] - second[1] <= 2);
    const secondWorld = mixed ? worlds[second[0]] : null;

    resultBox.classList.add('show');

    resultBox.innerHTML = `
      <div class="ics-navigator-kicker">
        ${mixed ? w.label + ' + ' + secondWorld.label : w.label}
      </div>

      <h3>${w.title}</h3>

      <p>
        ${w.text}
        ${mixed
          ? ' Gleichzeitig berührt deine Eingabe auch ' + secondWorld.label + '.'
          : ''
        }
      </p>

      <div class="ics-navigator-actions">
        <a class="ics-navigator-btn" href="${w.url}">
          ${w.button}
        </a>

        ${top[0] === 'inner'
          ? '<a class="ics-navigator-btn secondary" href="https://innercodesystems.github.io/ics-auswertungstool/werte-kompass.html" target="_blank" rel="noopener noreferrer">Werte-Kompass</a>'
          : ''
        }

        ${top[0] === 'body'
          ? '<a class="ics-navigator-btn secondary" href="https://innercodesystems.com/reise-durch-die-transformationsmassage" target="_blank" rel="noopener noreferrer">Massage entdecken</a>'
          : ''
        }

        <a class="ics-navigator-btn secondary" href="#system-check">
          System Check
        </a>
      </div>
    `;
  }

  input.setAttribute('autocomplete','off');
  input.setAttribute('enterkeyhint','go');

  input.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
      e.preventDefault();
      render(input.value);
    }
  });

  container.querySelectorAll('[data-example]').forEach(btn=>{
    btn.addEventListener('click',function(){
      input.value = btn.getAttribute('data-example') || '';
      render(input.value);
    });
  });

})();
