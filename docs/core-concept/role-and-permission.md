---
docId: "rolepermission"
sidebar_position: 3
---

# User, Role And Permission

## CRUD Generated

Every time a CRUD is created using the CRUD generator, you can decide whether you want to generate permissions or not. If you generate permissions, 5 permissions will be generated automatically with the following format.

- browse\_{{ TABLE_NAME }}
- read\_{{ TABLE_NAME }}
- edit\_{{ TABLE_NAME }}
- add\_{{ TABLE_NAME }}
- delete\_{{ TABLE_NAME }}

For example:

- browse_posts
- read_posts
- edit_posts
- add_posts
- delete_posts

Every permission that is generated will be automatically assigned to the administrator's permission, so users who log in with administrator privileges will immediately have the permission.

## User Management

The following is a user management view. In this feature, users who have logged in can view, edit, add and delete user information and determine the role for that user.

![Docusaurus logo](/img/user-management.png)

## Role Management

The following display is a display of role management features, this feature is used to determine what role will be used on the system, by default there is only 1, namely Administrator.

![Docusaurus logo](/img/role-management.png)

## Permission Management

The following display is a display of role management features, this feature is used to determine what role will be used on the system, by default there is only 1, namely Administrator.

![Docusaurus logo](/img/permission-management.png)

There are 2 kind of permission helpers at badaso :

1. Generated CRUD Permission

    This permission is used to validating user to access the feature of generated CRUD scope.

    ```bash
    isAllowedToModifyGeneratedCRUD('browse', dataType)
    isAllowedToModifyGeneratedCRUD('add', dataType)
    isAllowedToModifyGeneratedCRUD('edit', dataType)
    isAllowedToModifyGeneratedCRUD('delete', dataType)
    isAllowedToModifyGeneratedCRUD('maintenance', dataType)
    isAllowedToModifyGeneratedCRUD('read', dataType)
    ```

2. CRUD Permission

    This perimission is related to user permission to access the feature of customized page and CRUD activity.

    ```bash
    isAllowed('browse_crud_data')
    isAllowed('delete_crud_data')
    isAllowed('add_crud_data')
    isAllowed('edit_crud_data')
    isAllowed('read_crud_data')
    ```

## User Role Management

The following display is a display of role management features, this feature is used to determine what role will be used on the system, by default there is only 1, namely Administrator.

![Docusaurus logo](/img/user-role-management.png)

## Role Permission Management

The following display is a display of role management features, this feature is used to determine what role will be used on the system, by default there is only 1, namely Administrator.

![Docusaurus logo](/img/role-permission-management.png)
