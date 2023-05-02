---
sidebar_position: 5
docId: "configuration"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/configuration.md
---

# Pengaturan

Ketika badaso sudah berhasil terinstal, kamu akan menemukan file konfigurasi pada `config/badaso.php` dan `.env`. Pada file ini nanti kamu akan menemukan banyak opsi untuk mengubah konfigurasi dari instalasi Badaso kamu.

## Back Up

Pengaturan backup dapat diubah pada file `.env`.

### AWS S3

```md title=".env"
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=
AWS_URL=
```

- `AWS_ACCESS_KEY_ID`: Isi untuk menggunakan fitur backup ke AWS S3.
- `AWS_SECRET_ACCESS_KEY`: Isi untuk menggunakan fitur backup ke AWS S3.
- `AWS_DEFAULT_REGION`: Region bucket S3 untuk mengunggah file backup.
- `AWS_BUCKET`: Nama bucket S3 untuk mengunggah file backup.
- `AWS_URL`: URL bucket AWS S3.

### Google Drive

```md title=".env"
GOOGLE_DRIVE_CLIENT_ID=
GOOGLE_DRIVE_CLIENT_SECRET=
GOOGLE_DRIVE_REFRESH_TOKEN=
GOOGLE_DRIVE_FOLDER_ID=
```

- `GOOGLE_DRIVE_CLIENT_ID`: Isi untuk menggunakan fitur backup ke Google Drive.
- `GOOGLE_DRIVE_CLIENT_SECRET`: Isi untuk menggunakan fitur backup ke Google Drive.
- `GOOGLE_DRIVE_REFRESH_TOKEN`: Isi untuk menggunakan fitur backup ke Google Drive.
- `GOOGLE_DRIVE_FOLDER_ID`: Id folder untuk mengunggah file backup ke dalam folder yang ditentukan.

### Dropbox

```md title=".env"
DROPBOX_AUTH_TOKEN=
```

- `GOOGLE_DRIVE_CLIENT_ID`: Isi untuk menggunakan fitur backup ke Dropbox.

## Hidden Tables

Hidden tables berguna untuk menyembunyikan table pengguna pada halaman CRUD Generator. Hidden tables dapat diatur pada file konfigurasi badaso yaitu `config\badaso-hidden-tables.php`.

```md title="config/badaso-hidden-tables.php"
<?php

return [
    // add the table here
];
```

## Watch Tables

Watch tables berguna untuk membuat seeder CRUD_DATA otomatis pada table. Watch tables dapat diatur pada file konfigurasi badaso yaitu `config\badaso-watch-tables.php`.

```md title="config/badaso-hidden-tables.php"
<?php

return [
    // add the table here
];
```

# Maintenance

## Maintenance with .env
Mode maintenance memudahkan administrator untuk memperbaiki, mengubah, dan menambahkan fitur baru.

```md title=".env"
MIX_BADASO_MAINTENANCE=false
```
- Jika `MIX_BADASO_MAINTENANCE` memiliki nilai `false`, Anda dapat mengubah pengaturan maintenance di menu Configuration.
- Tetapi `MIX_BADASO_MAINTENANCE` memiliki nilai `true`, Anda tidak dapat mengubah menu Configration dan pengaturan maintenance harus `readonly` dan, Anda hanya dapat mengubah di .env.

## Secret-login page
Jika Anda dalam mode maintenance, Anda dapat menggunakan halaman `secret-login` untuk login ke dashboard (khusus untuk administrator)

```md title=".env"
MIX_BADASO_SECRET_LOGIN_PREFIX=badaso-secret-login
```

- `badaso-secret-login` adalah nilai default untuk awalan halaman `secret-login`. Anda dapat mengubah sesuai kebutuhan.

## Whitelist
Whitelist adalah daftar yang memberikan pengecualian untuk masuk dalam mode maintenance. Anda dapat mengubah `config/badaso.php` di daftar putih.

```md title="config/badaso.php"
'whitelist' => [
        'web' => [],
        'badaso' => [
            '/maintenance',
            '/login,
        ],
        ...
    ],
```