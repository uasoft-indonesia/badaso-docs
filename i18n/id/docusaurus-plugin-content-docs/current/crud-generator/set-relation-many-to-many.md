---
docId: 'setrelationmanytomany'
---

# Relation Many to Many

Badaso menyediakan fitur untuk menghubungkan data dari suatu tabel ke tabel lainnya. Saat membuat CRUD, pengguna dapat menautkan field dari satu tabel ke tabel lainnya dengan memilih field mana yang akan dihubungkan, jenis ralasi, dan tabel tujuan. jika ingin menggunakan tabel polymorphism atau menggunakan relasi Belongs To Many.

Untuk membuat relasi many to many, harus memiliki minimal dua tabel agar dapat membuat relasi.
Fitur ini memiliki dua opsi:
- Pertama, bisa langsung membuat tabel polymorphism secara otomatis.
- Kedua, dapat membuat tabel polymorphism sendiri.

## Set Relation Many to Many
Untuk menggunakan fitur ini, dapat mengikuti langkah di bawah ini:
- Tekan Tombol "set relation many to many".
![Before add relation many to many](/img/before-create-relation-many-to-many.png)

- Pilih relasi pilihan, tabel tujuan, kolom tujuan, dan kolom tujuan untuk ditampilkan.
![Choice relation](/img/insert-relation-many-to-many.png)

- tetapi, jika  memiliki tabel polymorphism, Anda dapat menggunakannya dengan pengaturan lanjutan fitur dan tabel polymorphism pilihan.
![advanced setting](/img/relation-many-to-many-advanced-setting.png)

- Setelah disimpan, akan memiliki baris seperti ini.
![Before add relation many to many](/img/after-make-relation-many-to-many.png)

- Simpan dan tabel polymorphism berhasil dibuat.
![Browse relation many to many](/img/browse-crud-relation-many-to-many.png)

## Make table polymorphism yourself
Untuk membuat table polymorphism, dapat mengikuti langkah dibawah ini:
- Buka database management, lalu klik tambah.

- Buat nama table.
![Add name table](/img/add-name-table.png)

- Buat dua buah field dengan ketentuan :
    - Nama tabel pertama sama dengan table primary pertama dengan format seperti ini : namatablepertama_id
    - Nama tabel kedua sama dengan table primary kedua dengan format seperti ini : namatablekedua_id
    - Tipe Field "Big Integer"
    - Centang unsigned
    - Pada pilihan "index", pilih "foreign", Klik tombol berwarna biru.

    - Relasi field pertama dengan table primary pertama

    ![Relation first table primary](/img/relation-first-table-primary.png)
    
    - Relasi field kedua dengan table primary kedua

    ![Relation second table primary](/img/relation-second-table-primary.png)
    
    - Nanti akan muncul pop up, pilih table primary.
    - Pada menu "field", pilih "id".
    - Pada menu type, pilih on delete dan on cascade.

- Seluruh field akan terlihat seperti dibawah ini.
![Add field table](/img/add-field-table.png)
    
 - Tekan tombol "accept" dan simpan
