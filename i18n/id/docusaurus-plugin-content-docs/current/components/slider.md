---
docId: "slider"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/slider.md
---

# Slider

Badaso menyediakan sebuah komponen input berupa angka dalam bentuk slider, yaitu BadasoSlider. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
  "size": "6" // 1-12 default 12
}
```

## View: BadasoSlider

Kode di bawah merupakan sampel untuk penggunaan BadasoSlider pada Vue Template.

```bash
<badaso-slider
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-slider>
```

## `props`

Berikut merupakan daftar props yang disediakan komponen ini.

```js
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Slider",
},
placeholder: {
    type: String,
    default: "Slider",
},
min: {
    type: Number,
    default: 0,
},
max: {
    type: Number,
    default: 100,
},
value: {
    type: Number,
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
