---
docId: "autobackup"
sidebar_position: 10
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/core-concept/auto-backup.md
---

# Auto Backup

Badaso menyediakan fitur pencadangan otomatis. Anda dapat mengatur pada `.env` untuk mencadangkan file atau database Anda ke penyimpanan Anda.

Untuk menggunakan Auto Backup, ada beberapa konfigurasi yang perlu disiapkan.

- Setup Env

  ```bash
  #fill with one of all,database,files, backup will not run if BACKUP_TARGET empty
  BACKUP_TARGET=
  #fill with many of s3,google,dropbox, backup will not run if BACKUP_DISK empty
  BACKUP_DISK=
  ```

- Tambahkan baris berikut ke `config/database.php`

  ```bash
  ...,
  'connections' => [
      'mysql' => [
          'driver'    => 'mysql'
          ...,
          'dump' => [
          'dump_binary_path' => env('DUMP_BINARY_PATH', 'C:\xampp\mysql\bin'),
          'use_single_transaction',
          'timeout' => 60 * 5, // 5 minute timeout
          ]
  ],
  ...,
  ```

- Tambahkan baris berikut ke `config/filesystem.php`

  ```php
  'disks' => [

  ...,

  's3' => [
      'driver' => 's3',
      'key' => env('AWS_ACCESS_KEY_ID'),
      'secret' => env('AWS_SECRET_ACCESS_KEY'),
      'region' => env('AWS_DEFAULT_REGION'),
      'bucket' => env('AWS_BUCKET'),
      'url' => env('AWS_URL'),
  ],

  'google' => [
      'driver' => 'google',
      'clientId' => env('GOOGLE_DRIVE_CLIENT_ID'),
      'clientSecret' => env('GOOGLE_DRIVE_CLIENT_SECRET'),
      'refreshToken' => env('GOOGLE_DRIVE_REFRESH_TOKEN'),
      'folderId' => env('GOOGLE_DRIVE_FOLDER_ID'),
  ],

  'dropbox' => [
      'driver' => 'dropbox',
      'authorization_token' => env('DROPBOX_AUTH_TOKEN'),
  ],

  ],
  ```

- Jalankan perintah backup
  ```bash
  php artisan badaso:backup
  ```
