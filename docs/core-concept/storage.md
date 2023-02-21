---
docId: "storage"
sidebar_position: 1
---

# Storage

Badaso provides some storage driver that laravel already support like AWS S3, Google Drive and Dropbox.

To use the storage driver, just set it on env like below.

## Setup ENV

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

  
<Tabs>
  <TabItem value="aws" label="AWS" default>

    #OPTIONAL. Badaso default storage driver are public by removing the key below from .env
    FILESYSTEM_DRIVER=s3
    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    AWS_DEFAULT_REGION=
    AWS_BUCKET=
    AWS_URL=

  </TabItem>
  <TabItem value="drive" label="Drive (Backup only)">

    #OPTIONAL. Set Google Drive if use Google Drive as backup
    GOOGLE_DRIVE_CLIENT_ID=
    GOOGLE_DRIVE_CLIENT_SECRET=
    GOOGLE_DRIVE_REFRESH_TOKEN=
    GOOGLE_DRIVE_FOLDER_ID=

    BACKUP_DISK=drive
  </TabItem>
  <TabItem value="dropbox" label="Dropbox (Backup only)">

    #OPTIONAL. Set Dropbox credential if use Dropbox as backup
    DROPBOX_AUTH_TOKEN=

    BACKUP_DISK=dropbox
  </TabItem>
</Tabs>

Note : How to get [Dropbox token](https://qirolab.com/posts/how-to-setup-laravel-backup-on-google-drive-1607368130) and [Google Credential](https://qirolab.com/posts/how-to-setup-laravel-backup-on-google-drive-1607368130).