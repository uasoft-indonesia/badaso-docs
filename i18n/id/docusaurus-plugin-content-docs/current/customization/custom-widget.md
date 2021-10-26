---
docId: "customwidget"
sidebar_position: 6
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/customization/custom-widget.md
---

# Custom Widget

Badaso mendukung untuk membuat dan menampilkan widget pada halaman dashboard. Badaso juga menyediakan widget default (widget user, role dan permission). Berikut tampilan dari widget tersebut.

![Docusaurus logo](/img/widget.png)

## Add Widget

- Buat sebuah file php pada folder `app\Widgets` (jika folder belum ada, maka buat folder terlebih dahulu). Lalu isi file tersebut dengan template berikut.

```bash
📦Your Project
┣ 📂app
┃ ┣ 📂Widgets /** register your widget here **/
┃ ┃ ┗ 📜ExampleWidget.php
```

```bash
<?php

namespace App\Widgets;

use Uasoft\Badaso\Interfaces\WidgetInterface;

class ExampleWidget implements WidgetInterface
{
    /**
     * Set permission for widget
     * set null to allow all role
     * multiple permission allowed, separate by comma.
     */
    public function getPermissions()
    {
        return 'browse_permissions';
    }

    public function run($params = null)
    {
        return [
            'label' => 'Label', /** Fill in the label as desired **/
            'value' => 0,       /** Fill in the value as desired **/
            'icon' => 'lock', /** Fill in the icon as desired from material icon **/
            'max' => 70, /** Fill in the value as desired **/
        ];
    }
}
```

- Kemudian tambahkan file atau class yang baru dibuat ke dalam file konfigurasi `config\badaso.php`.

```bash
<?php

return [
    ...
    'widgets' => [
        'Uasoft\\Badaso\\Widgets\\UserWidget',
        'Uasoft\\Badaso\\Widgets\\RoleWidget',
        'Uasoft\\Badaso\\Widgets\\PermissionWidget',
        'App\\Widgets\\ExampleWidget', /** Register the widget here **/
    ],
];
```
