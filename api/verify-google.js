export default async function handler(req,res){
 if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
 const clientId=process.env.GOOGLE_CLIENT_ID;
 if(!clientId)return res.status(503).json({error:'Google sign in is not configured'});
 const credential=req.body?.credential;
 if(typeof credential!=='string'||credential.length>10000)return res.status(400).json({error:'Invalid credential'});
 try{
  const response=await fetch('https://oauth2.googleapis.com/tokeninfo',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({id_token:credential}),signal:AbortSignal.timeout(7000)});
  if(!response.ok)return res.status(401).json({error:'Google verification failed'});
  const data=await response.json();
  if(data.aud!==clientId||!['accounts.google.com','https://accounts.google.com'].includes(data.iss)||data.email_verified!=='true'||Number(data.exp)*1000<Date.now())return res.status(401).json({error:'Invalid Google account'});
  res.setHeader('Cache-Control','no-store');return res.status(200).json({name:data.name||'',email:data.email||''});
 }catch{return res.status(502).json({error:'Could not reach Google verification'})}
}
