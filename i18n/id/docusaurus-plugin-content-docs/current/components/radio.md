---
docId: "radio"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/radio.md
---

# Radio

Badaso menyediakan sebuah komponen input berupa pilihan dengan radio button, yaitu BadasoRadio. Pada saat generate CRUD, lebar container untuk komponen ini dapat diatur pada Optional Details dengan format seperti kode di bawah. Untuk menggunakan radio, pada saat membuat CRUD properti `items` pada Optional Details harus diisi.

```json
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

Kode di bawah merupakan sampel untuk penggunaan BadasoRadio pada Vue Template.

```bash
<badaso-radio
  :label="label"
  :placeholder="placeholder"
  v-model="model"
  size="12"
  :alert="error"
  :items="items"
>
</badaso-radio>
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
