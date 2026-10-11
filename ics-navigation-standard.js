/* ICS Navigation: Abbrechen bleibt im Tool; Zurück führt zur Herkunft.
   Tool-spezifische ICSNavigation.abort-Implementierungen bleiben möglich. */
(function(){
  'use strict';
  const HOME='https://www.innercodesystems.com/';
  const ORIGIN_KEY='ics_tool_origin_v1';
  const params=new URLSearchParams(location.search);
  const aliases={
    inner:'/inner.html',body:'/body.html',action:'/action.html',
    reset:'/reset.html',orientierung:'/orientierung.html',
    orientation:'/orientierung.html'
  };
  function safeOrigin(value){
    if(!value)return '';
    try{
      const url=new URL(value,location.origin);
      if(url.protocol!=='https:'&&url.protocol!=='http:')return '';
      if(!(/(^|\\.)innercodesystems\\.com$/.test(url.hostname) ||
        url.hostname==='innercodesystems.github.io'))return '';
      if(url.origin===location.origin && url.pathname===location.pathname)return '';
      return url.href;
    }catch(e){return '';}
  }
  const from=params.get('ics_from')||params.get('from')||'';
  const alias=aliases[from.toLowerCase()];
  const explicit=safeOrigin(alias?new URL(alias,HOME).href:from);
  const ref=safeOrigin(document.referrer);
  // A separate per-tab origin prevents unrelated tools from overwriting each other.
  const origin=explicit||ref||safeOrigin(sessionStorage.getItem(ORIGIN_KEY))||HOME;
  if(explicit||ref)sessionStorage.setItem(ORIGIN_KEY,origin);
  window.ICSNavigation=window.ICSNavigation||{};
  window.ICSNavigation.back=function(){location.assign(origin);};
  function defaultAbort(){
    document.querySelectorAll('details[open]').forEach(function(d){d.open=false;});
    document.querySelectorAll('form').forEach(function(f){f.reset();});
    const url=new URL(location.href);
    url.searchParams.delete('ics_gs');
    url.searchParams.delete('ics_suche');
    history.replaceState(history.state,'',url.pathname+url.search+url.hash);
    window.scrollTo({top:0,behavior:'smooth'});
    document.dispatchEvent(new CustomEvent('ics:abort'));
  }
  if(typeof window.ICSNavigation.abort!=='function'){
    window.ICSNavigation.abort=defaultAbort;
  }
  // Keine global schwebenden Buttons: Navigation wird in jedem Tool
  // passend zum vorhandenen Header platziert, um mobile Überlagerungen
  // und doppelte Zurück-Buttons zu vermeiden.
})();
