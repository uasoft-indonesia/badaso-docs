---
docId: "customizationintro"
sidebar_position: 2
---

# Overriding Controller

Every CRUD generated through the CRUD generator will use the same controller. there are times when this controller needs adjustments, such as adding logic that is not provided by Badaso.

To create a new controller and use it in the generated CRUD (overridding), there are several steps that need to be done.

- Create the new controller for overriding.
```bash 
php artisan make:controller NewController
```

- Extends the controller from `BadasoBaseController`.
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

- The following methods are available for overrides.
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

  You can check more detail on `vendor/badaso/core/src/Controllers/BadasoBaseController`

- Change the controller of CRUD that you wanna to override on "Edit related CRUD > Advanced Settings > Controller Name" with the new controller `App\Http\Controllers\NewController`

![Docusaurus logo](/img/override-controller.png)