/* ICS navigation standard: Zurück = innerhalb des Tools, Abbrechen = zur Herkunft */
(function(){
  const KEY='ics_tool_origin_v1';
  const here=location.href;
  const ref=document.referrer||'';
  const params=new URLSearchParams(location.search);
  const from=(params.get('from')||'').toLowerCase();
  const map={
    inner:'https://www.innercodesystems.com/inner',
    body:'https://www.innercodesystems.com/body',
    action:'https://www.innercodesystems.com/action',
    reset:'https://www.innercodesystems.com/reset',
    orientierung:'https://www.innercodesystems.com/orientierung',
    orientation:'https://www.innercodesystems.com/orientierung',
    meinics:'https://app.innercodesystems.com/?view=meinics',
    app:'https://app.innercodesystems.com/?view=meinics'
  };
  function safeRef(){
    try{
      if(!ref) return '';
      const u=new URL(ref);
      if(u.href===here || u.pathname===location.pathname) return '';
      return u.href;
    }catch(e){return ''}
  }
  const explicit=map[from]||'';
  const incoming=safeRef();
  if(explicit) sessionStorage.setItem(KEY,explicit);
  else if(incoming) sessionStorage.setItem(KEY,incoming);
  function target(){
    return explicit || sessionStorage.getItem(KEY) || incoming || 'https://www.innercodesystems.com';
  }
  window.ICSNavigation=window.ICSNavigation||{};
  window.ICSNavigation.abort=function(){ location.href=target(); };
  function install(){
    if(document.querySelector('[data-ics-abort]')) return;
    const host=document.querySelector('#quiz,.quiz,.tool,.container,main,#app,.wrap,.page')||document.body;
    if(!host) return;
    const b=document.createElement('button');
    b.type='button'; b.setAttribute('data-ics-abort','1'); b.textContent='✕ Abbrechen';
    b.style.cssText='position:fixed;right:14px;top:14px;z-index:9999;padding:9px 13px;border:1px solid rgba(184,146,79,.55);border-radius:999px;background:rgba(26,24,21,.92);color:#f6f1e7;font:600 14px system-ui;cursor:pointer;box-shadow:0 4px 18px rgba(0,0,0,.18)';
    b.addEventListener('click',window.ICSNavigation.abort);
    document.body.appendChild(b);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install); else install();
})();