---
sidebar_position: 2
docId: "badaso-make-module"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/module-development/badaso-make-module.md
---

# Badaso Make Module

1. Install laravel 8 with the core module in it
2. Create a directory for the new module, with the packages structure as follows

```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {new-module-name}-module /** nama module baru yang akan dibuat **/
```

3. In the directory `./badaso-develop-project/packages/badaso/{new-module-name}-module` create a file structure like this

````
```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {new-module-name}-module // nama module baru yang akan dibuat
┣ ┣ ┣ ┣ 📂 src
┣ ┣ ┣ ┣ ┣ 📂 Commands
┣ ┣ ┣ ┣ ┣ ┣ 📜 {NewModuleName}Command.php
┣ ┣ ┣ ┣ ┣ 📂 Config
┣ ┣ ┣ ┣ ┣ ┣ 📜 {new-module-name}.php
┣ ┣ ┣ ┣ ┣ 📂 Facades
┣ ┣ ┣ ┣ ┣ ┣ 📜 {NewModuleName}Module.php
┣ ┣ ┣ ┣ ┣ 📂 Providers
┣ ┣ ┣ ┣ ┣ ┣ 📜 {NewModuleName}ModuleServiceProvider.php
┣ ┣ ┣ ┣ ┣ 📂 Routes
┣ ┣ ┣ ┣ ┣ ┣ 📜 api.php
┣ ┣ ┣ ┣ ┣ ┣ 📜 web.php
┣ ┣ ┣ ┣ ┣ 📂 Controllers
┣ ┣ ┣ ┣ ┣ ┣ 📜 {NewModuleName}Controller.php
┣ ┣ ┣ ┣ ┣ 📂 Migrations
┣ ┣ ┣ ┣ ┣ ┣ 📜 YYYY_mm_dd_ttttt_create_{new-module-name}_table.php
┣ ┣ ┣ ┣ ┣ 📂 Seeders
┣ ┣ ┣ ┣ ┣ ┣ 📜 Badaso{NewModuleName}FixedMenuItemSeeder.php
┣ ┣ ┣ ┣ ┣ ┣ 📜 Badaso{NewModuleName}MenusSeeder.php
┣ ┣ ┣ ┣ ┣ ┣ 📜 Badaso{NewModuleName}ModuleSeeder.php
┣ ┣ ┣ ┣ ┣ ┣ 📜 Badaso{NewModuleName}PermissionsSeeder.php
┣ ┣ ┣ ┣ ┣ ┣ 📜 Badaso{NewModuleName}RolePermissionsSeeder.php
┣ ┣ ┣ ┣ ┣ 📂 resources
┣ ┣ ┣ ┣ ┣ ┣ 📂 js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 api
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 modules
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 index.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 components
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 index.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 lang
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 modules
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 index.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 pages
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 content
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 index.vue
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 router
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 excludeRouter.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 routes.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 store
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 badaso.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 utils
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 content-helper.js
┣ ┣ ┣ ┣ ┣ 📜 {NewModuleName}Module.php
┣ ┣ ┣ ┣ 📜 composer.json
````

## Composer Json

1. Add the contents of the file `./badaso-develop-project/packages/badaso/{new-module-name}-module/composer.json`

```
{
    {
        "name": "badaso/{new-module-name}",
        "version": "1.0.0",
        "license": "proprietary",
        "homepage": "https://badaso.uatech.co.id/",
        "type": "library",
        "require": {

        },
        "authors": [
            {
                "name": "UASOFT",
                "email": "hello@uatech.co.id"
            }
        ],
        "minimum-stability": "alpha",
        "autoload": {
            "psr-4": {
                "Uasoft\\Badaso\\Module\\{NewModuleName}\\": "src/"
            }
        },
        "extra": {
            "laravel": {
                "providers": [
                    "Uasoft\\Badaso\\Module\\{NewModuleName}\\Providers\\{NewModuleName}ModuleServiceProvider"
                ]
            }
        }
    }
}
```

In require can add new libraries for module requirements

## Class Module

1. Add the contents of the file `./badaso-develop-project/packages/badaso/{new-module-name}-module/src/{NewModuleName}Module.php`

```
<?php

namespace Uasoft\Badaso\Module\{NewModuleName};

class {NewModuleName}Module {

}
```

## Facades

1. Add the contents of the file `./badaso-develop-project/packages/badaso/{new-module-name}-module/src/Facades/{NewModuleName}Module.php`

```
<?php

namespace Uasoft\Badaso\Module\{NewModuleName}\Facades;

use Illuminate\Support\Facades\Facade;

class {NewModuleName}Module extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return '{new-module-name}-module';
    }
}
```

## Config

Contains the config module which will later be published to the laravel config project

1. Add the contents of the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/Config/{new-module-name}.php`

```
<?php

return [
    // todo other config...
];
```

## Seeders

By default the badaso module has 5 main files for seeders on the path `./badaso-develop/packages/badaso/{new-module-name}-module/src/Seeders`

1. Badaso{NewModuleName}PermissionsSeeder.php

   This seeder adds permissions for module operation requirements, for each administrator permission can act as a role in the generated permissions generated, additional file contents:

   ```md title="./badaso-develop/packages/badaso/{new-module-name}-module/src/Seeders/Badaso{NewModuleName}PermissionsSeeder.php"
   namespace Database\Seeders\Badaso\{NewModuleName};

   use Illuminate\Database\Seeder;
   use Uasoft\Badaso\Models\Permission;

   class Badaso{NewModuleName}PermissionsSeeder extends Seeder
   {
   /\*\*
   _ Auto generated seed file.
   _/
   public function run()
   {
   $keys = [ # todo string[] permissions...
   ];

          foreach ($keys as $key) {
              Permission::firstOrCreate([
                  'key' => $key,
                  'table_name' => '{module_table_name}',
                  'description' => '{description_permission}',
              ]);
          }

          // Permission::generateFor('{module_table_name}');

   }

   }
   ```

   - {model_table_name} is the name of the table used by the module
   - {description_permission} is a description of the permissions
   - `Permission::generateFor('{module_table_name}')` is a helper used to generate permissions for crud generate on tables, init helper will automatically generate permissions and roles for administrator

2. Badaso{NewModuleName}RolePermissionsSeeder.php

   Contains the generate role for administrator on the permissions that have been made on the seeder permissions, add the contents of the file:

   ```
   <?php

   namespace Database\Seeders\Badaso\{NewModuleName};

   use Illuminate\Database\Seeder;
   use Uasoft\Badaso\Models\Permission;
   use Uasoft\Badaso\Models\Role;
   use Uasoft\Badaso\Models\RolePermission;

   class Badaso{NewModuleName}RolePermissionsSeeder extends Seeder
   {
       /**
       * Auto generated seed file.
       *
       * @return void
       *
       * @throws Exception
       */
       public function run()
       {
           \DB::beginTransaction();

           try {
               $administrator = Role::where('name', 'administrator')->firstOrFail();

               $permissions = Permission::all();

               if (! is_null($administrator)) {
                   foreach ($permissions as $row) {
                       $role_permission = RolePermission::where('role_id', $administrator->id)
                               ->where('permission_id', $row->id)
                               ->first();
                       if (is_null($role_permission)) {
                           $role_permission = new RolePermission();
                           $role_permission->role_id = $administrator->id;
                           $role_permission->permission_id = $row->id;
                           $role_permission->save();
                       }
                   }
               }

               \DB::commit();
           } catch (Exception $e) {
               throw new Exception('Exception occur '.$e);
               \DB::rollBack();
           }
       }
   }
   ```

3. Badaso{NewModuleName}MenusSeeder.php

   If the created module requires a new menu group to be displayed on the sitebar, it can display a seeder for that menu, add the contents of the file

   ```
   <?php

   namespace Database\Seeders\Badaso\{NewModuleName};

   use Illuminate\Database\Seeder;
   use Uasoft\Badaso\Models\Menu;

   class Badaso{NewModuleName}MenusSeeder extends Seeder
   {
       /**
       * Auto generated seed file.
       *
       * @return void
       *
       * @throws Exception
       */
       public function run()
       {
           \DB::beginTransaction();

           try {
               $new_menus = [
                   'key' => '{new-module-name}',
                   'display_name' => '{nama-module-display}',
               ];

               Menu::firstOrCreate($new_menus);
           } catch (Exception $e) {
               \DB::rollBack();
           }

           \DB::commit();
       }
   }
   ```

   - {new-module-name} contains the name of the module
   - {name-module-display} the name that will be displayed on the sidebar group menu

4. Badaso{NewModuleName}FixedMenuItemSeeder.php

   Adding a menu item to the menu group has been created on the seeder menu, this menu item will be displayed on the sidebar, additional file contents

   ```
   <?php

   namespace Database\Seeders\Badaso\{NewModuleName};

   use Illuminate\Database\Seeder;
   use Uasoft\Badaso\Models\Menu;
   use Uasoft\Badaso\Models\MenuItem;

   class Badaso{NewModuleName}FixedMenuItemSeeder extends Seeder
   {
       /**
       * Auto generated seed file.
       *
       * @return void
       *
       * @throws Exception
       */
       public function run()
       {
           \DB::beginTransaction();

           try {
               $menus = Menu::where('key', '{new-module-name}')->first();
               $menu_id = $menus->id;

               $add_menu_items = [
                   [
                       'menu_id' => $menu_id,
                       'title' => '{nama-title-menu-item}',
                       'url' => '/{nama-url-menu-item}',
                       'target' => '_self',
                       'icon_class' => '{nama-google-material-icon-menu-item}',
                       'color' => '',
                       'parent_id' => null,
                       'order' => 1,
                       'permissions' => '{nama_permission_menu_item}',
                   ],
               ];

               foreach($add_menu_items as $add_menu_item){
                   MenuItem::firstOrCreate($add_menu_item);
               }

           } catch (Exception $e) {
               \DB::rollBack();
           }

           \DB::commit();
       }
   }
   ```

   There are several fields to add a new menu item,

    - menu_id : is the id of the menu, to create menu items
    - title : name of menu
    - url : menu url if click event
    - target : \_self | \_blank
    - icon_class : icon comes from [google font material icon](https://fonts.google.com/icons?selected=Material+Icons+Outlined:assignment_returned)
    - color : menu color
    - parent_id : id of menu item
    - order: order menu items
    - permissions : permission name for menu item

5. Badaso{NewModuleName}ModuleSeeder.php

   Running all seeders in one seeder file

   ```
   <?php

   namespace Database\Seeders\Badaso\{NewModuleName};

   use Illuminate\Database\Seeder;

   class Badaso{NewModuleName}ModuleSeeder extends Seeder
   {
       /**
       * Run the database seeds.
       *
       * @return void
       */
       public function run()
       {
           $this->call(Badaso{NewModuleName}PermissionsSeeder::class);
           $this->call(Badaso{NewModuleName}RolePermissionsSeeder::class);
           $this->call(Badaso{NewModuleName}MenusSeeder::class);
           $this->call(Badaso{NewModuleName}FixedMenuItemSeeder::class);
       }
   }
   ```

## Commands

For standard badaso module build, have setup command for publish files like config and seeder

1. Add the contents of the file `./badaso-develop-project/packages/badaso/{new-module-name}-module/src/Commands/{NewModuleName}Command.php`

```
<?php

namespace Uasoft\Badaso\Module\{NewModuleName}\Commands;

use Illuminate\Console\Command;
use Symfony\Component\VarExporter\VarExporter;

class {NewModuleName}Setup extends Command
{
    private $force;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = '{new-module-name}:setup {--force=false}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            $this->force = $this->option('force');
            if ($this->force == null) {
                $this->force = true;
            }

            // todo code ...

            $this->call('vendor:publish', [
                '--tag' => '{new-module-name}-module',
                '--force' => $this->force,
            ]);
        } catch (\Exception $e) {
            $this->error($e->getMessage());
        }
    }
}
```

## Controllers

Adding a new controller for the api or web route, add the contents of the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/Controllers/{NewModuleName}Controller.php`

```
<?php

namespace Uasoft\Badaso\Module\{NewModuleName}\Controllers;

use App\Http\Controllers\Controller;

class {NewModuleName}Controller extends Controller
{

}
```

## Routes

Add web route or api for module

### Api

1. Add the contents of the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/Routes/api.php`

```
<?php

Route::group([
    'prefix' => '/api',
    'namespace' => 'Uasoft\Badaso\Module\{NewModuleName}\Controllers',
    'as' => '{new-module-name}.',
    'middleware' => [Uasoft\Badaso\Middleware\ApiRequest::class]
], function () {
    // todo other api route...
});
```

### Web

1. Add the contents of the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/Routes/web.php`

```
<?php

Route::group([
    'prefix' => '/',
    'namespace' => 'Uasoft\Badaso\Module\{NewModuleName}\Controllers',
    'as' => '{new-module-name}.',
    'middleware' => [Uasoft\Badaso\Middleware\ApiRequest::class]
], function () {
    // todo other web route
});
```

## Migrations

If you have a migration table, you can add a migration table class to the Migrations folder, for example the sample file migration `./badaso-develop/packages/badaso/{new-module-name}-module/src/Migrations/YYYY_mm_dd_ttttt_create_{name-new-table }_table.php`

```
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Create{NamaTableBaru}Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(config('badaso.database.prefix').'{nama-table-baru}', function (Blueprint $table) {
            $table->bigIncrements('id');

            // todo other fields...

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(config('badaso.database.prefix').'{nama-table-baru}');
    }
}
```

## Providers

1. Add the contents of the file `./badaso-develop-project/packages/badaso/{new-module-name}-module/src/Providers/{NewModuleName}ModuleServiceProvider.php`

```
<?php

namespace Uasoft\Badaso\Module\{NameModuleBaru}\Providers;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;
use Uasoft\Badaso\Module\{NameModuleBaru}\{NewModuleName}Module;
use Uasoft\Badaso\Module\{NameModuleBaru}\Commands\{NewModuleName}Setup;
use Uasoft\Badaso\Module\{NameModuleBaru}\Facades\{NewModuleName}Module as Facades{NewModuleName}Module;

class {NewModuleName}ModuleServiceProvider {
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $loader = AliasLoader::getInstance();
        $loader->alias('{NewModuleName}Module', Facades{NewModuleName}Module::class);

        $this->app->singleton('{new-module-name}-module', function () {
            return new {NewModuleName}Module();
        });

        $this->loadMigrationsFrom(__DIR__.'/../Migrations');
        $this->loadRoutesFrom(__DIR__.'/../Routes/web.php');
        $this->loadRoutesFrom(__DIR__.'/../Routes/api.php');

        $this->publishes([
            __DIR__.'/../Config/{new-module-name}.php' => config_path('{new-module-name}.php'),
            __DIR__.'/../Seeder' => database_path('seeders/Badaso/Content'),
        ], '{new-module-name}-module');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerConsoleCommands();
    }

    /**
     * Register the commands accessible from the Console.
     */
    private function registerConsoleCommands()
    {
        $this->commands({NewModuleName}Setup::class);
    }
}
```

## Resouce

### api

In the api directory, you can add an api request file with axios base, add a new file in the `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/api/modules` directory, in in this example there is a file `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/api/modules/example-request.js` with contents

```
import resource from "../../../../../../core/src/resources/js/api/resource";
import QueryString from "../../../../../../core/src/resources/js/api/query-string";

let apiPrefix = process.env.MIX_API_ROUTE_PREFIX
  ? "/" + process.env.MIX_API_ROUTE_PREFIX
  : "/badaso-api";

export default {

};
```

Add the contents of the dynamic import file all the files in the modules directory `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/api/index.js`

```
let exported = {};

// DYNAMIC IMPORT BADASO API HELPER
try {
  const modules = require.context("./modules", false, /\.js$/); //
  modules.keys().forEach((fileName) => {
    let property = fileName
      .replace("./", "")
      .replace(".js", "")
      .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, "-") // replace all spaces and low dash
      .replace(/^\.\/_/, "")
      .replace(/\.\w+$/, "")
      .split("-")
      .map((word, index) => {
        if (index > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word;
        }
      })
      .join("");
    exported[property] = modules(fileName).default;
  });
} catch (error) {
  console.info("There is no badaso api helper", error);
}

export default exported;
```

Example files that can be implemented on structures

```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {new-module-name}-module // nama module baru yang akan dibuat
┣ ┣ ┣ ┣ 📂 src
┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ 📂 resources
┣ ┣ ┣ ┣ ┣ ┣ 📂 js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 api
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 modules
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 example-request.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 index.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ 📂 ...
```

### components

In the components directory, you can add several new component files. After the new component files are created, they can be initialized in the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/components/ index.js`.

For the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/components/index.js` contains

```
// import ComponentVue from 'component-vue.vue'

export default  {
    // todo export components...
    // ComponentVue,
};
```

Example files that can be implemented on structures

```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {new-module-name}-module // nama module baru yang akan dibuat
┣ ┣ ┣ ┣ 📂 src
┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ 📂 resources
┣ ┣ ┣ ┣ ┣ ┣ 📂 js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 components
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 index.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 other-component.vue
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ 📂 ...
```

### lang

1. For the contents of the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/lang/index.js`

```
import _ from "lodash";

let exported = {};
let languages = [];

// DYNAMIC IMPORT BADASO LANG
try {
  const modules = require.context("./modules", false, /\.js$/); //
  modules.keys().forEach((fileName) => {
    let property = fileName
      .replace("./", "")
      .replace(".js", "")
      .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, "-") // replace all spaces and low dash
      .replace(/^\.\/_/, "")
      .replace(/\.\w+$/, "")
      .split("-")
      .map((word, index) => {
        if (index > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word;
        }
      })
      .join("");

    languages.push({
      label: modules(fileName).label,
      key: property,
    });
    exported[property] = modules(fileName).default;
  });
} catch (error) {
  console.info("Failed to load badaso languages", error);
}

export default {
  languages,
  i18n: exported,
};
```

2. Create a new folder to hold the lang file with the name `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/lang/moduels`

3. Create a new file to accommodate the language, here is an example of creating a lang file for Indonesian and English with the code id `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/lang /moduels/id.js`

```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {new-module-name}-module // nama module baru yang akan dibuat
┣ ┣ ┣ ┣ 📂 src
┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ 📂 resources
┣ ┣ ┣ ┣ ┣ ┣ 📂 js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 lang
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 modules
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 id.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 en.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 index.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ 📂
```

4. contents of file `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/lang/moduels/id.js`

```
export default {
    example : "contoh",
}
```

### pages

In the pages directory, you can add new pages for page requirements on the dashboard, create a new folder `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/pages/content`, in the This is exemplified by creating an example page with path `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/pages/content/example-page.vue` with contents

```
<template>
</template>
<script>
export default {

}
</script>
```

Add the created page to the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/pages/index.vue`

```
<template>
  <component
    v-if="globalComponentList[defaultComponent]"
    v-bind:is="globalComponentList[defaultComponent]"
  ></component>
  <component v-else v-bind:is="defaultComponent"></component>
</template>

<script>
// import ExamplePage from "./content/page";

export default {
  components: {
    // ExamplePage,
  },
  name: "ContentEntryIndex",
  data: () => ({
    globalComponentList: {},
    defaultComponent: null,
  }),
  mounted() {
    const routeName = this.$route.name;
    const componentName = this.$caseConvert.kebab(routeName);
    const slug = this.$route.params ? this.$route.params.slug : "";
    this.globalComponentList = this.constructor.superOptions.components;
    this.defaultComponent = componentName;
  },
  methods: {},
};
</script>
```

Example files that can be implemented on structures

```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {new-module-name}-module // nama module baru yang akan dibuat
┣ ┣ ┣ ┣ 📂 src
┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ 📂 resources
┣ ┣ ┣ ┣ ┣ ┣ 📂 js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 pages
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 content
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 example-page.vue
┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜 index.js
┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂 ...
┣ ┣ ┣ ┣ ┣ 📂 ...
```

### router

1. Add the contents of the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/pages/index.vue`

```
import Pages from "./../pages/index.vue";

let prefix = process.env.MIX_ADMIN_PANEL_ROUTE_PREFIX
  ? "/" + process.env.MIX_ADMIN_PANEL_ROUTE_PREFIX
  : "/badaso-dashboard";

export default [
  {
    path: prefix + "/{url-menu-item}",
    name: "{PageNameFromPageDirectory}",
    component: Pages,
    meta: {
      title: "{meta-title}",
      useComponent: "AdminContainer",
    },
  },
];
```

2. Add the contents of the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/pages/excludeRouter.js`

```
export default [

];
```

### store

1. Add the contents of the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/store/badaso.js`

```
import createPersistedState from "vuex-persistedstate";

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [createPersistedState()],
};
```

### utils

Contains helpers that can be used for module purposes on page views or components

1. Add the contents of the file `./badaso-develop/packages/badaso/{new-module-name}-module/src/resources/js/utils/content-helper.js`

```
export default {
  // createAMetodFunction(param1, param2) {},
}
```

## Detailed Documentation for Laravel Packages
[Laravel Packages Details](https://laravelpackage.com/#reasons-to-develop-a-package)