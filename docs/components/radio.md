---
docId: 'radio'
---

# Radio

Badaso provides an input component in the form of a choice with a radio button, namely BadasoRadio. When generating CRUD, the container width for this component can be set in Optional Details with the format shown in the code below. To use radio, when creating a CRUD the `items` property of Optional Details is required.

```bash
{
    "size": "6", // 1-12 default 12
    "items": [
        {
            "label": "This is label",
            "value": "this_is_value"
        }
    ]
}
```

## View: BadasoRadio
The code below is a sample for using BadasoRadio in the Vue Template.

```bash
<badaso-radio
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items">
</badaso-radio>
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
    default: "Radio",
},
placeholder: {
    type: String,
    default: "Radio",
},
value: {
    type: String,
    required: true,
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