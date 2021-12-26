---
sidebar_position: 4
docId: 'upgrading'
---

# Upgrading


## Updating Existing Badaso
:::info
Before updating the Badaso version, you should first backup the project.
:::

- Update badaso to latest version with command below.
```bash
composer update uasoft-indonesia/badaso
```

- Update badaso to latest version with command below.
```bash
php artisan badaso:setup --force
```
:::info
--force is used to overwrite previously published ones. Don't use --force if you only want to publish unpublished files.
:::

- Migrate database if available.

:::info
php artisan migrate
:::

- Reseed badaso
```bash
php artisan db:seed --class=BadasoSeeder
```

- Install new Javascript packages if available
```bash
npm install
```