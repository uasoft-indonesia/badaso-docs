---
docId: "customizationintro"
sidebar_position: 2
---

# Overriding Controller

Every CRUD generated through the CRUD generator will use the same controller. there are times when this controller needs adjustments, such as adding logic that is not provided by Badaso.

For customization, we need to override the default controller with the new controller, there are several steps that need to be done.

- Create the new controller for overriding.
```bash 
php artisan make:controller NewController
```

- Extends `BadasoBaseController` Class and import some important code on the new controller.
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

## Example
For example, you have a food_categories table and you want to override the controller in the browse method.

- Create the new controller for overriding.

  ```
  php artisan make:controller foodCategoryController
  ```

- Extend the BadasoBaseController class and import some important code in the new controller.

  You can check more details in vendor/badaso/core/src/Controllers/BadasoBaseController

- You can copy all contents of browse method then paste it in new controller. 

  ![Override controller browse controller](/img/override-controller-browse-controller.png)

- For example, in this override you want to add a "hello world" message. You can add the data like this:
  ```
    $data['message'] = "hello world";
  ```

  ![Override controller update browse](/img/override-controller-update-browse.png)

  If the new controller has been changed, you can save it.

- After that, go to the badaso application, then open the crud management in the food_categories table and select Add CRUD.

  ![Override controller crud management](/img/override-controller-crud-management.png)

- In crud management, open the advanced settings tab and you will see the controller name. Fill in the controller name with the controller namespace. For example :

  ```
  App\Http\Controllers\foodCategoryController
  ```

  ![Override controller menu controller](/img/override-controller-menu-controller.png)

  When finished, click save.

- To see the results of the overridden controller that was created, there are several ways, one of which is by opening the **API Documentation**.

- Open the **API Documentation** menu, to run **API Documentation** you must use a token for authorization. Then you have to take the token with the following steps:
  - Right click and select inspect.
  - Refresh your browser page.
  - Open the network tab.
  - Search for the **user**, then select it.
  - In the response header, you will see authorization.
  - Copy all the contents of the authorization except the word "bearer" as a token.

  ![Override controller token](/img/override-controller-token.png)

- Return to the **API Documentation** menu, after getting the token for authorization, click the **authorize** button then paste the token in **value** then click authorize.

  ![Override controller add token](/img/override-controller-add-token.png)

- After that, look for the food-categories menu then select browse, usually the browse menu is at the very top.

  ![Override controller try api docs](/img/override-controller-try-api-docs.png)

- Then click the **try it out** button, then press the **execute** button.

- You will see the result of the override controller you created in the response in the message property.

  ![Override controller result](/img/override-controller-result.png)