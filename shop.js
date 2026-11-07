'use strict';
// Keranjang disimpan pada browser pelanggan; tidak memerlukan server.
const cartStorageKey='rei-cart-20261107-v1';
let cart=[];
try{cart=ReiCart.clean(JSON.parse(localStorage.getItem(cartStorageKey)||'[]'),products);}catch{}
let cartKey=Date.now();
const cartDialog=document.querySelector('#cart-dialog');
const cartList=document.querySelector('#cart-items');
const imageViewer=document.querySelector('#image-viewer');
let fullProduct=0,fullFrame=0,fullReturnFocus=null;
const escapeHtml=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function saveCart(){try{localStorage.setItem(cartStorageKey,JSON.stringify(cart));}catch{}}
function renderCart(){
 const total=ReiCart.totals(cart,products);
 document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=total.qty);
 document.querySelector('#cart-empty').hidden=cart.length>0;
 document.querySelector('#floating-cart').hidden=cart.length===0;
 document.querySelector('#floating-total').textContent=formatPrice(total.price);
 document.querySelector('#cart-total').textContent=formatPrice(total.price);
 document.querySelector('#cart-summary').textContent=`${cart.length} pilihan · ${total.qty} pcs`;
 cartList.innerHTML=cart.map(item=>{
  const p=products[item.productId];
  return `<article class="cart-item" data-cart-key="${item.key}"><img src="${p.images[item.color==='Putih'?1:0]}" alt="${escapeHtml(p.name)} — ${item.color}" width="84" height="100"><div class="cart-item-info"><span class="cart-code">Katalog ${String(p.id+1).padStart(2,'0')}</span><h3>${escapeHtml(p.name)}</h3><div class="cart-options"><label>Warna<select data-cart-field="color" aria-label="Warna ${escapeHtml(p.name)}">${['Hitam','Putih'].map(v=>`<option ${v===item.color?'selected':''}>${v}</option>`).join('')}</select></label><label>Ukuran<select data-cart-field="size" aria-label="Ukuran ${escapeHtml(p.name)}"><option value="">Pilih ukuran</option>${ReiCart.sizes.map(v=>`<option ${v===item.size?'selected':''}>${v}</option>`).join('')}</select></label></div><div class="cart-item-bottom"><div class="quantity-control"><button data-cart-step="-1" aria-label="Kurangi jumlah ${escapeHtml(p.name)}" ${item.qty===1?'disabled':''}>−</button><input type="number" min="1" max="999" step="1" inputmode="numeric" value="${item.qty}" data-cart-field="qty" aria-label="Jumlah ${escapeHtml(p.name)}"><button data-cart-step="1" aria-label="Tambah jumlah ${escapeHtml(p.name)}">+</button></div><strong>${formatPrice(p.price*item.qty)}</strong></div><button class="cart-remove" data-cart-remove aria-label="Hapus ${escapeHtml(p.name)} dari keranjang">Hapus</button></div></article>`;
 }).join('');
 const checkout=document.querySelector('#cart-checkout');
 if(cart.length){checkout.href=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(ReiCart.message(cart,products))}`;checkout.removeAttribute('aria-disabled');checkout.removeAttribute('tabindex');}
 else{checkout.removeAttribute('href');checkout.setAttribute('aria-disabled','true');checkout.setAttribute('tabindex','-1');}
}
function addToCart(id,frame=0){
 const color=frame===1||frame===3?'Putih':'Hitam';
 const existing=cart.find(i=>i.productId===id&&i.color===color&&!i.size);
 if(existing)existing.qty=Math.min(999,existing.qty+1);
 else cart.push({key:`item-${++cartKey}`,productId:id,color,size:'',qty:1});
 saveCart();renderCart();
 const text=`${products[id].name} (${color}) ditambahkan ke keranjang.`;
 document.querySelector('#shop-status').textContent=text;
 document.querySelector('#modal-cart-feedback').textContent=text;
 const toast=document.querySelector('#shop-toast');toast.textContent=text;toast.hidden=false;
 clearTimeout(addToCart.toastTimer);addToCart.toastTimer=setTimeout(()=>{toast.hidden=true;},2600);
}
function openCart(){renderCart();if(!cartDialog.open)cartDialog.showModal();syncModalScroll();}
function mergeCart(){
 const merged=[];
 cart.forEach(item=>{const duplicate=merged.find(i=>i.productId===item.productId&&i.color===item.color&&i.size===item.size);if(duplicate)duplicate.qty=Math.min(999,duplicate.qty+item.qty);else merged.push(item);});
 cart=merged;
}
document.addEventListener('click',event=>{
 const add=event.target.closest('[data-add-cart]');
 if(add){const id=Number(add.dataset.addCart);addToCart(id,frames[id]);return;}
 if(event.target.closest('[data-open-cart]')){openCart();return;}
 const row=event.target.closest('[data-cart-key]');
 if(!row)return;
 const item=cart.find(i=>i.key===row.dataset.cartKey);if(!item)return;
 const step=event.target.closest('[data-cart-step]');
 if(step)item.qty=Math.min(999,Math.max(1,item.qty+Number(step.dataset.cartStep)));
 else if(event.target.closest('[data-cart-remove]'))cart=cart.filter(i=>i!==item);
 else return;
 saveCart();renderCart();
});
cartList.addEventListener('change',event=>{
 const field=event.target.dataset.cartField;const row=event.target.closest('[data-cart-key]');
 if(!field||!row)return;
 const item=cart.find(i=>i.key===row.dataset.cartKey);if(!item)return;
 if(field==='qty')item.qty=Math.min(999,Math.max(1,Math.trunc(Number(event.target.value)||1)));
 if(field==='size')item.size=ReiCart.sizes.includes(event.target.value)?event.target.value:'';
 if(field==='color')item.color=event.target.value==='Putih'?'Putih':'Hitam';
 mergeCart();saveCart();renderCart();
});
document.querySelector('#modal-add-cart').addEventListener('click',()=>addToCart(activeProduct,activeFrame));
document.querySelector('#close-cart').addEventListener('click',()=>cartDialog.close());
document.querySelector('#continue-shopping').addEventListener('click',()=>cartDialog.close());
cartDialog.addEventListener('close',syncModalScroll);
cartDialog.addEventListener('click',event=>{if(event.target===cartDialog&&event.clientX<cartDialog.getBoundingClientRect().left)cartDialog.close();});
document.querySelector('#cart-checkout').addEventListener('click',event=>{if(!cart.length)event.preventDefault();});

// Gambar penuh tetap memiliki empat slide, swipe, tombol panah, dan keyboard.
function renderFullImage(){
 const p=products[fullProduct];
 document.querySelector('#full-image').src=p.images[fullFrame];
 document.querySelector('#full-image').alt=`${p.name} — ${views[fullFrame].name}`;
 document.querySelector('#image-viewer-title').textContent=p.name;
 document.querySelector('#full-caption').textContent=`${views[fullFrame].name} · ${fullFrame+1} / ${views.length}`;
 document.querySelector('#full-dots').innerHTML=views.map((v,i)=>`<button data-full-frame="${i}" class="${i===fullFrame?'active':''}" aria-pressed="${i===fullFrame}" aria-label="Gambar penuh: ${v.name}"></button>`).join('');
}
function openFullImage(){
 fullProduct=activeProduct;fullFrame=activeFrame;fullReturnFocus=document.activeElement;
 renderFullImage();imageViewer.showModal();syncModalScroll();
}
function moveFullImage(direction){
 fullFrame=(fullFrame+direction+views.length)%views.length;
 activeFrame=fullFrame;updatePreview();renderFullImage();
}
document.querySelector('#open-full-image').addEventListener('click',openFullImage);
document.querySelector('#modal-photo').addEventListener('click',()=>{if(Date.now()-lastSwipeAt>350)openFullImage();});
document.querySelector('#modal-photo').addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openFullImage();}});
document.querySelector('#full-prev').addEventListener('click',()=>moveFullImage(-1));
document.querySelector('#full-next').addEventListener('click',()=>moveFullImage(1));
document.querySelector('#close-full-image').addEventListener('click',()=>imageViewer.close());
imageViewer.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();moveFullImage(event.key==='ArrowLeft'?-1:1);}});
imageViewer.addEventListener('click',event=>{const dot=event.target.closest('[data-full-frame]');if(dot){fullFrame=Number(dot.dataset.fullFrame);activeFrame=fullFrame;updatePreview();renderFullImage();}});
imageViewer.addEventListener('close',()=>{syncModalScroll();fullReturnFocus?.focus({preventScroll:true});});
attachSwipe(document.querySelector('#full-stage'),moveFullImage);

const themeToggle=document.querySelector('#theme-toggle');
function updateThemeButton(){
 const dark=document.documentElement.dataset.theme==='dark';
 themeToggle.setAttribute('aria-pressed',String(dark));
 themeToggle.setAttribute('aria-label',dark?'Aktifkan mode terang':'Aktifkan mode malam');
 themeToggle.querySelector('.tool-text').textContent=dark?'Mode terang':'Mode malam';
 document.querySelector('meta[name="theme-color"]').content=dark?'#171321':'#8b5b93';
}
themeToggle.addEventListener('click',()=>{
 const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
 document.documentElement.dataset.theme=theme;
 try{localStorage.setItem('rei-theme',theme);}catch{}
 updateThemeButton();
});
updateThemeButton();renderCart();
