---
docId: "select"
---

# Select
Badaso provides an input component in the form of a dropdown option, namely BadasoSelect. When generating CRUD, the width of this component can be set in Optional Details with the format shown in the code below. To use radio when creating a CRUD, the items property in Optional Details is required.

```bash
{
    "size": "6" // 1-12 default 12
    "items": [
        {
            "label": "This is label",
            "value": "this_is_value"
        }
    ]
}
```

## View: BadasoSelect
The code below is a sample for using BadasoSelect on the Vue Template.
```bash
<badaso-select
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items">
</badaso-select>
```

## `props`
Below is a list of props that this component provides.
```bash
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Select",
},
placeholder: {
    type: String,
    default: "Select",
},
value: {
    type: String,
    required: true,
    default: "",
},
items: {
    type: Array,
    required: true,
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