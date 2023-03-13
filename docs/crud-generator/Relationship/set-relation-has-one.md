---
docId: 'setrelationhasone'
sidebar_position: 1
---

# Relation Has One

Badaso provides a feature to use Has One relation. For more details about Has One, you can visit [documentation laravel](https://laravel.com/docs/10.x/eloquent-relationships#one-to-one).


## Set Relation Has One
For use this feature, you can follow the step below:
- Previously, using CRUD Management, first create a table that will generate CRUD. Example "books" dan "categories".

- Create a CRUD management for the "books" table, then create a CRUD management for the "categories" table as shown below:

    - Click button "set other relation".
        ![Add relation Has One](/img/Add-relation-has-one.png)

    - Choice relation type, destination table, destination column, and destination column to display.
        ![Add relation Has One set options](/img/Add-relation-has-one-set-options.png)

    - but, if you have table polymorphism, you can use that with feature advanced setting and choice polymorphism table.
        ![after add relation has one](/img/after-make-relation-has-one.png)

- Save and save CRUD. 

### Result

![Result has Many](/img/result-has-one.png)