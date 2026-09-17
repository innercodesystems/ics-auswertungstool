(function(){
  'use strict';

  const BASE='https://www.innercodesystems.com/';
  const ASSET_BASE='https://innercodesystems.github.io/ics-auswertungstool/';
  const APP='https://app.innercodesystems.com/';

  const items=[
    ['START',BASE+'ics-startseite.html'],
    ['INNER',BASE+'inner.html'],
    ['BODY',BASE+'body.html'],
    ['ACTION',BASE+'action.html'],
    ['RESET',BASE+'reset.html'],
    ['ORIENTIERUNG',BASE+'orientierung.html'],
    ['BEGLEITUNG',BASE+'persoenliche-begleitung.html'],
    ['AKADEMIE',BASE+'ics-akademie.html'],
    ['MEIN ICS',APP]
  ];

  function currentKey(){
    const p=location.pathname.toLowerCase();
    if(p.endsWith('/inner.html')) return 'INNER';
    if(p.endsWith('/body.html') || p.endsWith('/transformationsmassage.html')) return 'BODY';
    if(p.endsWith('/action.html')) return 'ACTION';
    if(p.endsWith('/reset.html') || p.endsWith('/7-tage-reset.html')) return 'RESET';
    if(p.endsWith('/orientierung.html')) return 'ORIENTIERUNG';
    if(p.endsWith('/persoenliche-begleitung.html')) return 'BEGLEITUNG';
    if(p.endsWith('/ics-akademie.html')) return 'AKADEMIE';
    return 'START';
  }

  function addStyles(){
    if(document.getElementById('icsSharedMobileNavStyles')) return;
    const style=document.createElement('style');
    style.id='icsSharedMobileNavStyles';
    style.textContent=`
      .ics-shared-menu-button{display:none;align-items:center;justify-content:center;width:44px;height:44px;flex:0 0 auto;border:1px solid rgba(212,160,58,.35);border-radius:8px;background:#fffdf8;color:#1a1a1a;font-size:24px;line-height:1;cursor:pointer;}
      .ics-shared-mobile-menu{display:none;position:relative;z-index:1000;padding:20px;background:#fffdf8;border-top:1px solid rgba(212,160,58,.16);box-shadow:0 15px 30px rgba(26,26,26,.12);}
      .ics-shared-mobile-menu.open{display:flex;flex-direction:column;gap:18px;}
      .ics-shared-mobile-menu a{color:#1a1a1a;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:.04em;}
      .ics-shared-mobile-menu a.active{color:#d4a03a;}
      .ics-shared-mobile-menu a.ics-shared-mein{display:inline-block;width:max-content;padding:11px 15px;border-radius:6px;background:#d4a03a;color:#fff;}
      @media(max-width:950px){.header .nav{display:none !important;}.header .ics-shared-menu-button{display:flex;}}
      @media(max-width:900px){.ics-topbar .ics-nav{display:none !important;}.ics-topbar .ics-shared-menu-button{display:flex;}}
    `;
    document.head.appendChild(style);
  }

  function ensureCurrentLogo(){
    document.querySelectorAll('.header .brand img, .ics-topbar .ics-brand-mark img, .site-header .brand img, .ics-footer-logo').forEach(function(img){
      img.src=ASSET_BASE+'ics-logo.png';
      img.alt='ICS';
    });
  }

  function ensureNavigationLinks(nav){
    if(!nav) return;

    const current=currentKey();

    function ensure(label,href){
      let link=[...nav.querySelectorAll('a')].find(function(a){return a.textContent.trim().toUpperCase()===label;});
      if(!link){
        link=document.createElement('a');
        link.textContent=label;
        const mein=[...nav.querySelectorAll('a')].find(function(a){return a.textContent.trim().toUpperCase()==='MEIN ICS';});
        if(mein) nav.insertBefore(link,mein); else nav.appendChild(link);
      }
      link.href=href;
      if(label===current) link.classList.add('active');
    }

    ensure('BEGLEITUNG',BASE+'persoenliche-begleitung.html');
    ensure('AKADEMIE',BASE+'ics-akademie.html');
  }

  function ensureAllNavigationLinks(){
    document.querySelectorAll('.header .nav, .ics-topbar .ics-nav, .site-header nav').forEach(ensureNavigationLinks);
  }

  function fixTransformationsmassageLinks(){
    if(!location.pathname.toLowerCase().endsWith('/transformationsmassage.html')) return;
    document.querySelectorAll('a').forEach(function(link){
      const label=link.textContent.replace(/\s+/g,' ').trim();
      if(label.includes('Grundlagen entdecken')) link.href=BASE+'grundlagen-transformationsmassage.html';
      if(label.includes('Selbstanwendung entdecken')) link.href=BASE+'selbstanwendung.html';
      if(label.includes('Wissenswelt öffnen')) link.href=BASE+'ics-akademie.html';
    });
  }

  function build(){
    const header=document.querySelector('.header, .ics-topbar');
    if(!header) return;
    const nav=header.querySelector('.nav, .ics-nav');
    ensureNavigationLinks(nav);

    if(document.getElementById('icsMenuButton') || document.getElementById('icsSharedMenuButton')) return;

    const button=document.createElement('button');
    button.id='icsSharedMenuButton';
    button.className='ics-shared-menu-button';
    button.type='button';
    button.setAttribute('aria-label','Menü öffnen');
    button.setAttribute('aria-expanded','false');
    button.textContent='☰';
    header.appendChild(button);

    const menu=document.createElement('div');
    menu.id='icsSharedMobileMenu';
    menu.className='ics-shared-mobile-menu';
    const current=currentKey();

    items.forEach(function(item){
      const label=item[0], href=item[1];
      const link=document.createElement('a');
      link.href=href;
      link.textContent=label;
      if(label===current) link.classList.add('active');
      if(label==='MEIN ICS'){
        link.classList.add('ics-shared-mein');
        link.target='_blank';
        link.rel='noopener noreferrer';
      }
      menu.appendChild(link);
    });

    header.insertAdjacentElement('afterend',menu);

    function closeMenu(){
      menu.classList.remove('open');
      button.textContent='☰';
      button.setAttribute('aria-expanded','false');
      button.setAttribute('aria-label','Menü öffnen');
    }

    button.addEventListener('click',function(){
      const open=menu.classList.toggle('open');
      button.textContent=open ? '×' : '☰';
      button.setAttribute('aria-expanded',String(open));
      button.setAttribute('aria-label',open ? 'Menü schließen' : 'Menü öffnen');
    });

    menu.querySelectorAll('a').forEach(function(link){link.addEventListener('click',closeMenu);});
    document.addEventListener('keydown',function(event){if(event.key==='Escape') closeMenu();});
    document.addEventListener('click',function(event){
      if(menu.classList.contains('open') && !menu.contains(event.target) && event.target!==button) closeMenu();
    });
  }

  function refreshSharedNavigation(){
    ensureCurrentLogo();
    fixTransformationsmassageLinks();
    ensureAllNavigationLinks();
  }

  function init(){
    addStyles();
    refreshSharedNavigation();
    build();
    setTimeout(refreshSharedNavigation,250);
    setTimeout(refreshSharedNavigation,1000);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
