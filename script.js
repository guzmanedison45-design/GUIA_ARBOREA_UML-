// Guía botánica: navegación por planta y por secciones tipo presentación.
const plantas = window.PLANTAS || [];
const sceneKeys = ['inicio', 'conocelo', 'cuidados', 'curiosidades', 'ficha'];
const app = document.querySelector('.app');
const scenes = [...document.querySelectorAll('.scene')];
const chapterLinks = [...document.querySelectorAll('.chapters a')];
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const previousPlant = document.querySelector('#previous-plant');
const nextPlant = document.querySelector('#next-plant');
const plantSelect = document.querySelector('#plant-select');
const announcement = document.querySelector('#announcement');
const catalogDialog = document.querySelector('#catalog-dialog');
let plantIndex = Math.max(0, plantas.findIndex(p => p.id === 'mango'));
let sceneIndex = 0;
const $ = id => document.querySelector(id);
const safe = value => value || 'Pendiente de completar';
function cardHTML(items = []) {return items.map(([title, text]) => `<article class="card"><h3>${title}</h3><p>${text}</p></article>`).join('');}
function sourceHTML(items = []) {if (!items.length) return '<li>Agregar fuente local o fotografía del ejemplar cuando se confirme la identificación.</li>'; return items.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener">${label}</a></li>`).join('');}
function currentPlant(){return plantas[plantIndex];}
function setHash(replace = false){const p=currentPlant(); const key=sceneKeys[sceneIndex]; const url=`#${p.id}/${key}`; if (location.hash !== url) (replace ? history.replaceState(null,'',url) : history.pushState(null,'',url));}
function renderPlant(announce = true){const p=currentPlant();
  $('#plant-order').textContent = `Ficha ${String(plantIndex + 1).padStart(2,'0')} de ${String(plantas.length).padStart(2,'0')}`;
  $('#plant-name').textContent = p.nombre;
  $('#plant-scientific').textContent = p.cientifico;
  $('#plant-intro').textContent = p.intro;
  $('#plant-description').textContent = p.descripcion;
  $('#plant-traits').innerHTML = cardHTML(p.rasgos);
  $('#plant-care').innerHTML = cardHTML(p.cuidados);
  $('#plant-facts').innerHTML = cardHTML(p.curiosidades);
  $('#sheet-common').textContent = p.nombre;
  $('#sheet-scientific').textContent = p.cientifico;
  $('#sheet-family').textContent = p.familia;
  $('#sheet-type').textContent = p.tipo;
  $('#sheet-status').textContent = p.estado;
  $('#sheet-note').textContent = p.nota;
  $('#sheet-sources').innerHTML = sourceHTML(p.fuentes);
  $('#qr-link').href = `#${p.id}/inicio`;
  plantSelect.value = p.id;
  const image = $('#plant-image');
  if (p.imagen) { image.src = p.imagen; image.alt = `Imagen de referencia de ${p.nombre}.`; image.style.opacity = ''; }
  else { image.removeAttribute('src'); image.alt = ''; image.style.opacity = '0'; }
  previousPlant.disabled = plantas.length < 2;
  nextPlant.disabled = plantas.length < 2;
  if (announce) announcement.textContent = `${p.nombre}. ${p.cientifico}.`;
}
function showScene(index, announce = true){sceneIndex = Math.max(0, Math.min(scenes.length - 1, index));
  scenes.forEach((scene,i)=>{scene.hidden=i!==sceneIndex; scene.classList.toggle('active',i===sceneIndex);});
  chapterLinks.forEach((link,i)=>{link.href = `#${currentPlant().id}/${sceneKeys[i]}`; i===sceneIndex ? link.setAttribute('aria-current','page') : link.removeAttribute('aria-current');});
  app.dataset.scene = String(sceneIndex);
  previous.disabled = sceneIndex === 0;
  next.disabled = sceneIndex === scenes.length - 1;
  $('#current').textContent = String(sceneIndex + 1).padStart(2,'0');
  document.querySelector('.progress span').style.width = `${((sceneIndex + 1) / scenes.length) * 100}%`;
  if (announce) announcement.textContent = `${currentPlant().nombre}: ${chapterLinks[sceneIndex].textContent}`;
}
function goToPlant(index, replace = false){plantIndex = (index + plantas.length) % plantas.length; renderPlant(); showScene(0, false); setHash(replace);}
function readHash(){const raw = decodeURIComponent(location.hash.replace(/^#/, '')); if(!raw) return null; const [plantId, sceneId] = raw.split('/'); const pIndex = plantas.findIndex(p=>p.id===plantId); const sIndex = sceneKeys.indexOf(sceneId || plantId); return {pIndex, sIndex};}
function applyHash(){const parsed = readHash(); if(!parsed) {renderPlant(false); showScene(0,false); setHash(true); return;} if(parsed.pIndex >= 0) plantIndex = parsed.pIndex; sceneIndex = parsed.sIndex >= 0 ? parsed.sIndex : 0; renderPlant(false); showScene(sceneIndex,false);}
function buildMenus(){plantas.forEach((p,i)=>{const option=document.createElement('option'); option.value=p.id; option.textContent=`${String(i+1).padStart(2,'0')} · ${p.nombre}`; plantSelect.append(option);}); const list=$('#catalog-list'); list.innerHTML = plantas.map((p,i)=>`<li><a href="#${p.id}/inicio" data-catalog-link><strong>${String(i+1).padStart(2,'0')} · ${p.nombre}</strong>${p.pendiente ? '<span class="pending-badge">por confirmar</span>' : ''}<small><em>${p.cientifico}</em> · ${p.familia}</small></a></li>`).join('');}
previous.addEventListener('click',()=>{showScene(sceneIndex-1); setHash();});
next.addEventListener('click',()=>{showScene(sceneIndex+1); setHash();});
previousPlant.addEventListener('click',()=>goToPlant(plantIndex-1));
nextPlant.addEventListener('click',()=>goToPlant(plantIndex+1));
plantSelect.addEventListener('change',()=>goToPlant(plantas.findIndex(p=>p.id===plantSelect.value)));
document.querySelector('[data-go="1"]').addEventListener('click',()=>{showScene(1); setHash();});
chapterLinks.forEach((link,i)=>link.addEventListener('click',e=>{e.preventDefault(); showScene(i); setHash();}));
$('#open-catalog').addEventListener('click',()=>catalogDialog.showModal());
$('#catalog-list').addEventListener('click',e=>{if(e.target.closest('[data-catalog-link]')) catalogDialog.close();});
window.addEventListener('hashchange',applyHash);
window.addEventListener('keydown',event=>{if(event.key==='ArrowRight') next.click(); if(event.key==='ArrowLeft') previous.click(); if(event.key==='ArrowDown') nextPlant.click(); if(event.key==='ArrowUp') previousPlant.click();});
let touchStartX=0; window.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].clientX},{passive:true}); window.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchStartX; if(Math.abs(dx)>60) (dx<0?next:previous).click();},{passive:true});
buildMenus(); applyHash();
