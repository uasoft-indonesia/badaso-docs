---
sidebar_position: 3
docId: "installation"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/installation.md
---

# Instalasi

## Pada aplikasi baru (disarankan)

Buat project badaso dengan curl

:::info
Jalankan docker dahulu di sistem anda sebelum menjalankan perintah untuk mode docker (disarankan). Jika kamu tidak mengaktifkan docker, maka badaso akan terinstall dengan tanpa docker.

Pastikan port ini tidak digunakan :8000 :3306 :6379 pada saat penginstall di docker mode.

Badaso menggunakan laravel sail untuk pengaturan docker, pelajari tentang sail [disini](https://laravel.com/docs/9.x/sai
:::

```bash
curl -s "https://badaso-starter.uatech.co.id/your-project-name" | bash
```

Jika kamu menggunakan docker, maka aplikasi kamu akan langsung jalan oleh docker pada `localhost:8000`

Jika kamu tidak menggunakan docker, maka kamu perlu menjalankan migrasi dan seeder pada database.

## Pada aplikasi yang sudah ada

- Kamu dapat menambahkan badaso pada aplikasi laravel kamu dengan perintah berikut ini.

Badaso `v2.x` For Laravel 8 & 9 (disarankan)

```bash
composer require badaso/core
```

Badaso `v1.x` For Laravel 5,6,7

```bash
composer require badaso/core:^1.0
```

Jalankan perintah berikut untuk memperbarui dependensi di package.json, webpack, dan publish vendor provider.

```bash
php artisan badaso:setup
```

## Setup selanjutnya (untuk aplikasi baru atau sudah ada)

Jalankan migrasi database.

```bash
php artisan migrate
```

[opsional] Symlink folder storage jika belum

```bash
php artisan storage:link
```

Untuk Laravel 8 dan proyek yang sudah ada, ubah filesystem driver menjadi `public` (**[readmore for cloud](/core-concept/storage)**)

```bash
FILESYSTEM_DRIVER=public
```

Jalankan composer autoload dan seeder

```bash
composer dump-autoload
```

`v2.x` Untuk Laravel 8 & 9

```bash
php artisan db:seed --class="Database\Seeders\Badaso\BadasoSeeder"
```

`v1.x` Untuk Laravel 5,6,7

```bash
php artisan db:seed --class=BadasoSeeder
```

- Buat akun admin dengan cara mengetikan perintah berikut ini.

```bash
php artisan badaso:admin your@email.com --create
```

- Install javascript depedency

```bash
npm install
npm run dev
```

- Jalankan project laravel dan akses `/badaso-dashboard` di browser untuk mengakses dashboard.

```bash
php artisan serve
```
