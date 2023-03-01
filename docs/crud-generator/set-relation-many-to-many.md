---
docId: 'setrelationmanytomany'
---

# Relation Many to Many

Badaso provides a feature to relate data from a table to other tables. When creating a CRUD, the user can link a field from one table to another by selecting which field to relate to, the relationship type and the destination table. if you want to use table polymorphism or use relationship Belongs To Many. 

To make relation many to many, you must have minimal two table so that can make relation. 
This feature have two option: 
- First, you can directly create a polymorphism table automatically
- Second, you can create your own polymorphism table

## Set Relation Many to Many
For use this feature, you can follow the step below:
- Click button "set relation many to many".
![Before add relation many to many](/img/before-create-relation-many-to-many.png)

- Choice relation type, destination table, destination column, and destination column to display.
![Choice relation](/img/insert-relation-many-to-many.png)

- but, if you have table polymorphism, you can use that with feature advanced setting and choice polymorphism table.
![advanced setting](/img/relation-many-to-many-advanced-setting.png)

- After save, you have row like this
![Before add relation many to many](/img/after-make-relation-many-to-many.png)

- You can save and you have new polymorphism table.
![Browse relation many to many](/img/browse-crud-relation-many-to-many.png)

## Make Manual Table polymorphism
To create a polymorphism table, you can follow the steps below:
- Open database management, then click add.

- Create a table name.
![Add name table](/img/add-name-table.png)

- Create two fields with the conditions:
    - The first table name is the same as the first primary table with this format: firsttablename_id
    - The name of the second table is the same as the second primary table with this format: secondtablename_id
    - Field Type "Big Integer"
    - Check unsigned
    - In the "index" option, select "foreign", click the blue button.

    - First field relation with tabel primary

    ![Relation first table primary](/img/relation-first-table-primary.png)
    
    - First field relation with tabel primary

    ![Relation second table primary](/img/relation-second-table-primary.png)
    
    - A pop up will appear, select the primary table.
    - On the "field" menu, select "id".
    - On the type menu, select on delete and on cascade.

- All fields will look like below.
![Add field table](/img/add-field-table.png)
    
 - Click the "accept" button and save