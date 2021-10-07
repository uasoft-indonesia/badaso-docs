---
docId: "selectmultiple"
---

# Select Multiple
Badaso provides an input component in the form of several choices at once with a dropdown, namely BadasoSelectMultiple. When generating CRUD, the width of this component can be set in Optional Details with the format shown in the code below. To use radio when creating a CRUD, the `items` property in Optional Details is required.

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

## View: BadasoSelectMultiple
The code below is a sample for using BadasoSelectMultiple on the Vue Template.
```bash
<badaso-select-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items">
</badaso-select-multiple>
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
    default: "Select Multiple",
},
placeholder: {
    type: String,
    default: "Select Multiple",
},
value: {
    type: Array,
    default: () => {
    return []
    },
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