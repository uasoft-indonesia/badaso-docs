---
docId: "textarea"
---

# Text Area
Badaso provides an input component in the form of a longer text, namely BadasoTextarea. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoTags 
The code below is a sample for using BadasoTags on the Vue Template.
```bash
<badaso-textarea
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-textarea>
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
    default: "Textarea"
},
placeholder: {
    type: String,
    default: "Textarea"
},
value:  {
    type: String,
    required: true,
    default: 'null'
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