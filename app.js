'use strict';

// Urutan katalog mengikuti nomor file kiriman: hitam1/putih1 sampai hitam12/putih12.
// Urutan images: mockup hitam, mockup putih, talent pria hitam, talent wanita putih.
// Harga standar dalam Rupiah; nilai price pada produk dapat menggantinya.
const catalogPrice = 150000;
const products = [
  {
    "name": "Lucia Caminos",
    "tag": "Character series",
    "description": "Potret Lucia Caminos dalam warna ungu, pink, dan jingga, dipadukan tipografi vertikal dan tulisan Welcome to Vice City.",
    "images": [
      "assets/catalog/01-black.webp",
      "assets/catalog/01-white.webp",
      "assets/catalog/01-talent.webp",
      "assets/catalog/01-talent-white.webp"
    ]
  },
  {
    "name": "Jason Duval",
    "tag": "Character series",
    "description": "Potret Jason Duval dengan perpaduan warna senja, nama vertikal, dan tulisan Welcome to Vice City.",
    "images": [
      "assets/catalog/02-black.webp",
      "assets/catalog/02-white.webp",
      "assets/catalog/02-talent.webp",
      "assets/catalog/02-talent-white.webp"
    ]
  },
  {
    "name": "Jason & Lucia",
    "tag": "Character series",
    "description": "Duo Jason dan Lucia dalam satu desain, dengan tipografi Vice City vertikal dan warna khas senja tropis.",
    "images": [
      "assets/catalog/03-black.webp",
      "assets/catalog/03-white.webp",
      "assets/catalog/03-talent.webp",
      "assets/catalog/03-talent-white.webp"
    ]
  },
  {
    "name": "Welcome to Vice City",
    "tag": "Motorcycle series",
    "description": "Jason dan Lucia dalam adegan pengejaran dengan motor, dipadukan tipografi Welcome to Vice City dan warna ungu, pink, serta jingga.",
    "images": [
      "assets/catalog/04-black.webp",
      "assets/catalog/04-white.webp",
      "assets/catalog/04-talent.webp",
      "assets/catalog/04-talent-white.webp"
    ]
  },
  {
    "name": "GTA VI Tactical Duo",
    "tag": "Character series",
    "description": "Duo karakter bersenjata dengan pose saling membelakangi, dipadukan tulisan Grand Theft Auto dan emblem VI dalam nuansa senja.",
    "images": [
      "assets/catalog/05-black.webp",
      "assets/catalog/05-white.webp",
      "assets/catalog/05-talent.webp",
      "assets/catalog/05-talent-white.webp"
    ]
  },
  {
    "name": "Vice City Maps",
    "tag": "Map series",
    "description": "Kolase delapan pemandangan kota dan pesisir dalam nuansa senja, dilengkapi tulisan Vice City Maps.",
    "images": [
      "assets/catalog/06-black.webp",
      "assets/catalog/06-white.webp",
      "assets/catalog/06-talent.webp",
      "assets/catalog/06-talent-white.webp"
    ]
  },
  {
    "name": "Vice City Script",
    "tag": "City essentials",
    "description": "Tulisan Vice City bergaya script dengan garis gradasi ungu, pink, dan jingga yang menjadi fokus utama desain.",
    "images": [
      "assets/catalog/07-black.webp",
      "assets/catalog/07-white.webp",
      "assets/catalog/07-talent.webp",
      "assets/catalog/07-talent-white.webp"
    ]
  },
  {
    "name": "I Love Vice City",
    "tag": "City essentials",
    "description": "Tipografi I Love Vice City dengan emblem VI dan siluet pohon palem. Tekstur distressed memberi kesan retro.",
    "price": 140000,
    "images": [
      "assets/catalog/08-black.webp",
      "assets/catalog/08-white.webp",
      "assets/catalog/08-talent.webp",
      "assets/catalog/08-talent-white.webp"
    ]
  },
  {
    "name": "It's Time to GTA VI",
    "tag": "Gaming series",
    "description": "Tipografi It's Time to GTA VI, ikon controller, dan garis horizontal dalam gradasi ungu, pink, serta jingga.",
    "price": 140000,
    "images": [
      "assets/catalog/09-black.webp",
      "assets/catalog/09-white.webp",
      "assets/catalog/09-talent.webp",
      "assets/catalog/09-talent-white.webp"
    ]
  },
  {
    "name": "Eat Sleep GTA VI Repeat",
    "tag": "Gaming series",
    "description": "Tulisan Eat Sleep GTA VI Repeat dengan ikon controller, pizza, minuman, dan pohon palem dalam gradasi ungu serta pink.",
    "images": [
      "assets/catalog/10-black.webp",
      "assets/catalog/10-white.webp",
      "assets/catalog/10-talent.webp",
      "assets/catalog/10-talent-white.webp"
    ]
  },
  {
    "name": "Vice City Is Gaming Time",
    "tag": "Gaming series",
    "description": "Buaya pink berotot memegang controller, dihiasi pohon palem dan tulisan Vice City Is Gaming Time.",
    "price": 140000,
    "images": [
      "assets/catalog/11-black.webp",
      "assets/catalog/11-white.webp",
      "assets/catalog/11-talent.webp",
      "assets/catalog/11-talent-white.webp"
    ]
  },
  {
    "name": "13 Years of Waiting",
    "tag": "For the fans",
    "description": "Buaya pink dengan aksen api biru dan tulisan 13 Years of Waiting for This Damn Game, untuk penggemar yang setia menunggu.",
    "price": 140000,
    "images": [
      "assets/catalog/12-black.webp",
      "assets/catalog/12-white.webp",
      "assets/catalog/12-talent.webp",
      "assets/catalog/12-talent-white.webp"
    ]
  }
].map((p,i)=>({...p,images:p.images.map(src=>`${src}?v=20261106-order`),price:p.price??catalogPrice,id:i,code:`GTAVI—${String(i+1).padStart(3,'0')}`}));
const views=[
 {name:'Mockup hitam',className:'black'},
 {name:'Mockup putih',className:'white'},
 {name:'Talent pria',className:'talent talent-black'},
 {name:'Talent wanita',className:'talent talent-white'}
];
const formatPrice=value=>`Rp. ${value.toLocaleString('id-ID')}`;
// wa.me membutuhkan nomor internasional tanpa tanda + atau angka 0 awal.
const whatsappNumber='6285834268131';
const orderMessage=product=>`Halo, Rei!
Saya sudah melihat katalog kaos di website dan tertarik untuk melakukan *Pre-Order (PO)* dengan detail pesanan berikut:
*Nomor Katalog:* ${String(product.id+1).padStart(2,'0')}
*Nama Katalog:* ${product.name}
*Jumlah Pesanan:* [Jumlah] pcs
*Ukuran:* [Ukuran]
Mohon informasi mengenai proses pemesanan dan pembayarannya. Terima kasih!`;
const orderUrl=product=>`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage(product))}`;
const frames=products.map(()=>0);
const grid=document.querySelector('#product-grid');
const dialog=document.querySelector('#preview');
const search=document.querySelector('#search');
let activeProduct=0;
let activeFrame=0;
let returnFocus=null;
const chevron=(right=false)=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${right?'m10 6 6 6-6 6':'m14 6-6 6 6 6'}"/></svg>`;
const expand='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/></svg>';
const chatIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.1-4.8A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8 8.5h8M8 12h6"/></svg>';
const photoMarkup=(product,frame,lazy=true)=>{
 const v=views[frame];
 return `<img class="base" src="${product.images[frame]}" alt="${product.name} — ${v.name}" ${lazy?'loading="lazy"':''} decoding="async" draggable="false">`;
};

function buildCatalog(){
 grid.innerHTML=products.map(p=>`<article class="product-card" data-id="${p.id}">
  <div class="product-gallery" data-gallery="${p.id}">
   <div class="photo black" data-card-photo="${p.id}" role="button" tabindex="0" aria-label="Buka preview ${p.name}">${photoMarkup(p,0)}</div>
   <span class="product-number">${String(p.id+1).padStart(2,'0')} / ${products.length}</span>
   <button class="expand-button" data-open="${p.id}" aria-label="Perbesar ${p.name}">${expand}</button>
   <button class="slide-arrow prev" data-slide="${p.id}" data-direction="-1" aria-label="Tampilan sebelumnya untuk ${p.name}">${chevron()}</button>
   <button class="slide-arrow next" data-slide="${p.id}" data-direction="1" aria-label="Tampilan berikutnya untuk ${p.name}">${chevron(true)}</button>
   <div class="gallery-bottom"><span class="gallery-label" data-card-label="${p.id}">Mockup hitam</span><div class="slide-dots" role="group" aria-label="Pilih tampilan ${p.name}">${views.map((v,n)=>`<button class="${n===0?'active':''}" data-dot-product="${p.id}" data-frame="${n}" aria-label="${v.name} — ${p.name}" aria-pressed="${n===0}"></button>`).join('')}</div></div>
  </div>
  <div class="product-meta"><p class="product-code">${p.code}</p><div class="product-titleline"><h3 class="product-name"><button data-open="${p.id}">${p.name}</button></h3><p class="product-price">${formatPrice(p.price)}</p></div></div>
  <div class="product-footer"><span>${p.tag}</span><span class="product-colors"><i class="swatch black-swatch"></i><i class="swatch white-swatch"></i><span>Hitam / Putih</span></span></div>
  <button class="add-cart-button" data-add-cart="${p.id}" aria-label="Tambah ${p.name} ke keranjang"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h2l3 12h11l2-9H6M10 20h.01M18 20h.01M12 9h5M14.5 6.5v5"/></svg><span>Tambah ke keranjang</span></button>
  <a class="order-button" href="${orderUrl(p)}" target="_blank" rel="noopener noreferrer" aria-label="Pesan sekarang katalog nomor ${p.id+1}: ${p.name} melalui WhatsApp">${chatIcon}<span>Pesan sekarang</span><span class="order-arrow" aria-hidden="true">↗</span></a>
 </article>`).join('');
 // Give every gallery the same swipe affordance without blocking vertical scroll.
 document.querySelectorAll('[data-gallery]').forEach(el=>attachSwipe(el,direction=>setCardFrame(Number(el.dataset.gallery),frames[el.dataset.gallery]+direction)));
 document.querySelectorAll('[data-card-photo]').forEach(el=>{
  el.setAttribute('aria-label',`Buka preview ${products[el.dataset.cardPhoto].name}`);
  el.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openPreview(Number(el.dataset.cardPhoto),frames[el.dataset.cardPhoto],el);}});
 });
}
function setCardFrame(id,frame){
 frame=(frame+views.length)%views.length;frames[id]=frame;
 const card=document.querySelector(`.product-card[data-id="${id}"]`);
 const photo=card.querySelector('.photo');
 photo.className=`photo ${views[frame].className}`;
 photo.innerHTML=photoMarkup(products[id],frame,false);
 card.querySelector('.gallery-label').textContent=views[frame].name;
 card.querySelectorAll('[data-dot-product]').forEach((el,n)=>{el.classList.toggle('active',n===frame);el.setAttribute('aria-pressed',String(n===frame));});
}
function applySearch(){
 const term=search.value.trim().toLocaleLowerCase('id');let count=0;
 products.forEach(p=>{const match=`${p.name} ${p.code} ${p.tag}`.toLocaleLowerCase('id').includes(term);document.querySelector(`.product-card[data-id="${p.id}"]`).hidden=!match;if(match)count++;});
 document.querySelector('#result-count').textContent=`MENAMPILKAN ${count} DARI ${products.length} DESAIN`;
 document.querySelector('#empty').hidden=count>0;
}
function updatePreview(){
 const feedback=document.querySelector('#modal-cart-feedback');if(feedback)feedback.textContent='';
 const p=products[activeProduct],v=views[activeFrame];
 const photo=document.querySelector('#modal-photo');photo.className=`photo ${v.className}`;
 document.querySelector('#modal-base').src=p.images[activeFrame];
 document.querySelector('#modal-base').alt=`${p.name} — ${v.name}`;
 document.querySelector('#modal-code').textContent=p.code;
 document.querySelector('#modal-price').textContent=formatPrice(p.price);
 const order=document.querySelector('#modal-order');
 order.href=orderUrl(p);
 order.setAttribute('aria-label',`Pesan sekarang katalog nomor ${p.id+1}: ${p.name} melalui WhatsApp`);
 document.querySelector('#preview-title').textContent=p.name;
 document.querySelector('#modal-description').textContent=p.description;
 document.querySelector('#modal-view-label').textContent=v.name.toUpperCase();
 document.querySelector('#modal-frame-count').textContent=`${String(activeFrame+1).padStart(2,'0')} / ${String(views.length).padStart(2,'0')}`;
 document.querySelector('#modal-view-count').textContent=`${activeFrame+1} dari ${views.length}`;
 document.querySelector('#modal-product-count').textContent=`DESAIN ${String(activeProduct+1).padStart(2,'0')} DARI ${products.length}`;
 document.querySelector('#thumbnails').innerHTML=views.map((view,i)=>`<button class="thumbnail ${i===activeFrame?'active':''}" data-modal-frame="${i}" aria-label="Lihat ${view.name}" aria-pressed="${i===activeFrame}"><span class="photo ${view.className}">${photoMarkup(p,i,false)}</span>${view.name}</button>`).join('');
 document.querySelector('#preview-status').textContent=`${p.name}, ${v.name}, tampilan ${activeFrame+1} dari ${views.length}`;
}
function syncModalScroll(){document.body.classList.toggle('modal-open',!!document.querySelector('dialog[open]'));}
function openPreview(id,frame=0,trigger=null){
 activeProduct=id;activeFrame=frame;returnFocus=trigger||document.activeElement;updatePreview();
 if(!dialog.open){dialog.showModal();document.body.classList.add('modal-open');}
}
function slideModal(direction){activeFrame=(activeFrame+direction+views.length)%views.length;updatePreview();}
function changeProduct(direction){activeProduct=(activeProduct+direction+products.length)%products.length;activeFrame=0;updatePreview();}
let lastSwipeAt=0;
function attachSwipe(el,onSwipe){
 let start=null;
 el.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;start={x:e.clientX,y:e.clientY,id:e.pointerId};});
 el.addEventListener('pointerup',e=>{
  if(!start||start.id!==e.pointerId)return;
  const dx=e.clientX-start.x,dy=e.clientY-start.y;start=null;
  if(Math.abs(dx)>42&&Math.abs(dx)>Math.abs(dy)*1.35){lastSwipeAt=Date.now();onSwipe(dx<0?1:-1);}
 });
 el.addEventListener('pointercancel',()=>{start=null;});
 el.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')start=null;});
}
document.addEventListener('click',e=>{
 const open=e.target.closest('[data-open]');
 if(open){const id=Number(open.dataset.open);openPreview(id,frames[id],open);return;}
 const slide=e.target.closest('[data-slide]');
 if(slide){const id=Number(slide.dataset.slide);setCardFrame(id,frames[id]+Number(slide.dataset.direction));return;}
 const dot=e.target.closest('[data-dot-product]');if(dot){setCardFrame(Number(dot.dataset.dotProduct),Number(dot.dataset.frame));return;}
 const view=e.target.closest('[data-view]');if(view){const frame=Number(view.dataset.view);products.forEach(p=>setCardFrame(p.id,frame));document.querySelectorAll('[data-view]').forEach(el=>{const isActive=el===view;el.classList.toggle('active',isActive);el.setAttribute('aria-pressed',String(isActive));});return;}
 const thumb=e.target.closest('[data-modal-frame]');if(thumb){activeFrame=Number(thumb.dataset.modalFrame);updatePreview();document.querySelector(`[data-modal-frame="${activeFrame}"]`).focus({preventScroll:true});return;}
 const photo=e.target.closest('[data-card-photo]');if(photo&&Date.now()-lastSwipeAt>350){const id=Number(photo.dataset.cardPhoto);openPreview(id,frames[id],photo);}
});
document.querySelector('#close-preview').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{syncModalScroll();returnFocus?.focus({preventScroll:true});});
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();slideModal(-1);}if(e.key==='ArrowRight'){e.preventDefault();slideModal(1);}});
document.querySelector('#modal-prev').addEventListener('click',()=>slideModal(-1));
document.querySelector('#modal-next').addEventListener('click',()=>slideModal(1));
document.querySelector('#prev-product').addEventListener('click',()=>changeProduct(-1));
document.querySelector('#next-product').addEventListener('click',()=>changeProduct(1));
search.addEventListener('input',applySearch);
document.querySelector('#reset-search').addEventListener('click',()=>{search.value='';applySearch();search.focus();});
attachSwipe(document.querySelector('#modal-gallery'),slideModal);
const sizeChartDialog=document.querySelector('#size-chart-preview');
const sizeChartTrigger=document.querySelector('#open-size-chart');
sizeChartTrigger.addEventListener('click',()=>{sizeChartDialog.showModal();document.body.classList.add('modal-open');});
document.querySelector('#close-size-chart').addEventListener('click',()=>sizeChartDialog.close());
sizeChartDialog.addEventListener('close',()=>{syncModalScroll();sizeChartTrigger.focus({preventScroll:true});});
sizeChartDialog.addEventListener('click',e=>{if(e.target===sizeChartDialog){const r=sizeChartDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)sizeChartDialog.close();}});
buildCatalog();
applySearch();
