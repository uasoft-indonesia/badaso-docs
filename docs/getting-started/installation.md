---
sidebar_position: 3
docId: 'installation'
---

# Installation

## On Fresh Project
- Create project via composer
```bash
composer create-project badaso/starter your_project_name
```

## On existing project
- You can install badaso on your existing application easily.

Badaso `v2.x` For Laravel 8
```bash
composer require badaso/core
 ```

Badaso `v1.x` For Laravel 5,6,7
```bash
composer require badaso/core:^1.0
 ```

- Run the following commands to update dependencies in package.json, webpack and publish vendor provider.
```bash
php artisan badaso:setup
 ```

## Next setup (for fresh project or existing project)

- Run database migration.
```bash
php artisan migrate
 ```

- [optional] Symlink the storage folder if not yet
```bash
php artisan storage:link
 ```

- For laravel 8 and existing project, change filesystem to public (**[readmore for cloud](/core-concept/storage)**)
```bash
FILESYSTEM_DRIVER=public
 ```

- Run composer autoload and seeders
```bash
composer dump-autoload
 ```

`v2.x` For Laravel 8
```bash
php artisan db:seed --class="Database\Seeders\Badaso\BadasoSeeder"
```

`v1.x` For Laravel 5,6,7
```bash
php artisan db:seed --class=BadasoSeeder
```

- Create an admin account by typing the following command.
```bash
php artisan badaso:admin your@email.com --create
```

- Run the following command to install all of dependencies.
```bash
yarn
yarn dev
```

- Run your laravel project and access /badaso-dashboard path on your laravel.
```bash
# via local machine
php artisan serve

# or

# via docker (for badaso/starter or you can set your docker on your existing project)
docker compose build
docker compose up -d
```

