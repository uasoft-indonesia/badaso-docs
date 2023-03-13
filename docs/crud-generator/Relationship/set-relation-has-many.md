---
docId: 'setrelationhasmany'
sidebar_position: 2
---

# Relation Has Many

Badaso provides a feature to use Has Many relation. For more details about Has Many, you can visit [documentation laravel](https://laravel.com/docs/10.x/eloquent-relationships#one-to-many).


## Set Relation Has Many
For use this feature, you can follow the step below:
- Previously, using CRUD Management, first create a table that will generate CRUD. Example "books" dan "categories".

- Create a CRUD management for the "books" table, then create a CRUD management for the "categories" table as shown below:

    - Click button "set other relation".
        ![Add relation Has Many](/img/Add-relation-has-one.png)

    - Choice relation type, destination table, destination column, and destination column to display.
        ![Add relation Has Many set options](/img/Add-relation-has-many-set-options.png)

    - but, if you have table polymorphism, you can use that with feature advanced setting and choice polymorphism table.
        ![after add relation has Many](/img/after-make-relation-has-one.png)

- Save and save CRUD. 

### Result

![Result has Many](/img/result-has-many.png)