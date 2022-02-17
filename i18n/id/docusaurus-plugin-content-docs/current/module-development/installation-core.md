---
sidebar_position: 1
docId: "installation-core"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/module-development/installation.md
---

# Installation Core

1. Install laravel 8

```bash
$ composer create-project laravel/laravel:^8.0 badaso-develop
```

2. Pada directory `./badaso-develop` buat directory baru `packages/badaso` sehingga

```md title="strukture directory"
📦 badaso-develop
┣ 📂 packages
┣ ┣ 📂 badaso /** Directory core dan kumpulan module **/
```

3. Pada directory `./badaso-develop/packages/badaso` clone packages [badaso](https://github.com/uasoft-indonesia/badaso)

```
$ git clone https://github.com/uasoft-indonesia/badaso.git core
```

Berikut hasil strukture akhir directory setelah clone package badaso core

```md title="strukture directory"
📦 badaso-develop
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ 📜 ...
```

4. Pada file `./badaso-develop/packages/badaso/core/composer.json` terdapat key require, autoload, dan extras.laravel.providers

```md title="./badaso-develop/packages/badaso/core/composer.json"
{
    ...
    "require": {
        "webpatser/laravel-uuid": "^4.0",
        "doctrine/dbal": "^2.12",
        "larapack/doctrine-support": "^0.1.9",
        "arcanedev/log-viewer": "^8.1",
        "spatie/laravel-activitylog": "^3.17",
        "spatie/laravel-backup": "^6.16",
        "spatie/flysystem-dropbox": "^1.2.2",
        "nao-pon/flysystem-google-drive": "^1.1.13",
        "league/flysystem-aws-s3-v3": "^1.0.28",
        "guzzlehttp/guzzle": "^7.0.1",
        "unisharp/laravel-filemanager": "^2.2",
        "darkaonline/l5-swagger": "^8.0",
        "zircote/swagger-php": "^3.2",
        "symfony/var-exporter": "^5.2.0",
        "google/apiclient": "^2.9",
        "laravel/ui": "^3.3",
        "laravel/sanctum": "^2.11",
        "laravel/octane": "^1.0",
        "predis/predis": "^1.1"
    },
    ...
    "autoload": {
        "psr-4": {
            "Uasoft\\Badaso\\": "src/"
        }
    },
    ...
    "extra": {
        "laravel": {
            "providers": [
                "Uasoft\\Badaso\\Providers\\BadasoServiceProvider"
            ]
        }
    }
}
```
Pindahkan isi require dan autoload, dan extras.laravel.providers file pada `./badaso-develop/packages/badaso/composer.json` ke `./badaso-develop/composer.json` 
```md title="./badaso-develop/composer.json"
{
    ...
    "require": {
        ...
        "webpatser/laravel-uuid": "^4.0",
        "doctrine/dbal": "^2.12",
        "larapack/doctrine-support": "^0.1.9",
        "arcanedev/log-viewer": "^8.1",
        "spatie/laravel-activitylog": "^3.17",
        "spatie/laravel-backup": "^6.16",
        "spatie/flysystem-dropbox": "^1.2.2",
        "nao-pon/flysystem-google-drive": "^1.1.13",
        "league/flysystem-aws-s3-v3": "^1.0.28",
        "guzzlehttp/guzzle": "^7.0.1",
        "unisharp/laravel-filemanager": "^2.2",
        "darkaonline/l5-swagger": "^8.0",
        "zircote/swagger-php": "^3.2",
        "symfony/var-exporter": "^5.2.0",
        "google/apiclient": "^2.9",
        "laravel/ui": "^3.3",
        "laravel/sanctum": "^2.11",
        "laravel/octane": "^1.0",
        "predis/predis": "^1.1"
    },
}
```
Pindahkan value extras.laravel.providers `./badaso-develop/packages/badaso/core/composer.json` 
```md title="./badaso-develop/packages/badaso/core/composer.json"
{
    ...
    "extra": {
        "laravel": {
            "providers": [
                "Uasoft\\Badaso\\Providers\\BadasoServiceProvider"
            ]
        }
    }
}
```
salin ke `./badaso-develop/config/app.php` di key providers
```md title="./badaso-develop/config/app.php"
<?php

return [
    ...
    'providers' => [
        ...
        "Uasoft\\Badaso\\Providers\\BadasoServiceProvider",
        ...
    ],
    ...
];
```

5. Jalankan perintah untuk mengupdate composer
```
$ composer update
```
6. Jalankan perintah untuk untuk setup badaso
```
$ php artisan badaso:setup
```
7. Jalankan perintah untuk migrate dan seeder database
```
$ php artisan migrate
$ php artisan db:seed --class="Database\Seeders\Badaso\BadasoSeeder"
```
8. Install node module untuk kebutuhan badaso
```
$ npm install 
```
or
```
$ yarn
```
9. Ubah target lokasi path pada `./badaso-develop/webpack.mix.js`
```
mix.js("vendor/badaso/core/src/resources/badaso/app.js", "public/js/badaso.js")
    .sass("vendor/badaso/core/src/resources/badaso/assets/scss/style.scss", "public/css/badaso.css")
    .vue()
```
ubah menjadi
```
mix.js("packages/badaso/core/src/resources/badaso/app.js", "public/js/badaso.js")
    .sass("packages/badaso/core/src/resources/badaso/assets/scss/style.scss", "public/css/badaso.css")
    .vue()
```
10. Jalankan perintah untuk membuat akun admin
```
$ php artisan badaso:admin your@email.com --create
```






        

