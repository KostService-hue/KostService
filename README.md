# KostService Website — V2

Website landing page KostService berdasarkan konsep layanan pada desain referensi.

## Isi website
- Beranda dengan hero banner dan tombol pesan.
- Katalog lima produk: Kost Cleaning, Kost Laundry, Kost Delivery, Kost Repair, dan Kost Care.
- Bagian keunggulan layanan.
- Tentang KostService.
- Testimoni.
- Informasi harga promo mulai Rp25.000 (sesuai konsep desain; konfirmasi harga aktual dengan admin).
- Kontak WhatsApp.
- Form pemesanan yang menyusun detail pesanan lalu membuka WhatsApp.
- Navigasi responsif untuk ponsel dan desktop.

## File
- `index.html` — struktur halaman.
- `style.css` — tampilan dan responsivitas.
- `script.js` — interaksi dan integrasi link WhatsApp.

## Menjalankan lokal
Buka `index.html` di browser. Untuk pengalaman pengembangan yang lebih nyaman, gunakan VS Code + ekstensi Live Server.

## Mengunggah ke GitHub Pages
1. Buat repository baru bernama `kostservice`.
2. Upload ketiga file (`index.html`, `style.css`, `script.js`) ke root repository.
3. Buka Settings → Pages.
4. Pilih Deploy from a branch.
5. Pilih branch `main`, folder `/ (root)`, lalu Save.
6. Tunggu proses deployment selesai dan buka URL GitHub Pages yang diberikan.

## Hal yang perlu disesuaikan sebelum dipublikasikan
- Nomor WhatsApp di `script.js`, pada variabel `WHATSAPP_NUMBER`.
  Saat ini diisi dari nomor yang terlihat pada gambar referensi: `6282114933545`.
- Ganti foto contoh dengan foto layanan dan tim KostService sendiri jika sudah tersedia.
- Pastikan harga, area layanan, jam operasional, dan ketentuan pemesanan sesuai kondisi bisnis sebenarnya.
- Testimoni pada halaman adalah contoh teks desain. Ganti dengan testimoni pelanggan asli setelah mendapat izin.
- Tambahkan tautan akun media sosial resmi pada bagian footer.

## Catatan
Website ini adalah frontend statis. Form pemesanan meneruskan data melalui WhatsApp, tidak menyimpan pesanan ke database. Foto dan Google Fonts menggunakan sumber online sehingga memerlukan internet.
