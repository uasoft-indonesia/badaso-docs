---
docId: "tags"
---

# Tags
Badaso provides an input component in the form of tags, namely BadasoTags. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoTags 
The code below is a sample for using BadasoTags on the Vue Template.
```bash
<badaso-tags
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-tags>
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
    default: "Tags",
},
placeholder: {
    type: String,
    default: "Tags",
},
value: {
    type: String,
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