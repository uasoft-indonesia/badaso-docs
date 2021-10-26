---
docId: "number"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/number.md
---

# Number

Badaso menyediakan sebuah komponen input berupa angka, yaitu BadasoNumber. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
  "size": "6" // 1-12 default 12
}
```

## View: BadasoNumber

Kode di bawah merupakan sampel untuk penggunaan BadasoNumber pada Vue Template.

```bash
<badaso-number
  :label="label"
  :placeholder="placeholder"
  v-model="model"
  size="12"
  :alert="error"
>
</badaso-number>
```

## `props`

Berikut merupakan daftar props yang disediakan komponen ini.

```js
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Number"
},
placeholder: {
    type: String,
    default: "Number"
},
value:  {
    type: String,
    required: true,
    default: ''
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
