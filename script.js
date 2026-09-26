document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
document.getElementById('leadForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('success').hidden=false;e.target.reset()});
