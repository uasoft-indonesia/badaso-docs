---
sidebar_position: 2
docId: "badaso-make-module"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/module-development/badaso-make-module.md
---

# Badaso Make Module

1. Install laravel 8 dengan module core di dalamnya
2. Buat directory untuk module baru, dengan struktur packages seperti berikut

```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {nama-module-baru}-module /** nama module baru yang akan dibuat **/
```

3. Pada directory `./badaso-develop-project/packages/badaso/{nama-module-baru}-module` buat struktur file seperti berikut

````
```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {nama-module-baru}-module // nama module baru yang akan dibuat
┣ ┣ ┣ ┣ 📂 src
┣ ┣ ┣ ┣ ┣ 📂 Commands
┣ ┣ ┣ ┣ ┣ ┣ 📜 {NamaModuleBaru}Command.php
┣ ┣ ┣ ┣ ┣ 📂 Config
┣ ┣ ┣ ┣ ┣ ┣ 📜 {nama-module-baru}.php
┣ ┣ ┣ ┣ ┣ 📂 Facades
┣ ┣ ┣ ┣ ┣ ┣ 📜 {NamaModuleBaru}Module.php
┣ ┣ ┣ ┣ ┣ 📂 Providers
┣ ┣ ┣ ┣ ┣ ┣ 📜 {NamaModuleBaru}ModuleServiceProvider.php
┣ ┣ ┣ ┣ ┣ 📂 Routes
┣ ┣ ┣ ┣ ┣ ┣ 📜 api.php
┣ ┣ ┣ ┣ ┣ ┣ 📜 web.php
┣ ┣ ┣ ┣ ┣ 📂 Controllers
┣ ┣ ┣ ┣ ┣ ┣ 📜 {NamaModuleBaru}Controller.php
┣ ┣ ┣ ┣ ┣ 📂 Migrations
┣ ┣ ┣ ┣ ┣ ┣ 📜 YYYY_mm_dd_ttttt_create_{nama-module-baru}_table.php
┣ ┣ ┣ ┣ ┣ 📂 Seeders
┣ ┣ ┣ ┣ ┣ ┣ 📜 Badaso{NamaModuleBaru}FixedMenuItemSeeder.php
┣ ┣ ┣ ┣ ┣ ┣ 📜 Badaso{NamaModuleBaru}MenusSeeder.php
┣ ┣ ┣ ┣ ┣ ┣ 📜 Badaso{NamaModuleBaru}ModuleSeeder.php
┣ ┣ ┣ ┣ ┣ ┣ 📜 Badaso{NamaModuleBaru}PermissionsSeeder.php
┣ ┣ ┣ ┣ ┣ ┣ 📜 Badaso{NamaModuleBaru}RolePermissionsSeeder.php
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
┣ ┣ ┣ ┣ ┣ 📜 {NamaModuleBaru}Module.php
┣ ┣ ┣ ┣ 📜 composer.json
````

## Composer Json

1. Tambahkan isi file `./badaso-develop-project/packages/badaso/{nama-module-baru}-module/composer.json`

```
{
    {
        "name": "badaso/{nama-module-baru}",
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
                "Uasoft\\Badaso\\Module\\{NamaModuleBaru}\\": "src/"
            }
        },
        "extra": {
            "laravel": {
                "providers": [
                    "Uasoft\\Badaso\\Module\\{NamaModuleBaru}\\Providers\\{NamaModuleBaru}ModuleServiceProvider"
                ]
            }
        }
    }
}
```

Pada require dapat menambahkan library baru untuk kebutuhan module

## Class Module

1. Tambahkan isi file `./badaso-develop-project/packages/badaso/{nama-module-baru}-module/src/{NamaModuleBaru}Module.php`

```
<?php

namespace Uasoft\Badaso\Module\{NamaModuleBaru};

class {NamaModuleBaru}Module {

}
```

## Facades

1. Tambahkan isi file `./badaso-develop-project/packages/badaso/{nama-module-baru}-module/src/Facades/{NamaModuleBaru}Module.php`

```
<?php

namespace Uasoft\Badaso\Module\{NamaModuleBaru}\Facades;

use Illuminate\Support\Facades\Facade;

class {NamaModuleBaru}Module extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return '{nama-module-baru}-module';
    }
}
```

## Config

Berisikan config module yang nanti akan di publish ke config project laravel

1. Tambahkan isi file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/Config/{nama-module-baru}.php`

```
<?php

return [
    // todo other config...
];
```

## Seeders

Secara default module badaso memili 5 file utama untuk untuk seeder pada path `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/Seeders`

1. Badaso{NamaModuleBaru}PermissionsSeeder.php

   Seeder ini menambahkan permission untuk kebutuhan operasi module, untuk setiap permission administrator dapat berperan sebagai role pada generate permission yang di buat, tambahan isi file :

   ```md title="./badaso-develop/packages/badaso/{nama-module-baru}-module/src/Seeders/Badaso{NamaModuleBaru}PermissionsSeeder.php"
   namespace Database\Seeders\Badaso\{NamaModuleBaru};

   use Illuminate\Database\Seeder;
   use Uasoft\Badaso\Models\Permission;

   class Badaso{NamaModuleBaru}PermissionsSeeder extends Seeder
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

   - {model_table_name} merupakan nama tabel yang digunakan module
   - {description_permission} merupakan deskripsi dari permission
   - `Permission::generateFor('{module_table_name}')` merupakan helper yang digunakan untuk generate permission untuk crud generate pada table, helper init otomatis akan melakukan generate terhadap permission dan role yang untuk administrator

2. Badaso{NamaModuleBaru}RolePermissionsSeeder.php

   Berisikan generate role untuk administrator pada permissions yang telah di buat pada seeder permission, tambahkan isi file :

   ```
   <?php

   namespace Database\Seeders\Badaso\{NamaModuleBaru};

   use Illuminate\Database\Seeder;
   use Uasoft\Badaso\Models\Permission;
   use Uasoft\Badaso\Models\Role;
   use Uasoft\Badaso\Models\RolePermission;

   class Badaso{NamaModuleBaru}RolePermissionsSeeder extends Seeder
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

3. Badaso{NamaModuleBaru}MenusSeeder.php

   Jika modul yang dibuat membutuhkan menu group baru untuk ditampilkan pada sitebar, dapat menampilkan seeder untuk menu tersebut, tambahkan isi file

   ```
   <?php

   namespace Database\Seeders\Badaso\{NamaModuleBaru};

   use Illuminate\Database\Seeder;
   use Uasoft\Badaso\Models\Menu;

   class Badaso{NamaModuleBaru}MenusSeeder extends Seeder
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
                   'key' => '{nama-module-baru}',
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

   - {nama-module-baru} berisikan nama module
   - {nama-module-display} nama yang akan di tampilkan pada sidebar group menu

4. Badaso{NamaModuleBaru}FixedMenuItemSeeder.php

   Menambahkan menu item pada menu group telah dibuat pada seeder menu, menu item ini akan di tampilkan pada sidebar, tambahan isi file

   ```
   <?php

   namespace Database\Seeders\Badaso\{NamaModuleBaru};

   use Illuminate\Database\Seeder;
   use Uasoft\Badaso\Models\Menu;
   use Uasoft\Badaso\Models\MenuItem;

   class Badaso{NamaModuleBaru}FixedMenuItemSeeder extends Seeder
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
               $menus = Menu::where('key', '{nama-module-baru}')->first();
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

   Terdapat beberapa field untuk menambahkan menu item baru,

   - menu_id : merupakan id dari menu, untuk membuat menu item
   - title : nama dari menu
   - url : url menu jika event klik
   - target : \_self | \_blank
   - icon_class : icon berasal dari [google font material icon](https://fonts.google.com/icons?selected=Material+Icons+Outlined:assignment_returned)
   - color : warna menu
   - parent_id : id dari menu item
   - order : urutan menu item
   - permissions : nama pemission untuk menu item

5. Badaso{NamaModuleBaru}ModuleSeeder.php

   Menjalankan semua seeder dalam satu file seeder

   ```
   <?php

   namespace Database\Seeders\Badaso\{NamaModuleBaru};

   use Illuminate\Database\Seeder;

   class Badaso{NamaModuleBaru}ModuleSeeder extends Seeder
   {
       /**
       * Run the database seeds.
       *
       * @return void
       */
       public function run()
       {
           $this->call(Badaso{NamaModuleBaru}PermissionsSeeder::class);
           $this->call(Badaso{NamaModuleBaru}RolePermissionsSeeder::class);
           $this->call(Badaso{NamaModuleBaru}MenusSeeder::class);
           $this->call(Badaso{NamaModuleBaru}FixedMenuItemSeeder::class);
       }
   }
   ```

## Commands

Untuk standar pembuatan modul badaso, memiliki command setup untuk publis file seperti config dan seeder

1. Tambahkan isi file `./badaso-develop-project/packages/badaso/{nama-module-baru}-module/src/Commands/{NamaModuleBaru}Command.php`

```
<?php

namespace Uasoft\Badaso\Module\{NamaModuleBaru}\Commands;

use Illuminate\Console\Command;
use Symfony\Component\VarExporter\VarExporter;

class {NamaModuleBaru}Setup extends Command
{
    private $force;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = '{nama-module-baru}:setup {--force=false}';

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
                '--tag' => '{nama-module-baru}-module',
                '--force' => $this->force,
            ]);
        } catch (\Exception $e) {
            $this->error($e->getMessage());
        }
    }
}
```

## Controllers

Menambahkan controller baru untuk route api atau web, tambahkan isi file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/Controllers/{NamaModuleBaru}Controller.php`

```
<?php

namespace Uasoft\Badaso\Module\{NamaModuleBaru}\Controllers;

use App\Http\Controllers\Controller;

class {NamaModuleBaru}Controller extends Controller
{

}
```

## Routes

Tambahkan route web atau api untuk module

### Api

1. Tambahkan isi file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/Routes/api.php`

```
<?php

Route::group([
    'prefix' => '/api',
    'namespace' => 'Uasoft\Badaso\Module\{NamaModuleBaru}\Controllers',
    'as' => '{nama-module-baru}.',
    'middleware' => [Uasoft\Badaso\Middleware\ApiRequest::class]
], function () {
    // todo other api route...
});
```

### Web

1. Tambahkan isi file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/Routes/web.php`

```
<?php

Route::group([
    'prefix' => '/',
    'namespace' => 'Uasoft\Badaso\Module\{NamaModuleBaru}\Controllers',
    'as' => '{nama-module-baru}.',
    'middleware' => [Uasoft\Badaso\Middleware\ApiRequest::class]
], function () {
    // todo other web route
});
```

## Migrations

Jika memiliki migration table, dapat menambahkan class migration table pada folder Migrations, contoh sample file migration `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/Migrations/YYYY_mm_dd_ttttt_create_{nama-table-baru}_table.php`

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

1. Tambahkan isi file `./badaso-develop-project/packages/badaso/{nama-module-baru}-module/src/Providers/{NamaModuleBaru}ModuleServiceProvider.php`

```
<?php

namespace Uasoft\Badaso\Module\{NameModuleBaru}\Providers;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;
use Uasoft\Badaso\Module\{NameModuleBaru}\{NamaModuleBaru}Module;
use Uasoft\Badaso\Module\{NameModuleBaru}\Commands\{NamaModuleBaru}Setup;
use Uasoft\Badaso\Module\{NameModuleBaru}\Facades\{NamaModuleBaru}Module as Facades{NamaModuleBaru}Module;

class {NamaModuleBaru}ModuleServiceProvider {
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $loader = AliasLoader::getInstance();
        $loader->alias('{NamaModuleBaru}Module', Facades{NamaModuleBaru}Module::class);

        $this->app->singleton('{nama-module-baru}-module', function () {
            return new {NamaModuleBaru}Module();
        });

        $this->loadMigrationsFrom(__DIR__.'/../Migrations');
        $this->loadRoutesFrom(__DIR__.'/../Routes/web.php');
        $this->loadRoutesFrom(__DIR__.'/../Routes/api.php');

        $this->publishes([
            __DIR__.'/../Config/{nama-module-baru}.php' => config_path('{nama-module-baru}.php'),
            __DIR__.'/../Seeder' => database_path('seeders/Badaso/Content'),
        ], '{nama-module-baru}-module');
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
        $this->commands({NamaModuleBaru}Setup::class);
    }
}
```

## Resouce

### api

Pada directory api dapat menambahkan file request api dengan base axios, tambahkan file baru pada directory `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/api/modules`, pada contoh ini terdapat file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/api/modules/example-request.js` dengan isi 
```
import resource from "../../../../../../core/src/resources/js/api/resource";
import QueryString from "../../../../../../core/src/resources/js/api/query-string";

let apiPrefix = process.env.MIX_API_ROUTE_PREFIX
  ? "/" + process.env.MIX_API_ROUTE_PREFIX
  : "/badaso-api";

export default {
  
};
``` 

Tambahkan isi file dynamic import semua file yang ada pada directory modules `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/api/index.js`

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

Contoh file yang dapat di implemtasikan pada strukture

```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {nama-module-baru}-module // nama module baru yang akan dibuat
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

Pada directory components dapat menambahkan beberapa file component baru, setelah file component baru di buat dapat di inisialisasi pada file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/components/index.js`.

Untuk file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/components/index.js` berisi

```
// import ComponentVue from 'component-vue.vue'

export default  {
    // todo export components...
    // ComponentVue,
};
```

Contoh file yang dapat di implemtasikan pada strukture

```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {nama-module-baru}-module // nama module baru yang akan dibuat
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

1. Untuk isi file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/lang/index.js`

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

2. Buat folder baru untuk menampung file lang dengan nama `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/lang/moduels`

3. Buat file baru untuk menampung bahasa, disini dicontohkan untuk membuat file lang untuk indonesia dan ingris dengan kode id `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/lang/moduels/id.js`

```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {nama-module-baru}-module // nama module baru yang akan dibuat
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

4. isi file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/lang/moduels/id.js`

```
export default {
    example : "contoh",
}
```

### pages

Pada directory pages dapat menambahkan page baru untuk kebutuhan page pada dashboard, buat folder baru `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/pages/content`, pada bagian ini di dicontohkan mebuat page example dengan path `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/pages/content/example-page.vue` dengan isi

```
<template>
</template>
<script>
export default {

}
</script>
```
Tambahkan page yang dibuat pada file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/pages/index.vue`

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

Contoh file yang dapat di implemtasikan pada strukture

```md title="strukture directory"
📦 badaso-develop-project
┣ 📂 packages
┣ ┣ 📂 badaso
┣ ┣ ┣ 📂 core
┣ ┣ ┣ 📂 {nama-module-baru}-module // nama module baru yang akan dibuat
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

1. Tambahkan isi file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/pages/index.vue`

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

2. Tambahkan isi file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/pages/excludeRouter.js`

```
export default [

];
```

### store

1. Tambahkan isi file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/store/badaso.js`

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

Berisikan helper - helper yang dapat digunakan untuk keperluan modulu pada view page atau component

1. Tambahkan isi file `./badaso-develop/packages/badaso/{nama-module-baru}-module/src/resources/js/utils/content-helper.js`

```
export default {
  // createAMetodFunction(param1, param2) {},
}
```

## Dokumentasi Detail Buat Laravel Packages
[Laravel Packages Details](https://laravelpackage.com/#reasons-to-develop-a-package)