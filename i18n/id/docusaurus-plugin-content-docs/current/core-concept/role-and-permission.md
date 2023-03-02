---
docId: "rolepermission"
sidebar_position: 3
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/core-concept/role-and-permission.md
---

# User, Role And Permission

## CRUD Generated

Setiap CRUD dibuat menggunakan CRUD generator, kamu dapat menentukan apakah ingin generate permission atau tidak. Jika generate permission, maka akan di generate 5 permission secara otomatis dengan format sebagai berikut.

- browse\_{{ TABLE_NAME }}
- read\_{{ TABLE_NAME }}
- edit\_{{ TABLE_NAME }}
- add\_{{ TABLE_NAME }}
- delete\_{{ TABLE_NAME }}

For example:

- browse_posts
- read_posts
- edit_posts
- add_posts
- delete_posts

Setiap permission yang di-generate akan otomatis di assign ke role administrator, jadi user yang masuk dengan role administrator akan langsung memiliki permission tersebut.

## Manajemen User

Berikut merupakan tampilan manajemen user. Pada fitur ini user yang telah login dapat melihat, mengubah, menambah dan menghapus informasi user beserta menentukan role untuk user tersebut.

![Docusaurus logo](/img/user-management.png)

## Manajemen Role

Tampilan berikut merupakan tampilan fitur manajemen role, fitur ini yang berfungsi untuk menentukan role apa saja yang akan digunakan pada sistem, secara default hanya ada 1 yaitu Administrator.

![Docusaurus logo](/img/role-management.png)

## Manajemen Permission

Manajemen permission merupakan fitur untuk mengelola permission atau CRUD permission. Berikut merupakan tampilan dari manajemen permission.

![Docusaurus logo](/img/permission-management.png)

Terdapat 2 jenis permission helper di badaso, yaitu :

1. Permission untuk Generated CRUD

   Permission ini digunakan untuk memvalidasi user untuk mengakses fitur dalam ruang lingkup CRUD yang dibuat secara otomatis.

   - `isAllowedToModifyGeneratedCRUD('browse', dataType)` :

     Apakah user dapat menelusuri daftar generated CRUD atau tidak.

   - `isAllowedToModifyGeneratedCRUD('add', dataType)` :

     Apakah user dapat menambahkan generated CRUD atau tidak.

   - `isAllowedToModifyGeneratedCRUD('edit', dataType)` :

     Apakah user dapat mengubah pengaturan generated CRUD atau tidak.

   - `isAllowedToModifyGeneratedCRUD('delete', dataType)` :

     Apakah user dapat menghapus generated CRUD atau tidak.

   - `isAllowedToModifyGeneratedCRUD('maintenance', dataType)` :

     Apakah user dapat mengubah status generated CRUD menjadi 'maintenance' atau tidak.

   - `isAllowedToModifyGeneratedCRUD('read', dataType)` :

     Apakah user dapat melihat generated CRUD atau tidak.

   ### Contoh

   Sebagai contoh, kamu akan membuat sebuah komponen untuk menambah data menggunakan `badaso-dropdown-item` untuk **CRUD Management yang dibuat dengan cara kustom** yang akan membawa user untuk menambahkan CRUD pada sebuah tabel, tetapi kamu ingin membatasi hak akses untuk hal itu kepada beberapa user. Coba tambahkan kode berikut ke dalam komponen-mu :

   ```bash title="browse.vue"
   <badaso-dropdown-item
       icon="add"
       :to="{ name: 'CrudGeneratedAdd' }"
       v-if="isCanAdd && $helper.isAllowedToModifyGeneratedCRUD('add', dataType)"
   >
   ```

   Bagaimana jika kamu ingin membuat permission untuk **CRUD Management yang dibuat dengan cara kustom** dengan nama file `edit.vue`? Coba tambahkan kode berikut ke dalam komponen-mu :

   ```bash title="edit.vue"
   <template>
       <div>
           <badaso-breadcrumb-row></badaso-breadcrumb-row>
           <vs-row v-if="$helper.isAllowedToModifyGeneratedCRUD('edit', dataType)">
               // your code
           </vs-row>
       </div>
   <template>
   ```

2. Permission untuk fitur kustom

   Permission ini berhubungan dengan hak akses user utk mengakses fitur sebuah halaman yang dibuat sendiri secara custom dan izin untuk membuat, membaca, mengubah, dan menghapus data di halaman tersebut.

   - `isAllowed('browse_crud_data')`

     Apakah user dapat menelusuri data dari .

   - `isAllowed('delete_crud_data')`

     Whether or not the user may delete some data from a page menu section.

   - `isAllowed('add_crud_data')`

     Whether or not the user may add a new data from a page menu section.

   - `isAllowed('edit_crud_data')`

     Whether or not the user may edit a data from a page menu section.

   - `isAllowed('read_crud_data')`

     Whether or not the user may view or see a data from a page menu section.

   ### Contoh

   Sebagai contoh, kamu akan membuat pesan broadcast dengan komponen `badaso-dropdown-item` yang digunakan untuk **broadcast** sesuatu dari `browse.vue`, tetapi kamu ingin membadasi hak akses kepada beberapa user. Cukup tambahkan kode ini ke komponen-mu :

   ```bash title="browse.vue"
    <badaso-dropdown-item
        icon="edit"
        v-if="$helper.isAllowed('broadcast')"
        :to="{
        name: 'CrudManagementEdit',
        params: { tableName: data[index].tableName },
        }"
    >
   ```

   Bagaimana jika kamu ingin membuat permission untuk **broadcast** mu yang diberi nama `broadcast.vue`? Cukup tambahkan kode dibawah ini :

   ```bash title="edit.vue"
   <template>
       <div>
           <badaso-breadcrumb-row></badaso-breadcrumb-row>
           <vs-row v-if="$helper.isAllowed('broadcast')">
               // your code
           </vs-row>
       </div>
   <template>
   ```

3. Permission untuk pengguna hanya dapat melihat data yang dibuat dengan sendirinya

  Fitur ini berguna untuk mengamankan data masing-masing pengguna, pengguna hanya dapat melihat data yang mereka buat tanpa sepengetahuan pengguna lain. Secara default, fitur ini memungkinkan pengguna hanya melihat data mereka, kecuali administrator.

  - Peran dapat melihat semua data

    Role can see all data adalah opsi untuk melihat semua data. Nilai default adalah administrator. Peran yang tidak dipilih dalam menu ini hanya dapat melihat datanya sendiri.

  - Kolom untuk mengidentifikasi data terkait pengguna

    Kolom untuk mengidentifikasi data terkait pengguna adalah bidang yang memiliki hubungan dengan id pengguna pengguna. Input ini berguna untuk memisahkan data menurut pengguna yang membuatnya. nilai defaultnya adalah "user_id", jika tidak ada kolom "user_id" di tabel, pengguna dapat memilih kolom yang memiliki fungsi yang sama dengan kolom "user_id", jika kolom tersebut tidak ditemukan di tabel, semua pengguna data ditampilkan.

  ### Contoh
  Misalnya, pengguna membuat tabel buku di mana setiap entri buku tidak dapat dilihat oleh pengguna lain. Untuk menggunakan fitur tersebut, dapat mengikuti langkah-langkah di bawah ini:
  - Buat tabel books dengan database management.
  - User harus membuat column identifier untuk mengenali user yang melakukan entri data. secara default badaso menggunakan user_id dan simpan.
  - Gunakan CRUD management untuk membuat CRUD, pada column identifier gunakan Input Type "data identifier". 
  - Sebelum menyetel "pengguna hanya dapat melihat data yang dibuat sendiri", harus menambahkan "books" ke peran yang ingin diberi akses kontrol. 
  - Buka menu permission management, cari "browse_books" yang akan diubah lalu pilih edit.
  ![Browse Permissionp Data Itself](/img/browse-permissionp-data-itself.png)
  - Pada input "Role can see all data", pilih role yang bisa melihat semua data.
  - Pada input "Column for identify user related data", pilih bidang yang menjadi bidang identifikasi yang terkait dengan id pengguna.
  ![Edit Permission Data Itself](/img/edit-permission-data-itself.png)
  - Untuk membuat CRUD dengan fitur ini, user_id atau semacamnya harus menggunakan input data "data identifier".
  ![Data identifier](/img/data-identifier.png)

## Manajemen User Role

Setiap user dapat memiliki minimal 1 atau lebih role. Berikut merupakan tampilan dari manajemen role untuk user.

![Docusaurus logo](/img/user-role-management.png)

## Role Permission Management

Setiap wewenang memiliki permission. Berikut merupakan tampilan dari manajemen role permission.

![Docusaurus logo](/img/role-permission-management.png)
