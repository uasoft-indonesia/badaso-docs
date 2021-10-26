---
docId: "customwidget"
sidebar_position: 6
---

# Custom Widget

Badaso supports creating and displaying widgets on the dashboard page. Badaso also provides default widget (user, role and permission widget). Here's what the widget looks like.

![Docusaurus logo](/img/widget.png)

## Add Widget

- Create a php file in the `app\Widgets` folder (if the folder does not exist, then create a folder first). Then fill in the file with the following template.

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

- Then add the file or class you just created to the configuration file `config\badaso.php`.

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
