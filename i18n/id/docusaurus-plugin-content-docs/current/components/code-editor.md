---
docId: "codeeditor"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/code-editor.md
---

# Code Editor

Badaso menyediakan sebuah komponen editor teks untuk input berupa kode. Saat generate CRUD untuk tipe kode, bagian Optional Details dapat diisi dengan JSON yang memiliki properti `size` untuk mengatur lebar container kode editor teks.

```json
{
  "size": "6" // 1-12 default 12
}
```

## View: BadasoCode

Kode di bawah merupakan sampel untuk penggunaan BadasoCodeEditor pada Vue Template.

```bash
<badaso-code-editor
  :label="label"
  :placeholder="placeholder"
  v-model="model"
  size="12"
  :alert="error"
>
</badaso-code-editor>
```

## `props`

Berikut merupakan daftar props yang disediakan BadasoCodeEditor.

```js
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
