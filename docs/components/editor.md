---
docId: "editor"
---

# Editor
Badaso provides an input component for text in HTML format, namely BadasoEditor. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoEditor
The code below is a sample for using BadasoEditor on the Vue Template.
```bash
<badaso-editor
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-editor>
```

## `props`
The following is a list of props provided by BadasoEditor.
```bash
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Editor",
},
placeholder: {
    type: String,
    default: "Editor",
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