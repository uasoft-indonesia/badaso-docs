---
docId: "customizationintro"
sidebar_position: 2
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/customization/overriding-controller.md
---

# Overriding Controller

Setiap CRUD yang di-generate melalui CRUD generator akan menggunakan controller yang sama. Ada kalanya controller ini butuh penyesuaian, seperti penambahan logika yang tidak disediakan oleh Badaso.

Untuk kustomisasi, kita perlu melakukan override terhadap controller bawaan dengan controller baru, ada beberapa langkah yang perlu dilakukan, yaitu:

- Buat controller baru untuk digunakan sebagai overriding.

```bash
php artisan make:controller NewController
```

- Extends `BadasoBaseController` Class dan import kode kode yang diperlukan pada controller yang baru di buat.

```bash title="App\Http\Controllers\NewController.php"
<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Uasoft\Badaso\Helpers\GetData;
use Uasoft\Badaso\Models\DataType;
use Uasoft\Badaso\Helpers\ApiResponse;
use Uasoft\Badaso\Controllers\BadasoBaseController;
use Uasoft\Badaso\Helpers\Firebase\FCMNotification;

class NewController extends BadasoBaseController
{
    // Add new method or override the existing method
}
```

- Berikut method yang bisa kita override.
  - browse
    - read
    - edit
    - add
    - delete
    - restore
    - deleteMultiple
    - restoreMultiple
    - sort
    - setMaintenanceState

  Kita bisa cek lebih detail pada `vendor/badaso/core/src/Controllers/BadasoBaseController`

- Ubah controller pada CRUD yang ingin kita override pada "Edit related CRUD > Advanced Settings > Controller Name" dengan controller baru yang kita buat `App\Http\Controllers\NewController`
![Docusaurus logo](/img/override-controller.png)
