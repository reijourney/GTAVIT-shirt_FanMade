'use strict';
// Logika keranjang dan pesan WhatsApp. Tidak mengirim pesan secara otomatis.
const ReiCart = (() => {
 const sizes=['XS','S','M','L','XL','2XL','3XL','4XL','5XL'];
 const rupiah=value=>`Rp. ${value.toLocaleString('id-ID')}`;
 const joinList=values=>values.length<2?values.join(''):values.slice(0,-1).join(', ')+' dan '+values[values.length-1];
 function clean(items,products){
  if(!Array.isArray(items))return [];
  return items.filter(i=>i&&Number.isInteger(i.productId)&&products[i.productId]).slice(0,100).map((i,n)=>({
   key:`item-${n}`,productId:i.productId,color:i.color==='Putih'?'Putih':'Hitam',
   size:sizes.includes(i.size)?i.size:'',qty:Math.min(999,Math.max(1,Math.trunc(Number(i.qty)||1)))
  }));
 }
 function totals(items,products){
  return items.reduce((sum,i)=>({qty:sum.qty+i.qty,price:sum.price+products[i.productId].price*i.qty}),{qty:0,price:0});
 }
 function message(items,products){
  if(!items.length)return '';
  const selected=[...new Set(items.map(i=>i.productId))].map(id=>products[id]);
  const total=totals(items,products);
  const details=items.map((i,n)=>`${n+1}. *Katalog ${String(i.productId+1).padStart(2,'0')} — ${products[i.productId].name}*\nWarna: ${i.color} | Ukuran: ${i.size||'[Ukuran]'} | Jumlah: ${i.qty} pcs`).join('\n\n');
  return `Halo, Rei!
Saya sudah melihat katalog kaos di website dan tertarik untuk melakukan *Pre-Order (PO)* dengan detail pesanan berikut:
*Nomor Katalog:* ${joinList(selected.map(p=>String(p.id+1).padStart(2,'0')))}
*Nama Katalog:* ${joinList(selected.map(p=>p.name))}

*Detail pesanan:*
${details}

*Total Jumlah:* ${total.qty} pcs
*Total Harga Kaos:* ${rupiah(total.price)}
Mohon informasi mengenai proses pemesanan dan pembayarannya. Terima kasih!`;
 }
 return {sizes,clean,totals,message};
})();
if(typeof module!=='undefined'&&module.exports)module.exports=ReiCart;
