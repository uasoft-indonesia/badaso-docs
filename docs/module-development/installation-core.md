---
sidebar_position: 1
docId: "installation core"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/module-development/installation.md
---

# Installation Core

1. Install laravel 8

```bash
$ composer create-project laravel/laravel:^8.0 badaso-develop
```

2. In the `./badaso-develop` directory create a new directory `packages/badaso` so that

```md title="directory structure"
badaso development
package
badaso /** Directory core and module pool **/
```

3. In the directory `./badaso-develop/packages/badaso` clone package [badaso](https://github.com/uasoft-indonesia/badaso)

```
$ git clone https://github.com/uasoft-indonesia/badaso.git core
```

The following is the result of the final directory structure after clone package badaso core

```md title="directory structure"
badaso development
package
badaso
core
...
...
```

4. In the file `./badaso-develop/packages/badaso/core/composer.json` there are the require, autoload, and extras.laravel.providers keys

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
        "google/apclient": "^2.9",
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
    "addition": {
        "laravel": {
            "provider": [
                "Uasoft\\Badaso\\Providers\\BadasoServiceProvider"
            ]
        }
    }
}
```

Move the contents of the require and autoload, and extras.laravel.providers files under `./badaso-develop/packages/badaso/composer.json` to `./badaso-develop/composer.json`

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
        "google/apclient": "^2.9",
        "laravel/ui": "^3.3",
        "laravel/sanctum": "^2.11",
        "laravel/octane": "^1.0",
        "predis/predis": "^1.1"
    },
}
```

Move the value of extras.laravel.providers `./badaso-develop/packages/badaso/core/composer.json`

```md title="./badaso-develop/packages/badaso/core/composer.json"
{
    ...
    "addition": {
        "laravel": {
            "provider": [
                "Uasoft\\Badaso\\Providers\\BadasoServiceProvider"
            ]
        }
    }
}
```

copy it to `./badaso-develop/config/app.php` in main provider

```md title="./badaso-develop/config/app.php"
<?php

return [
    ...
    'provider' => [
        ...
        "Uasoft\\Badaso\\Providers\\BadasoServiceProvider",
        ...
    ],
    ...
];
```

5. Run the command to update composer

```
$ composer update
```

6. Run the command to setup badaso

```
$ php artisan badaso:setup
```

7. Run command to migrate and seeder database

```
$ php artisan migrate
$ php artisan db:seed --class="Database\Seeders\Badaso\BadasoSeeder"
```

8. Install node module for badaso needs

```
$npm install
```

or

```
$ thread
```

9. Change target path location in `./badaso-develop/webpack.mix.js`

```
mix.js("vendor/badaso/core/src/resources/badaso/app.js", "public/js/badaso.js")
    .sass("vendor/badaso/core/src/resources/badaso/assets/scss/style.scss", "public/css/badaso.css")
    .vue()
```

change to

```
mix.js("packages/badaso/core/src/resources/badaso/app.js", "public/js/badaso.js")
    .sass("packages/badaso/core/src/resources/badaso/assets/scss/style.scss", "public/css/badaso.css")
    .vue()
```

10. Run the command to create an admin account

```
$ php artisan badaso:admin your@email.com --create
```
