---
docId: 'search'
---

# Search

Badaso provides an input component for search, namely BadasoSearch. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
  "size": "6", // 1-12 default 12
}
```

## View: BadasoSearch 
The code below is a sample for using BadasoSearch in the Vue Template.

```bash
<badaso-search
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-search>
```

## `props`
Below is a list of props that this component provides.
```bash
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Search"
},
placeholder: {
    type: String,
    default: "Search"
},
value:  {
    type: String,
    required: true,
    default: ''
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
},
```