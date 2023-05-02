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

## Example
Misalnya, kamu memiliki tabel food_categories dan kamu ingin override controller pada method browse.

- Buat Controller baru untuk di override
```bash 
php artisan make:controller NewController
```
- Extend class BadasoBaseController dan impor beberapa kode penting di pengontrol baru.
  
  Kamu dapat memeriksa detail lebih lanjut di vendor/badaso/core/src/Controllers/BadasoBaseController.

- Kamu bisa menyalin semua isi method browse lalu menempelkannya di controller yang baru.

  ![Override controller browse controller](/img/override-controller-browse-controller.png)

- Misalnya, pada override ini kamu ingin menambahkan message "hello world". Kamu bisa menambahkan datanya seperti ini
  ```
    $data['message'] = "hello world";
  ```

  ![Override controller update browse](/img/override-controller-update-browse.png)

  Jika controller baru sudah di ubah, kamu bisa klik save.

- Setelah itu, pergi ke aplikasi badaso, lalu buka crud-management pada tabel food_categories dan pilih Add CRUD.

  ![Override controller crud management](/img/override-controller-crud-management.png)

- Pada crud management, buka tab advanced setting dan akan terlihat controller name. Isi controller name tersebut dengan namespace controller tersebut. Misalnya : 
  ```
  App\Http\Controllers\foodCategoryController
  ```

  ![Override controller menu controller](/img/override-controller-menu-controller.png)

  Jika sudah selesai, klik save.

- Untuk melihat hasil override controller yang dibuat, ada beberapa cara salah satunya dengan membuka **API Documentation**.

- Buka menu **API Documentation**, untuk menjalankan **API Documentation** harus menggunakan token untuk authorization. Maka kamu harus mengambil token tersebut dengan langkah berikut:
    -  Klik kanan lalu pilih inspect
    - Refresh halaman browser kamu
    - Buka tab network
    - Cari nama **user**, lalu pilih
    - pada response header, kamu akan melihat authorization
    - salin semua isi authorization kecuali kata "bearer" sebagai token

  ![Override controller token](/img/override-controller-token.png)

- Kembali ke menu **API Documentation**, setelah mendapatkan token untuk authorization, klik tombol **authorize** lalu paste token tersebut pada **value** lalu klik authorize.

  ![Override controller add token](/img/override-controller-add-token.png)

- Setelah itu, cari menu food-categories lalu pilih browse, biasanya untuk menu browse berada pada urutan yang paling atas.

  ![Override controller try api docs](/img/override-controller-try-api-docs.png)

- Lalu klik tombol **try it out**, kemudian tekan tombol **execute**

- Kamu akan melihat hasil override controller yang kamu buat pada response di property message

  ![Override controller result](/img/override-controller-result.png)



