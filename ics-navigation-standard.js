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
  function makeButton(label,attribute,action){
    const button=document.createElement('button');
    button.type='button';
    button.setAttribute(attribute,'1');
    button.textContent=label;
    button.style.cssText='padding:9px 13px;min-height:42px;border:1px solid rgba(184,146,79,.65);border-radius:999px;background:rgba(26,24,21,.96);color:#f6f1e7;font:600 14px system-ui;cursor:pointer;box-shadow:0 4px 18px rgba(0,0,0,.18)';
    button.addEventListener('click',function(e){e.preventDefault();action();});
    return button;
  }
  function install(){
    if(!document.body)return;
    const abortExists=!!document.querySelector('[data-ics-abort]');
    const backExists=!!document.querySelector('[data-ics-back]');
    if(abortExists&&backExists)return;
    const bar=document.createElement('nav');
    bar.setAttribute('aria-label','ICS Werkzeugnavigation');
    bar.style.cssText='position:fixed;right:12px;top:12px;z-index:9999;display:flex;flex-wrap:wrap;gap:7px;max-width:calc(100vw - 24px)';
    if(!abortExists)bar.appendChild(makeButton('✕ Abbrechen','data-ics-abort',function(){window.ICSNavigation.abort();}));
    if(!backExists)bar.appendChild(makeButton('← Zurück','data-ics-back',function(){window.ICSNavigation.back();}));
    if(bar.children.length)document.body.appendChild(bar);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);
  else install();
})();