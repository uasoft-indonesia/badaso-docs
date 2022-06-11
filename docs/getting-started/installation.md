---
sidebar_position: 3
docId: 'installation'
---

# Installation

## On Fresh Project 

### via Curl (recommended)

:::info
Install & enable docker first on your local system before running command for docker mode installation (recommended). If you not enable docker first, badaso will install without docker.

Make sure these ports are free on your system :8000 :3306 :6379 for smooth installation on docker mode.

Badaso using laravel sail for docker configuration, please read more about sail [here](https://laravel.com/docs/9.x/sail)
:::

```bash
curl -s "https://badaso-starter.uatech.co.id/your-project-name" | bash
```
If you using docker mode installation, your application will automatically serve by docker on ` localhost:8000`

If you don't using docker mode installation, you need to migrate and seed the database first on your local system.

Run database migration.
```bash
php artisan migrate
 ```

Run database seeder
```bash
php artisan db:seed --class="Database\Seeders\Badaso\BadasoSeeder"
```

Create an admin account by typing the following command.
```bash
php artisan badaso:admin your@email.com --create
```

Run your laravel project and access /badaso-dashboard path on your laravel.
```bash
php artisan serve
```

### via Composer

- Create project via composer

```bash
composer create-project badaso/starter your_project_name
```

Run database migration.
```bash
php artisan migrate
 ```

Run database seeder
```bash
php artisan db:seed --class="Database\Seeders\Badaso\BadasoSeeder"
```

Create an admin account by typing the following command.
```bash
php artisan badaso:admin your@email.com --create
```

Symlink the storage folder if not yet
```bash
php artisan storage:link
 ```

Run the following command to install all javascript of dependencies.
```bash
npm install
npm run dev
```

Run your laravel project and access /badaso-dashboard path on your laravel.
```bash
php artisan serve
```

## On existing project
You can install badaso on your existing application easily.

Badaso `v2.x` For Laravel 8 & 9
```bash
composer require badaso/core
 ```

Badaso `v1.x` For Laravel 5,6,7 (not recommended)
```bash
composer require badaso/core:^1.0
 ```

Run the following commands to install badaso
```bash
php artisan badaso:setup
 ```

[optional] Symlink the storage folder if not yet
```bash
php artisan storage:link
 ```

For laravel 8 and existing project, change filesystem to public (**[readmore for cloud](/core-concept/storage)**)
```bash
FILESYSTEM_DISK=public
 ```

Run composer autoload and seeders
```bash
composer dump-autoload
 ```

Run database migration.
```bash
php artisan migrate
 ```

`v2.x` For Laravel 8 & 9
```bash
php artisan db:seed --class="Database\Seeders\Badaso\BadasoSeeder"
```

`v1.x` For Laravel 5,6,7
```bash
php artisan db:seed --class=BadasoSeeder
```

Create an admin account by typing the following command.
```bash
php artisan badaso:admin your@email.com --create
```

Run the following command to install all javascript of dependencies.
```bash
npm install
npm run dev
```

Run your laravel project and access /badaso-dashboard path on your laravel.
```bash
php artisan serve

