(function(){
  'use strict';

  const BASE='https://innercodesystems.github.io/ics-auswertungstool/';
  const APP='https://app.innercodesystems.com/';

  const items=[
    ['START',BASE+'ics-startseite.html'],
    ['INNER',BASE+'inner.html'],
    ['BODY',BASE+'body.html'],
    ['ACTION',BASE+'action.html'],
    ['RESET',BASE+'reset.html'],
    ['ORIENTIERUNG',BASE+'orientierung.html'],
    ['BEGLEITUNG',BASE+'persoenliche-begleitung.html'],
    ['MEIN ICS',APP]
  ];

  function currentKey(){
    const p=location.pathname.toLowerCase();

    if(p.endsWith('/inner.html')) return 'INNER';

    if(
      p.endsWith('/body.html') ||
      p.endsWith('/transformationsmassage.html')
    ) return 'BODY';

    if(p.endsWith('/action.html')) return 'ACTION';

    if(
      p.endsWith('/reset.html') ||
      p.endsWith('/7-tage-reset.html')
    ) return 'RESET';

    if(p.endsWith('/orientierung.html')) return 'ORIENTIERUNG';

    if(p.endsWith('/persoenliche-begleitung.html'))
      return 'BEGLEITUNG';

    return 'START';
  }

  function addStyles(){

    if(document.getElementById('icsSharedMobileNavStyles')) return;

    const style=document.createElement('style');
    style.id='icsSharedMobileNavStyles';

    style.textContent=`

      .ics-shared-menu-button{
        display:none;
        align-items:center;
        justify-content:center;

        width:44px;
        height:44px;

        flex:0 0 auto;

        border:1px solid rgba(212,160,58,.35);
        border-radius:8px;

        background:#fffdf8;
        color:#1a1a1a;

        font-size:24px;
        line-height:1;

        cursor:pointer;
      }

      .ics-shared-mobile-menu{
        display:none;

        position:relative;
        z-index:1000;

        padding:20px;

        background:#fffdf8;

        border-top:1px solid rgba(212,160,58,.16);

        box-shadow:
          0 15px 30px rgba(26,26,26,.12);
      }

      .ics-shared-mobile-menu.open{
        display:flex;
        flex-direction:column;
        gap:18px;
      }

      .ics-shared-mobile-menu a{
        color:#1a1a1a;
        text-decoration:none;

        font-size:13px;
        font-weight:700;
        letter-spacing:.04em;
      }

      .ics-shared-mobile-menu a.active{
        color:#d4a03a;
      }

      .ics-shared-mobile-menu
      a.ics-shared-mein{

        display:inline-block;
        width:max-content;

        padding:11px 15px;

        border-radius:6px;

        background:#d4a03a;
        color:#fff;
      }

      @media(max-width:950px){

        .header .nav{
          display:none !important;
        }

        .header
        .ics-shared-menu-button{
          display:flex;
        }

      }

      @media(max-width:900px){

        .ics-topbar .ics-nav{
          display:none !important;
        }

        .ics-topbar
        .ics-shared-menu-button{
          display:flex;
        }

      }

    `;

    document.head.appendChild(style);
  }

  function ensureBegleitung(nav){

    if(!nav) return;

    const links=[...nav.querySelectorAll('a')];

    const exists=links.some(function(link){
      return link.textContent
        .trim()
        .toUpperCase()==='BEGLEITUNG';
    });

    if(exists) return;

    const mein=links.find(function(link){
      return link.textContent
        .trim()
        .toUpperCase()==='MEIN ICS';
    });

    const link=document.createElement('a');

    link.href=
      BASE+'persoenliche-begleitung.html';

    link.textContent='BEGLEITUNG';

    if(currentKey()==='BEGLEITUNG'){
      link.classList.add('active');
    }

    if(mein){
      nav.insertBefore(link,mein);
    }else{
      nav.appendChild(link);
    }
  }

  function build(){

    /*
      Startseite besitzt bereits
      unser fertiges mobiles Menü.
      Dort nichts doppelt erzeugen.
    */

    if(
      document.getElementById('icsMenuButton') ||
      document.getElementById('icsSharedMenuButton')
    ){
      return;
    }

    const header=
      document.querySelector(
        '.header, .ics-topbar'
      );

    if(!header) return;

    const nav=
      header.querySelector(
        '.nav, .ics-nav'
      );

    ensureBegleitung(nav);

    const button=
      document.createElement('button');

    button.id='icsSharedMenuButton';
    button.className=
      'ics-shared-menu-button';

    button.type='button';

    button.setAttribute(
      'aria-label',
      'Menü öffnen'
    );

    button.setAttribute(
      'aria-expanded',
      'false'
    );

    button.textContent='☰';

    header.appendChild(button);


    const menu=
      document.createElement('div');

    menu.id='icsSharedMobileMenu';

    menu.className=
      'ics-shared-mobile-menu';

    const current=currentKey();


    items.forEach(function(item){

      const label=item[0];
      const href=item[1];

      const link=
        document.createElement('a');

      link.href=href;
      link.textContent=label;

      if(label===current){
        link.classList.add('active');
      }

      if(label==='MEIN ICS'){

        link.classList.add(
          'ics-shared-mein'
        );

        link.target='_blank';

        link.rel=
          'noopener noreferrer';
      }

      menu.appendChild(link);

    });


    header.insertAdjacentElement(
      'afterend',
      menu
    );


    function closeMenu(){

      menu.classList.remove('open');

      button.textContent='☰';

      button.setAttribute(
        'aria-expanded',
        'false'
      );

      button.setAttribute(
        'aria-label',
        'Menü öffnen'
      );

    }


    button.addEventListener(
      'click',
      function(){

        const open=
          menu.classList.toggle('open');

        button.textContent=
          open ? '×' : '☰';

        button.setAttribute(
          'aria-expanded',
          String(open)
        );

        button.setAttribute(
          'aria-label',
          open
            ? 'Menü schließen'
            : 'Menü öffnen'
        );

      }
    );


    menu
      .querySelectorAll('a')
      .forEach(function(link){

        link.addEventListener(
          'click',
          closeMenu
        );

      });


    document.addEventListener(
      'keydown',
      function(event){

        if(event.key==='Escape'){
          closeMenu();
        }

      }
    );


    document.addEventListener(
      'click',
      function(event){

        if(
          menu.classList.contains('open') &&
          !menu.contains(event.target) &&
          event.target!==button
        ){
          closeMenu();
        }

      }
    );

  }


  function init(){

    addStyles();

    const nav=
      document.querySelector(
        '.header .nav, .ics-topbar .ics-nav'
      );

    ensureBegleitung(nav);

    build();

  }


  if(document.readyState==='loading'){

    document.addEventListener(
      'DOMContentLoaded',
      init
    );

  }else{

    init();

  }

})();
