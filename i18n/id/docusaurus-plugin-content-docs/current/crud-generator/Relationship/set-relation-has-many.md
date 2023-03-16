---
docId: 'setrelationhasmany'
sidebar_position: 2
---

# Relation Has Many

Badaso menyediakan fitur untuk menggunakan relasi Has Many.Untuk lebih jelasnya mengenai Has Many bisa kunjungi 
[documentation laravel](https://laravel.com/docs/10.x/eloquent-relationships#one-to-one).

## Set Relation Has Many
Untuk menggunakan fitur ini, bisa mengikuti langkah berikut:
- Sebelumnya, menggunakan crud manajement, buat terlebih dahulu table yang akan di generate CRUD. Contohnya tabel "books" dan tabel "categories".

- Buat CRUD management tabel "books", setelah itu buat CRUD management untuk tabel "categories" seperti dibawah ini:

    - Tekan Tombol "set other relation".
        ![Add relation Has Many](/img/Add-relation-has-one.png)

    - Pilih relasi pilihan, tabel tujuan, kolom tujuan, dan kolom tujuan untuk ditampilkan.
        ![Add relation Has Many set options](/img/Add-relation-has-many-set-options.png)

    - Setelah disimpan, akan memiliki baris seperti ini.
        ![after add relation has Many](/img/after-make-relation-has-one.png)

- Simpan dan Simpan CRUD. 

Note: Jika kamu menggunakan model, kamu juga harus menggunakan model pada tabel relasinya.

### Result

![Result has Many](/img/result-has-many.png)
