// ICS Partneranfragen · eigenständiger Cloudflare Worker
// Bindings: RESEND_API_KEY (Secret), FROM_EMAIL (verified sender), TO_EMAIL (optional)
// Deployment is deliberately separate from the existing PayPal / reports worker.
const ORIGIN = 'https://www.innercodesystems.com';
const json = (data,status=200,origin=ORIGIN)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','access-control-allow-origin':origin,'vary':'Origin','cache-control':'no-store'}});
const safe = (v,max=3000)=>typeof v==='string'?v.trim().slice(0,max):'';
const esc = v=>v.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
async function send(env,to,subject,html,replyTo) {
  const body={from:env.FROM_EMAIL,to:[to],subject,html};
  if(replyTo)body.reply_to=replyTo;
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{'Authorization':'Bearer '+env.RESEND_API_KEY,'Content-Type':'application/json'},body:JSON.stringify(body)});
  if(!response.ok)throw new Error('Email provider rejected request: '+response.status);
}
export default {async fetch(request,env){
  const origin=request.headers.get('Origin')||'';
  if(request.method==='OPTIONS'){
    if(origin!==ORIGIN)return new Response(null,{status:403});
    return new Response(null,{status:204,headers:{'access-control-allow-origin':ORIGIN,'access-control-allow-methods':'POST, OPTIONS','access-control-allow-headers':'content-type','access-control-max-age':'86400','vary':'Origin'}});
  }
  if(request.method!=='POST')return json({ok:false,error:'Method not allowed'},405);
  if(origin!==ORIGIN)return json({ok:false,error:'Origin not allowed'},403);
  if(!env.RESEND_API_KEY||!env.FROM_EMAIL)return json({ok:false,error:'Service not configured'},503);
  const size=Number(request.headers.get('content-length')||0);
  if(size>12000)return json({ok:false,error:'Request too large'},413);
  let input;try{input=await request.json()}catch{return json({ok:false,error:'Invalid JSON'},400)}
  if(input.website_confirm)return json({ok:true}); // honeypot
  const name=safe(input.name,120),email=safe(input.email,200),work=safe(input.work,180),region=safe(input.region,120),website=safe(input.website,250),type=safe(input.type,100),message=safe(input.message,3000);
  if(!name||!work||!message||!input.privacy||!/^\S+@\S+\.\S+$/.test(email))return json({ok:false,error:'Bitte Pflichtfelder prüfen.'},400);
  const lines=[['Name',name],['E-Mail',email],['Tätigkeit',work],['Region',region],['Website',website],['Interesse',type],['Nachricht',message]];
  const html='<h2>Neue ICS Partneranfrage</h2>'+lines.map(([key,val])=>'<p><strong>'+esc(key)+':</strong><br>'+esc(val).replace(/\n/g,'<br>')+'</p>').join('');
  try{
    await send(env,env.TO_EMAIL||'info@innercodesystems.com','ICS Partneranfrage: '+name,html,email);
  }catch(e){console.error('Partner notification failed',String(e));return json({ok:false,error:'Die Anfrage konnte nicht versendet werden. Bitte per E-Mail Kontakt aufnehmen.'},502)}
  try{
    await send(env,email,'Deine Anfrage bei INNER CODE SYSTEMS','<p>Hallo '+esc(name)+',</p><p>vielen Dank für deine Anfrage beim ICS Partnernetzwerk. Deine Nachricht ist eingegangen. Wir melden uns persönlich bei dir.</p><p>Herzliche Grüße<br>INNER CODE SYSTEMS</p>');
  }catch(e){console.error('Partner acknowledgment failed',String(e))}
  return json({ok:true,message:'Deine Anfrage wurde versendet.'});
}};
