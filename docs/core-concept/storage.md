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
    FILESYSTEM_DRIVER=

    #OPTIONAL. Set AWS credential if use aws as storage
    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    AWS_DEFAULT_REGION=
    AWS_BUCKET=
    AWS_URL=
  </TabItem>
  <TabItem value="google" label="Google">

    #OPTIONAL. Badaso default storage driver are public by removing the key below from .env
    FILESYSTEM_DRIVER=

    #OPTIONAL. Set Google Drive credential if use Google Drive as storage
    GOOGLE_DRIVE_CLIENT_ID=
    GOOGLE_DRIVE_CLIENT_SECRET=
    GOOGLE_DRIVE_REFRESH_TOKEN=
    GOOGLE_DRIVE_FOLDER_ID=
  </TabItem>
  <TabItem value="dropbox" label="Dropbox">

    #OPTIONAL. Badaso default storage driver are public by removing the key below from .env
    FILESYSTEM_DRIVER=

    #OPTIONAL. Set Dropbox credential if use Dropbox as storage
    DROPBOX_AUTH_TOKEN=
  </TabItem>
</Tabs>
