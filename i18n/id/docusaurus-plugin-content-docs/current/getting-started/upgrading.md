---
sidebar_position: 4
docId: "upgrading"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/upgrading.md
---

# Perbarui

## Memperbarui Badaso

:::info
Sebelum mengupdate versi badaso, sebaiknya backup/commit project terlebih dahulu.
:::

- Perbarui badaso ke versi terbaru dengan perintah di bawah ini

```bash
composer update uasoft-indonesia/badaso
```

- Jalankan perintah di bawah ini untuk mengatur proyek ke konfigurasi versi badaso terbaru

```bash
php artisan badaso:setup --force
```

:::info
digunakan untuk menimpa yang file konfigurasi sebelumnya. Jangan gunakan --force jika Anda hanya ingin memublikasikan file yang tidak dipublikasikan.
:::

- Migrasikan database jika tersedia.

:::info
php artisan migrate
:::

- Ulangi seed badaso.

```bash
php artisan db:seed --class=BadasoSeeder
```

- Instal node package baru jika tersedia

```bash
npm install
```
