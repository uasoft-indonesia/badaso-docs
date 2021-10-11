---
docId: "editor"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/editor.md
---

# Editor

Badaso menyediakan sebuah komponen input untuk teks dengan format HTML, yaitu BadasoEditor. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
  "size": "6" // 1-12 default 12
}
```

## View: BadasoEditor

Kode di bawah merupakan sampel untuk penggunaan BadasoEditor pada Vue Template.

```bash
<badaso-editor
  :label="label"
  :placeholder="placeholder"
  v-model="model"
  size="12"
  :alert="error"
>
</badaso-editor>
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
