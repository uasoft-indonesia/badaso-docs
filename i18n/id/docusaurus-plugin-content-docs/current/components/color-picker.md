---
docId: "colorpicker"
---

# Color Picker

Badaso menyediakan komponen untuk color picker, yaitu BadasoColorPicker, yang dapat diatur lebarnya dengan menambahkan properti `size` pada Optional Details saat generate CRUD.

```JSON
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoColorPicker

Berikut merupakan sampel kode untuk penggunakan BadasoColorPicker di dalam Vue Template.

```bash
<badaso-color-picker
  :label="label"
  :placeholder="placeholder"
  v-model="model"
  size="12"
  :alert="error"
>
</badaso-color-picker>
```

## `props`

Berikut merupakan daftar props yang disediakan komponent ini.

```js
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
