---
docId: "customizationintro"
sidebar_position: 2
---

# Overriding Controller

Every CRUD generated through the CRUD generator will use the same controller. there are times when this controller needs adjustments, such as adding logic that is not provided by Badaso.

To create a new controller and use it in the generated CRUD (overridding), there are several steps that need to be done.

- Create a laravel controller as usual.
```bash
php artisan make:controller NewController
```

- Extends the controller to `BadasoBaseController`.
```bash
<?php

namespace App\Http\Controllers;

class NewController extends Uasoft\Badaso\Controllers\BadasoBaseController
{
    //...
}
```

- Overrides the `BadasoBaseController` method. The following methods are available for overrides.
    - all
    - read
    - edit
    - add
    - delete

- Edit CRUD in CRUD Management, add the new controller created.