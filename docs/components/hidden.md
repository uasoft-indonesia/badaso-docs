---
docId: "hidden"
---

# Hidden
Badaso provides a hidden input component, namely BadasoHidden. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
    "value": ""
}
```

## View: BadasoHidden
The code below is a sample for using BadasoHidden on the Vue Template.
```bash
<badaso-hidden
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    :alert="error">
</badaso-hidden>
```

## `props`
The following is a list of props provided by BadasoHidden.
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