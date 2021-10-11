---
docId: "command"
sidebar_position: 8
---

# Command

## Creating Admin Account

Badaso provides commands to create superadmin accounts to be able to enter the dashboard page.

```bash
php artisan badaso:admin your@email.com --create
```

## Backup

Badaso provides commands for running laravel backups. The backup configuration is contained in the file `.env`. This configuration includes backup files and backup disks.

```bash
php artisan badaso:backup
```

## Seeder

The following command is used to create seeders based on a table and its data.

```bash
php artisan badaso:generate-seeder TABLE_NAME
```
