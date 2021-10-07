---
docId: "codeeditor"
---

# Code Editor
Badaso provides a text editor component for code input. When generating a CRUD for a code type, the Optional Details section can be filled with JSON which has a size property to set the width of the text editor code container.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoCode
The code below is a sample for using BadasoCodeEditor on the Vue Template.
```bash
<badaso-code-editor
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-code-editor>
```

## `props`
The following is a list of props provided by BadasoCodeEditor.
```bash
value: {
    type: String,
    required: true,
    default: "",
},
size: {
    type: String,
    default: "",
},
label: {
    type: String,
    default: "",
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String | Array,
    default: "",
},
```