---
docId: "command"
sidebar_position: 8
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/core-concept/command.md
---

# Command

## Membuat Akun Admin

Badaso menyediakan perintah untuk membuat superadmin akun untuk dapat masuk ke halaman dashboard.

```bash
php artisan badaso:admin your@email.com --create
```

## Backup

Badaso menyediakan perintah untuk menjalankan laravel backup. Konfigurasi backup terdapat pada file `.env`. Konfigurasi ini meliputi file yang di backup dan disk backup.

```bash
php artisan badaso:backup
```

## Seeder

Perintah berikut digunakan untuk membuat seeder berdasarkan sebuah tabel beserta datanya.

```bash
php artisan badaso:generate-seeder TABLE_NAME
```
