---
docId: "helpers"
sidebar_position: 6
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/core-concept/helpers.md
---

# Helper References

## Javascript

### `formatDate`

Badaso menyediakan utilitas helper untuk mengubah tanggal sesuai dengan format yang ditentukan. Konfigurasi format tanggal dapat diubah pada file `.env`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="template" label="Template" default>

    $helper.formatDate(date)

  </TabItem>
  <TabItem value="script" label="Script">

    this.$helper.formatDate(date)

  </TabItem>
</Tabs>

### `isObjectEmpty`

Helper berikut digunakan untuk memeriksa apakah sebuah nilai object adalah kosong atau tidak.

<Tabs>
  <TabItem value="template" label="Template" default>

    $helper.isObjectEmpty

  </TabItem>
  <TabItem value="script" label="Script">

    this.$helper.isObjectEmpty

  </TabItem>
</Tabs>

## PHP

### `CaseConvert`

Badaso menyediakan sebuah helper untuk mengubah case key dari sebuah array dan property dari sebuah object menjadi kasus yang ditentukan.

```bash
CaseConvert::camel($object)
```

```v
CaseConvert::snake($object)
```

```bash
CaseConvert::pascal($object)
```

Berikut ini merupakan contoh output dari helper tersebut.

```json
input: {
    "product_id": 1
}

output: {
    "productId": 1
}
```

### `AuthenticatedUser`

Helper berikut merupakan helper untuk mendapatkan informasi terkait user yang login atau pemanggil API menggunakan JWT token. Informasi yang tersedia yaitu informasi user, role dan permission.

```v
AuthenticatedUser::getUser()
```

```bash
AuthenticatedUser::getRoles($user_id)
```

```bash
AuthenticatedUser::getPermissions($user_id)
```

```bash
AuthenticatedUser::isAllowedTo($permissions_string)
```

### `ApiResponse`

Helper ApiResponse merupakan helper untuk membuat output API dari controller sesuai standar Badaso.

```bash
ApiResponse::success($reponse_data)
```

```bash
ApiResponse::failed($reponse_data)
```
