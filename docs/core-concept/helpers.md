---
docId: "helpers"
sidebar_position: 6
---

# Helper References

## Javascript

### `formatDate`

Badaso provides a helper utility to change the date according to the specified format. The date format configuration can be changed in the file `.env`.

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

The following helper is used to check whether an object value is empty or not.

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

Badaso provides a helper for converting the case keys of an array and the properties of an object to specified cases.

```bash
CaseConvert::camel($object)
```

```bash
CaseConvert::snake($object)
```

```bash
CaseConvert::pascal($object)
```

The following is an example of the output of the helper.

```bash
input: {
    "product_id": 1
}

output: {
    "productId": 1
}
```

### `AuthenticatedUser`

The following helper is a helper to get information related to an incoming user or API caller using the JWT token. The information that available is user information, role and permissions.

```bash
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

Helper `ApiResponse` is a helper for generating API output from the controller according to Badaso standards.

```bash
ApiResponse::success($reponse_data)
```

```bash
ApiResponse::failed($reponse_data)
```
