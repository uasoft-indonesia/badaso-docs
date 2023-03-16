---
docId: 'setrelationhasone'
sidebar_position: 1
---

# Relation Has One

Badaso menyediakan fitur untuk menggunakan relasi Has One.Untuk lebih jelasnya mengenai Has One bisa kunjungi 
[documentation laravel](https://laravel.com/docs/10.x/eloquent-relationships#one-to-one).

## Set Relation Has One
Untuk menggunakan fitur ini, bisa mengikuti langkah berikut:
- Sebelumnya, menggunakan crud manajement, buat terlebih dahulu table yang akan di generate CRUD. Contohnya tabel "books" dan tabel "categories".

- Buat CRUD management tabel "books", setelah itu buat CRUD management untuk tabel "categories" seperti dibawah ini:

    - Tekan Tombol "set other relation".
        ![Add relation Has One](/img/Add-relation-has-one.png)

    - Pilih relasi pilihan, tabel tujuan, kolom tujuan, dan kolom tujuan untuk ditampilkan.
        ![Add relation Has One set options](/img/Add-relation-has-one-set-options.png)

    - Setelah disimpan, akan memiliki baris seperti ini.
        ![after add relation has one](/img/after-make-relation-has-one.png)

- Simpan dan Simpan CRUD. 

Note: Jika kamu menggunakan model, kamu juga harus menggunakan model pada tabel relasinya.

### Result

![Result has Many](/img/result-has-one.png)
