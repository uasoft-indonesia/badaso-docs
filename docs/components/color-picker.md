---
docId: "colorpicker"
---

# Color Picker
Badaso provides a component for the color picker, namely BadasoColorPicker, which can be adjusted in width by adding a size property to the Optional Details when generating the CRUD.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoColorPicker
The code below is a sample for using BadasoColorPicker on the Vue Template.
```bash
<badaso-color-picker
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-color-picker>
```

## `props`
The following is a list of props provided by BadasoColorPicker.
```bash
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Color picker",
},
placeholder: {
    type: String,
    default: "Color picker",
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