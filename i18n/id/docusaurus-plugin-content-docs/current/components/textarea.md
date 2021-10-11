---
docId: "textarea"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/textarea.md
---

# Text Area

Badaso menyediakan sebuah komponen input berupa teks yang lebih panjang, yaitu BadasoTextarea. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
  "size": "6" // 1-12 default 12
}
```

## View: BadasoTags

Kode di bawah merupakan sampel untuk penggunaan BadasoTextarea pada Vue Template.

```bash
<badaso-textarea
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-textarea>
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
    default: "Textarea"
},
placeholder: {
    type: String,
    default: "Textarea"
},
value:  {
    type: String,
    required: true,
    default: 'null'
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
