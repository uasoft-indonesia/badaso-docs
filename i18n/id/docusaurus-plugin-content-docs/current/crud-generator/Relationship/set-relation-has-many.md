---
docId: 'setrelationhasmany'
sidebar_position: 2
---

# Relation Has Many

Badaso menyediakan fitur untuk menggunakan relasi Has Many.Untuk lebih jelasnya mengenai Has Many bisa kunjungi 
[documentation laravel](https://laravel.com/docs/10.x/eloquent-relationships#one-to-one).

## Set Relation Has Many
Untuk menggunakan fitur ini, bisa mengikuti langkah berikut:
- Sebelumnya, menggunakan crud manajement, buat terlebih dahulu table yang akan di generate CRUD. Contohnya tabel "Buku".

- Buka crud management, dan edit tabel yang sudah dibuat.

    ![Add relation belongs to](/img/Add-relation-belongs-to.png)

- Atur column sesuai dengan yang diiinginkan, pada column yang dijadikan relasi, pilih Input Type "relation", tekan tombol "set relation".

    ![Add relation belongs to set input type](/img/Add-relation-belongs-to-set-input-type.png)

- Pada Formulir, ikuti langkah berikut : 
    - Pada Relation Type pilih "Has Many"
    - Pada Destination Table pilih table relation
    - Pada Destination Column pilih id.
    - Pada Destination Column To Display pilih column to display. contoh nama.
    - More Data For API adalah menu optional yang digunakan untuk menambahkan data yang akan dikembalikan oleh API. 

    ![Add relation belongs to set options](/img/Add-relation-has-many-set-options.png)

- Simpan dan simpan CRUD. 