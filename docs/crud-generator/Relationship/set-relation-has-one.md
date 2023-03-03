---
docId: 'setrelationhasone'
sidebar_position: 1
---

# Relation Has One

Badaso provides a feature to use Has One relation. For more details about belongs to, you can visit [documentation laravel](https://laravel.com/docs/10.x/eloquent-relationships#one-to-one).


## Set Relation Has One
For use this feature, you can follow the step below:
- Previously, using CRUD Management, first create a table that will generate CRUD. Example "books".

- Open CRUD Management, and edit the table that has been create.

    ![Add relation belongs to](/img/Add-relation-belongs-to.png)

- Set the column according to what you want, in the column that is used as a relation, select the input relation type, press the "set relation" button.

    ![Add relation belongs to set input type](/img/Add-relation-belongs-to-set-input-type.png)

- In the form, follow these steps:
    - In Relation Type select "Has One".
    - In Destination Table select table relation.
    - In Destination Column select id.
    - In Destination Column To Display select column to display. for example "name".
    - More Data For API is an optional menu that is used to add data that will be returned by the API.

    ![Add relation belongs to set options](/img/Add-relation-has-one-set-options.png)

- Save and save CRUD. 