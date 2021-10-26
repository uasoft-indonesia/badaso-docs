---
docId: "hidden"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/hidden.md
---

# Hidden

Badaso menyediakan sebuah komponen input tersembunyi, yaitu BadasoHidden. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
    "size": "6" // 1-12 default 12
    "value": ""
}
```

## View: BadasoHidden

Kode di bawah merupakan sampel untuk penggunaan BadasoHidden pada Vue Template.

```bash
<badaso-hidden
  :label="label"
  :placeholder="placeholder"
  v-model="model"
  :alert="error"
>
</badaso-hidden>
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
    default: "Text",
},
placeholder: {
    type: String,
    default: "Text",
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
