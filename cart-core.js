'use strict';
// Logika keranjang dan pesan WhatsApp. Tidak mengirim pesan secara otomatis.
const ReiCart = (() => {
 const sizes=['XS','S','M','L','XL','2XL','3XL','4XL','5XL'];
 const basePriceSizeIndex = sizes.indexOf('XL');
 const surchargePerSize = 8000;
 const rupiah=value=>`Rp. ${value.toLocaleString('id-ID')}`;
 const joinList=values=>values.length<2?values.join(''):values.slice(0,-1).join(', ')+' dan '+values[values.length-1];
 function clean(items,products){
  if(!Array.isArray(items))return [];
  return items.filter(i=>i&&Number.isInteger(i.productId)&&products[i.productId]).slice(0,100).map((i,n)=>({
   key:`item-${n}`,productId:i.productId,color:i.color==='Putih'?'Putih':'Hitam',
   size:sizes.includes(i.size)?i.size:'',qty:Math.min(999,Math.max(1,Math.trunc(Number(i.qty)||1)))
  }));
 }
 function unitPrice(product, size){
  const largerSizeSteps = Math.max(0, sizes.indexOf(size) - basePriceSizeIndex);
  return Number(product.price) + largerSizeSteps * surchargePerSize;
 }
 function totals(items,products){
  return items.reduce((sum, item) => {
   sum.qty += item.qty;
   sum.price += unitPrice(products[item.productId], item.size) * item.qty;
   return sum;
  }, {qty:0,price:0});
 }
 function message(items,products){
  if(!items.length)return '';
  const selected=[...new Set(items.map(i=>i.productId))].map(id=>products[id]);
  const total=totals(items,products);
  const details = items.map((item, index) => {
   const product = products[item.productId];
   const price = unitPrice(product, item.size);
   const catalogNumber = String(item.productId + 1).padStart(2, '0');
   return `${index + 1}. *Katalog ${catalogNumber} — ${product.name}*
Warna: ${item.color} | Ukuran: ${item.size || '[Ukuran]'} | Jumlah: ${item.qty} pcs
Harga satuan: ${rupiah(price)} | Subtotal: ${rupiah(price * item.qty)}`;
  }).join('\n\n');
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
 return {sizes,clean,unitPrice,totals,message};
})();
if(typeof module!=='undefined'&&module.exports)module.exports=ReiCart;
