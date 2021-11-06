---
sidebar_position: 4
docId: "installation"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/getting-started/installation.md
---

# Instalasi

## Pada aplikasi baru

- Buat project laravel yang sudah terinstall badaso menggunakan composer

```bash
composer create-project badaso/starter your_project_name
```

## Pada aplikasi yang sudah ada

- Kamu dapat menambahkan badaso pada aplikasi laravel kamu dengan perintah berikut ini.

Badaso `v2.x` For Laravel 8

```bash
composer require badaso/core
```

Badaso `v1.x` For Laravel 5,6,7

```bash
composer require badaso/core:^1.0
```

- Jalankan perintah berikut untuk memperbarui dependensi di package.json, webpack, dan publish vendor provider.

```bash
php artisan badaso:setup
```

## Setup selanjutnya (untuk aplikasi baru atau sudah ada)

- Jalankan migrasi database.

```bash
php artisan migrate
```

- [opsional] Symlink folder storage jika belum

```bash
php artisan storage:link
```

- Untuk Laravel 8 dan proyek yang sudah ada, ubah filesystem driver menjadi `public` (**[readmore for cloud](/core-concept/storage)**)

```bash
FILESYSTEM_DRIVER=public
```

- Jalankan composer autoload dan seeder

```bash
composer dump-autoload
```

`v2.x` Untuk Laravel 8

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
yarn
yarn dev
```

- Jalankan project laravel dan akses `/badaso-dashboard` di browser untuk mengakses dashboard.

```bash
# via local machine
php artisan serve

# or

# via docker (for badaso/starter or you can set your docker on your existing project)
docker compose build
docker compose up -d
```
