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

1. Generated CRUD Permission

    Permission ini digunakan untuk memvalidasi user untuk mengakses fitur dalam ruang lingkup CRUD yang dibuat secara otomatis.

    ```bash
    isAllowedToModifyGeneratedCRUD('browse', dataType)
    isAllowedToModifyGeneratedCRUD('add', dataType)
    isAllowedToModifyGeneratedCRUD('edit', dataType)
    isAllowedToModifyGeneratedCRUD('delete', dataType)
    isAllowedToModifyGeneratedCRUD('maintenance', dataType)
    isAllowedToModifyGeneratedCRUD('read', dataType)
    ```

2. CRUD Permission

    Permission ini berhubungan dengan hak akses user utk mengakses fitur sebuah halaman yang dibuat sendiri secara custom dan izin untuk membuat, membaca, mengubah, dan menghapus data di halaman tersebut.

    ```bash
    isAllowed('browse_crud_data')
    isAllowed('delete_crud_data')
    isAllowed('add_crud_data')
    isAllowed('edit_crud_data')
    isAllowed('read_crud_data')
    ```

## Manajemen User Role

Setiap user dapat memiliki minimal 1 atau lebih role. Berikut merupakan tampilan dari manajemen role untuk user.

![Docusaurus logo](/img/user-role-management.png)

## Role Permission Management

Setiap wewenang memiliki permission. Berikut merupakan tampilan dari manajemen role permission.

![Docusaurus logo](/img/role-permission-management.png)




