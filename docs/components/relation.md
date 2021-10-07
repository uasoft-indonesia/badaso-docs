---
docId: 'relation'
---

# Relation

Badaso provides a feature to relate data from a table to other tables. When creating a CRUD, the user can link a field from one table to another by selecting which field to relate to, the relationship type and the destination table.

## View
The code below is a sample for using Relation in the Vue Template.

```bash
<badaso-select
    v-if="formType === 'relation' && relationType === 'belongs_to'"
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :items="itemFromRelation"
    :alert="errors">
</badaso-select>
<badaso-text
    v-if="formType === 'relation' && relationType !== 'belongs_to'"
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="errors">
</badaso-text>
```