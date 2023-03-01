---
docId: "data-identifer"
---

# Data Identifer
Badaso provides a hidden input component and send user id   , namely BadasoDataIdentifier. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
    "value": ""
}
```

## View: BadasoDataIdentifier
The code below is a sample for using BadasoDataIdentifier on the Vue Template.
```bash
<badaso-data-identifier
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    :alert="error">
</badaso-data-identifier>
```

## `props`
The following is a list of props provided by BadasoDataIdentifer.
```bash
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Text",
},
placeholder: {
    type: String,
    default: "Text",
},
value: {
    type: String,
    required: true,
    default: "",
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