# Panduan katalog PO KAOS GTA VI FAN-MADE

Website ini memakai HTML, CSS, dan JavaScript biasa. Semua gambar serta font tersedia di dalam paket; tidak perlu instalasi atau koneksi internet untuk membukanya. Pemesanan melalui WhatsApp memerlukan koneksi internet.

## Cara membuka

1. Ekstrak seluruh isi ZIP ke satu folder.
2. Buka `index.html` dengan Chrome, Edge, atau Firefox. Jangan membuka HTML langsung dari dalam ZIP.
3. Gunakan tombol panah atau geser gambar untuk melihat mockup hitam, mockup putih, talent pria berkaos hitam, dan talent wanita berkaos putih.
4. Klik gambar untuk membuka preview besar. Tombol keyboard kiri/kanan mengganti tampilan; Esc menutup preview.
5. Cek size chart pada gambar utama, lalu klik **Pesan sekarang** pada katalog yang diinginkan untuk membuka WhatsApp dengan pesan terisi sesuai nomor katalog.

## Susunan 12 katalog

Urutan mengikuti angka pada nama file kiriman, bukan urutan tampil di dalam ZIP.

| No. | Nama katalog | Sumber hitam | Sumber putih | Talent pria hitam | Talent wanita putih |
| --- | --- | --- | --- | --- | --- |
| 01 | Lucia Caminos | `hitam1.png` | `putih1.png` | `01-talent.webp` | `01-talent-white.webp` |
| 02 | Jason Duval | `hitam2.png` | `putih2.png` | `02-talent.webp` | `02-talent-white.webp` |
| 03 | Jason & Lucia | `hitam3.png` | `putih3.png` | `03-talent.webp` | `03-talent-white.webp` |
| 04 | Vice City Script | `hitam4.png` | `putih4.png` | `04-talent.webp` | `04-talent-white.webp` |
| 05 | Vice City Maps | `hitam5.png` | `putih5.png` | `05-talent.webp` | `05-talent-white.webp` |
| 06 | I Love Vice City | `hitam6.png` | `putih6.png` | `06-talent.webp` | `06-talent-white.webp` |
| 07 | Vice City Leonida | `hitam7.png` | `putih7.png` | `07-talent.webp` | `07-talent-white.webp` |
| 08 | Greetings from Vice City | `hitam8.png` | `putih8.png` | `08-talent.webp` | `08-talent-white.webp` |
| 09 | Vice City Alligator | `hitam9.png` | `putih9.png` | `09-talent.webp` | `09-talent-white.webp` |
| 10 | 13 Years of Waiting | `hitam10.png` | `putih10.png` | `10-talent.webp` | `10-talent-white.webp` |
| 11 | GTA VI Collage | `hitam11.png` | `putih11.png` | `11-talent.webp` | `11-talent-white.webp` |
| 12 | GTA VI Logo | `hitam12.png` | `putih12.png` | `12-talent.webp` | `12-talent-white.webp` |

Mockup hitam dan putih menggunakan gambar kiriman yang dioptimalkan menjadi WebP untuk website. Talent pria memakai desain dari mockup hitam pada foto `talent.png`. Talent wanita berambut diikat memakai desain dari mockup putih masing-masing, dengan ukuran cetak disesuaikan terhadap talent pria pasangannya. Desain nomor 06 menggunakan file `hitam6.png` dan `putih6.png` revisi terbaru.

## File yang dapat diedit

| File atau folder | Isi |
| --- | --- |
| `index.html` | Judul, teks pembuka, navigasi, dan footer. |
| `styles.css` | Warna, font, ukuran, jarak, serta tampilan desktop dan HP. |
| `app.js` | Data 12 katalog, nama, deskripsi, gambar, slider, pencarian, dan preview. |
| `assets/catalog/` | 48 gambar katalog: 12 mockup hitam, 12 mockup putih, 12 talent pria, dan 12 talent wanita. |
| `assets/` | Size chart, font lokal, favicon, logo Rei Production, dan SVG kelapa animasi. |

## Mengubah nama dan deskripsi

Buka folder ini di Visual Studio Code, lalu edit bagian `const products = [` dalam `app.js`:

- `name`: nama katalog.
- `tag`: label singkat di bawah kartu.
- `description`: deskripsi pada preview besar.
- `images`: urutan mockup hitam, mockup putih, talent pria hitam, dan talent wanita putih.

Setelah menyimpan dengan Ctrl+S, refresh browser dengan Ctrl+R.

## Mengganti gambar

Setiap katalog memakai empat file di `assets/catalog/`. Contoh nomor 01:

```javascript
images: [
  'assets/catalog/01-black.webp',
  'assets/catalog/01-white.webp',
  'assets/catalog/01-talent.webp',
  'assets/catalog/01-talent-white.webp'
]
```

Ganti keempat file tersebut dengan nama yang sama, atau perbarui alamatnya dalam `app.js`. JPG dan PNG juga dapat dipakai; tulis ekstensi yang sesuai. Pertahankan urutan mockup hitam, mockup putih, talent pria hitam, dan talent wanita putih. Jumlah slide dan penghitung preview mengikuti daftar `views` pada `app.js`.

Gambar utama website memakai size chart kiriman pada `assets/size-chart.png`. Klik gambar untuk memperbesar; tersedia tautan gambar ukuran penuh. Untuk mengganti size chart, ganti file tersebut atau perbarui alamat gambarnya pada `index.html`.

## Mengubah warna website

Buka bagian `:root` pada awal `styles.css` untuk mengubah `--paper`, `--ink`, `--pink`, `--purple`, atau `--accent`.

Pertahankan `index.html`, `styles.css`, `app.js`, dan folder `assets` dalam satu folder agar semua alamat file tetap bekerja. Paket ini dapat dibuka langsung di komputer atau diunggah ke hosting statis.

## Acuan simulasi talent

Talent pria dan wanita masing-masing menggunakan model serta latar yang konsisten untuk 12 desain. Talent wanita memiliki rambut diikat dan memakai kaos putih. Desain talent pria mengikuti mockup hitam, sementara desain talent wanita mengikuti mockup putih.

Prompt acuan simulasi talent wanita: “Ganti hanya desain cetak pada kaos putih dengan desain pada mockup putih nomor terkait. Pertahankan ilustrasi, warna, tulisan, susunan, dan rasio desain. Sesuaikan dengan posisi dada dan lipatan kain. Pertahankan wajah, rambut diikat, postur, tangan, celana, latar, pencahayaan, dan framing model wanita.”

File talent pria: `assets/catalog/01-talent.webp` sampai `12-talent.webp`. File talent wanita: `assets/catalog/01-talent-white.webp` sampai `12-talent-white.webp`.

## Mengubah harga

Harga standar **Rp. 150.000** ditampilkan di sisi kanan informasi setiap kartu katalog dan di preview produk. Katalog **08, 09, 11, dan 12** menggunakan harga **Rp. 140.000**.

Buka `app.js`, lalu ubah `const catalogPrice = 150000;` untuk mengganti harga standar. Harga khusus ditulis pada data produk sebagai `"price": 140000`. Nilai ini berlaku untuk kartu dan preview produk. Hapus baris `price` pada produk jika ingin kembali memakai harga standar.

## Revisi desain nomor 06

Mockup hitam dan putih nomor 06 memakai file PNG revisi terbaru. Emblem serta pohon palem pada versi putih mengikuti bagian putih/ruang kosong pada desain baru. Talent pria nomor 06 dan talent wanita nomor 06 menggunakan desain revisi yang sesuai warna kaosnya. Seluruh talent wanita disesuaikan ukuran cetaknya menggunakan talent pria pasangannya sebagai acuan.

## Tombol Pesan sekarang

Setiap kartu dan preview produk memiliki tombol pemesanan WhatsApp. Nomor tujuan `085834268131` memakai format internasional `6285834268131` dalam tautan `wa.me`. Ubah `const whatsappNumber` pada `app.js` untuk mengganti nomor tujuan.

Teks pesan mengikuti nomor katalog yang dipilih, misalnya katalog nomor 11:

> Halo, Rei! 👋
> Saya sudah melihat katalog kaos di website dan tertarik untuk melakukan *Pre-Order (PO)* dengan detail pesanan berikut:
> 👕 *Nomor Katalog:* 11
> 🏷️ *Nama Katalog:* GTA VI Collage
> 📦 *Jumlah Pesanan:* [Jumlah] pcs
> 📏 *Ukuran:* [Ukuran]
> Mohon informasi mengenai proses pemesanan dan pembayarannya. Terima kasih! 😊

Nomor dan nama katalog otomatis mengikuti produk yang dipilih, termasuk ketika preview berpindah ke produk berikutnya. `[Jumlah]` dan `[Ukuran]` diisi pelanggan setelah WhatsApp terbuka. Ubah fungsi `orderMessage` untuk mengganti kalimat. `encodeURIComponent` menjaga baris baru, emoji, spasi, dan tanda bintang format WhatsApp tetap utuh dalam tautan. WhatsApp menampilkan pesan di kolom chat; pelanggan menekan Kirim untuk mengirimnya.

Jumlah katalog pada kartu, pencarian, dan preview mengikuti `products.length`. Jika menambah desain lagi, tambahkan data produk dan empat gambar yang sesuai, lalu sesuaikan teks jumlah koleksi pada `index.html`.

## Spesifikasi kaos dan warna latar

Saat katalog dibuka, preview semua produk menampilkan empat spesifikasi dengan ikon: **Cotton Combed 24 S**, **Gramasi 180 - 190 gsm**, **Size Lokal**, dan **Unisex**. Edit daftar pada bagian `product-specs` di `index.html` untuk mengubah spesifikasi bersama seluruh katalog. Ikon memakai SVG lokal di dalam HTML.

Latar website mengikuti gradasi kiriman: ungu `#8b5b93`, lavender `#a47bb2`, pink `#c792b9`, pink koral `#e897ac`, dan peach `#fba398`. Warna diatur pada bagian tema gradasi di akhir `styles.css`. Bidang informasi memakai warna terang dengan teks gelap agar mudah dibaca.

## Pohon kelapa dan footer Rei Production

Siluet kelapa ditanam sebagai SVG langsung di `index.html` agar animasi bisa dijalankan oleh CSS halaman, termasuk saat HTML dibuka dari komputer. Salinan elemen juga tersedia pada `assets/palm-silhouette.svg`. Tiap pohon memiliki delapan daun yang berayun berulang tanpa jeda, dengan durasi 14–18 detik per siklus dan gerakan pohon 24–28 detik per siklus. Posisi, ukuran, dan transparansi diatur pada `.palm-tree-right`, `.palm-tree-left`, serta `.palm-tree-small` di akhir `styles.css`. Gerakan diatur oleh `palm-leaf-loop`, `palm-tree-loop`, dan variabel `--leaf-duration` serta `--tree-duration`. Lapisan ini hanya dekorasi dan tidak menghalangi tombol atau gambar katalog. Animasi otomatis berhenti jika pengunjung mengaktifkan pengaturan kurangi gerakan (reduced motion) pada perangkatnya.

Footer memuat logo dari file kiriman pada `assets/rei-production.svg` dan tulisan **© 2026 Rei Production. All Rights Reserved.**. Bidang ungu gelap memenuhi lebar halaman sampai tepi bawah, tanpa sudut membulat atau celah di bawahnya. Tulisan logo sudah menjadi bentuk vektor agar tidak memerlukan instalasi font. Edit bagian `footer-legal` pada `index.html` untuk mengganti teksnya; konten di dalamnya berada pada `footer-legal-inner`.

## Keterbacaan teks

Teks kecil memakai ukuran minimal 12 px. Nama katalog, harga, deskripsi, spesifikasi, thumbnail, kode produk, petunjuk, dan footer diperbesar sesuai perannya. Penyesuaian jarak pada ponsel menjaga teks tetap terbaca. Aturan tambahan berada pada bagian keterbacaan dan footer di akhir `styles.css`.
