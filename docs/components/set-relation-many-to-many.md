---
docId: 'setrelationmanytomany'
---

# Relation Many to Many

Badaso provides a feature to relate data from a table to other tables. When creating a CRUD, the user can link a field from one table to another by selecting which field to relate to, the relationship type and the destination table. if you want to use table polymorphism or use relationship Belongs To Many. 

## View
The code below is a sample for using Relation in the Vue Template.

```bash
<badaso-select
    v-if="formType === 'relation' && relationType === 'belongs_to_many'"
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :items="itemFromRelation"
    :alert="errors">
</badaso-select>
<badaso-text
    v-if="formType === 'relation' && relationType !== 'belongs_to_many'"
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="errors">
</badaso-text>
```