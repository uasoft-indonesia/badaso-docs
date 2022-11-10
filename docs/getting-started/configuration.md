---
sidebar_position: 5
docId: "configuration"
---

# Configuration

When Badaso has been successfully installed, you will find the configuration files in `config/badaso.php` and `.env`. In this file you will find many options for changing the configuration of your Badaso installation.

## Back Up

The backup settings can be changed in the `.env` file.

### AWS S3

```md title=".env"
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=
AWS_URL=
```

- `AWS_ACCESS_KEY_ID`: Fill in to use the backup feature to AWS S3.
- `AWS_SECRET_ACCESS_KEY`: Fill in to use the backup feature to AWS S3.
- `AWS_DEFAULT_REGION`: S3 bucket region for uploading backup files.
- `AWS_BUCKET`: S3 bucket name to upload the backup file.
- `AWS_URL`: AWS S3 bucket URL.

### Google Drive

```md title=".env"
GOOGLE_DRIVE_CLIENT_ID=
GOOGLE_DRIVE_CLIENT_SECRET=
GOOGLE_DRIVE_REFRESH_TOKEN=
GOOGLE_DRIVE_FOLDER_ID=
```

- `GOOGLE_DRIVE_CLIENT_ID`: Fill in to use the backup feature to Google Drive.
- `GOOGLE_DRIVE_CLIENT_SECRET`: Fill in to use the backup feature to Google Drive.
- `GOOGLE_DRIVE_REFRESH_TOKEN`: Fill in to use the backup feature to Google Drive.
- `GOOGLE_DRIVE_FOLDER_ID`: Folder id to upload backup files into the specified folder.

### Dropbox

```md title=".env"
DROPBOX_AUTH_TOKEN=
```

- `GOOGLE_DRIVE_CLIENT_ID`: Fill in to use the backup feature to Dropbox.

## Hidden Tables

The hidden table is useful for hiding the users table on the CRUD Generator page. Hidden tables can be set in badaso configuration file which is `config\badaso-hidden-tables.php`.

```md title="config/badaso-hidden-tables.php"
<?php

return [
    // add the table here
];
```

## Watch Tables

Watch tables allow you to create automatic CRUD_DATA seeders on tables. Watch tables can be set in badaso configuration file which is `config\badaso-watch-tables.php`.

```md title="config/badaso-hidden-tables.php"
<?php

return [
    // add the table here
];
```

## Maintenance

### Maintenance with .env
Maintenance mode makes it easy for administrators to fix, change, and add new features.  

```md title=".env"
MIX_BADASO_MAINTENANCE=false
```
- If `MIX_BADASO_MAINTENANCE` key doesn't exist, you can change maintenance setting in configuration menu.
- But if `MIX_BADASO_MAINTENANCE` key exist, you can't change in configuration menu and maintenance setting should `readonly` and you just can change in .env.

### Secret-login page
if you are in maintenance mode, you can use `secret-login` page for login to dashboard (special for administrator)

```md title=".env"
MIX_BADASO_SECRET_LOGIN_PREFIX=badaso-secret-login
```

- `badaso-secret-login` is default value for prefix `secret-login` page. you can change as needed.

### Whitelist
Whitelist is a list for maintenance mode exception. you can change whitelist in `config/badaso.php`.

```md title="config/badaso.php"
'whitelist' => [
        'web' => [],
        'badaso' => [
            '/maintenance',
            '/login,
        ],
        ...
    ],
```

