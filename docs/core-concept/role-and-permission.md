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

1. Permission for Generated CRUD

    This permission is used to validating user to access the feature of generated CRUD scope.

    - `isAllowedToModifyGeneratedCRUD('browse', dataType)` : 

        Whether or not the user may browse the generated CRUD list.

    - `isAllowedToModifyGeneratedCRUD('add', dataType)` : 

        Whether or not the user can add a new generated CRUD for a table.

    - `isAllowedToModifyGeneratedCRUD('edit', dataType)` :

        Whether or not the user can edit the settings from a generated CRUD.

    - `isAllowedToModifyGeneratedCRUD('delete', dataType)` :

        Whether or not the user can delete some generated CRUD.

    - `isAllowedToModifyGeneratedCRUD('maintenance', dataType)` : 

        Whether or not the user can set a status to 'maintenance' the generated CRUD.

    - `isAllowedToModifyGeneratedCRUD('read', dataType)` : 

        Whether or not the user can view or see the generated CRUD.

    ### Example

    For example, you will create an add/create component with `badaso-dropdown-item` component for your **customized CRUD Management** that bring a user to add CRUD for a table, but you want to restrict the permission to some user. Just add it to your component :

    ```bash title="browse.vue"
    <badaso-dropdown-item
        icon="add"
        :to="{ name: 'CrudGeneratedAdd' }"
        v-if="isCanAdd && $helper.isAllowedToModifyGeneratedCRUD('add', dataType)"
    >
    ```

    What if you will make a permission for your **customized edit CRUD Management** named `edit.vue`? Just add it to your code:

    ```bash title="edit.vue"
    <template>
        <div>
            <badaso-breadcrumb-row></badaso-breadcrumb-row>
            <vs-row v-if="$helper.isAllowedToModifyGeneratedCRUD('edit', dataType)">
                // your code
            </vs-row>
        </div>
    <template>
    ```

2. Permission for custom feature

    This perimission is related to user permission to access the feature of customized page and CRUD activity.

    - `isAllowed('browse_crud_data')`

        Whether or not the user may browse the data from a page menu section.

    - `isAllowed('delete_crud_data')`

        Whether or not the user may delete some data from a page menu section.

    - `isAllowed('add_crud_data')`

        Whether or not the user may add a new data from a page menu section.

    - `isAllowed('edit_crud_data')`

        Whether or not the user may edit a data from a page menu section.

    - `isAllowed('read_crud_data')`

        Whether or not the user may view or see a data from a page menu section.

    ### Example

    For example, you will create a broadcast message with `badaso-dropdown-item` component that used to **broadcast** something from `browse.vue`, but you want to restrict the permission to some user. Just add this code to your component :

    ```bash title="browse.vue"
    <badaso-dropdown-item
        icon="edit"
        v-if="$helper.isAllowed('broadcast')"
        :to="{
        name: 'CrudManagementEdit',
        params: { tableName: data[index].tableName },
        }"
    >
    ```

    What if you will make a permission for your **broadcast** named `broadcast.vue`? Just add this to your code:

    ```bash title="edit.vue"
    <template>
        <div>
            <badaso-breadcrumb-row></badaso-breadcrumb-row>
            <vs-row v-if="$helper.isAllowed('broadcast')">
                // your code
            </vs-row>
        </div>
    <template>
    ```
3. Permission for user can only see data created by itself

    This feature is useful for securing each user's data, users can only view the data they create without other users knowing. By default, this feature allows users to only view their data, except administrators.

    -  Role can see all data

       Role can see all data is the option to see all data. The default value is administrator. Roles that are not selected in this menu can only see their own data.

    - Column for identifying user related data

        Column for identify user related data is a field that has a relationship with the user id of the user. This input is useful for separating data according to the user who created it. the default value is "user_id", if there is no "user_id" field in the table, the user can choose a field that has the same function as the "user_id" field, if the field is not found in the table, all user data is displayed.

    ### Example
    For example, a user creates a book table where each book entry cannot be seen by other users. To use the feature, you can following the steps below:
    - Create table "books" with database management.
    - You have to create a column identifier to recognize the user who created the data. By default badaso uses "user_id".
    - Use CRUD management to generate CRUD, in the column identifier use the "data identifier" for Input Type and save.
    - Before you set "user can only see data created by itself", you must add "books" to the roles you want to give control access to.
    - Open the permission management menu, look for the "browse_books" to change then select edit.
    ![Browse Permissionp Data Itself](/img/browse-permissionp-data-itself.png)
    - In the input "Role can see all data", select the role that can see all data.
    - In the "Column for identifying user related data" input, select the field that becomes the identify field related to the user id.
    ![Edit Permission Data Itself](/img/edit-permission-data-itself.png)
    - To create a CRUD with this feature, the User_id or something like that must use the "data identifier" input data.
    ![Data identifier](/img/data-identifier.png)
    
    ## User Role Management

    The following display is a display of role management features, this feature is used to determine what role will be used on the system, by default there is only 1, namely Administrator.

    ![Docusaurus logo](/img/user-role-management.png)

## Role Permission Management

The following display is a display of role management features, this feature is used to determine what role will be used on the system, by default there is only 1, namely Administrator.

![Docusaurus logo](/img/role-permission-management.png)
