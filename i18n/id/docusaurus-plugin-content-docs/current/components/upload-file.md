---
docId: "uploadfile"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/upload-file.md
---

# Upload File

Badaso menyediakan sebuah komponen untuk mengunggah file, yaitu BadasoUploadFile. File yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
  "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadFile

Kode di bawah merupakan sampel untuk penggunaan BadasoUploadFile pada Vue Template.

```bash
<badaso-upload-file
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-file>
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
    default: "Upload File",
},
placeholder: {
    type: String,
    default: "Upload File",
},
value: {
    type: Object | String,
    default: () => {
    return {};
    },
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
},
type: {
    type: String,
},
```

:::info
Untuk props <code>type</code>, dapat dipilih antara <code>private-only</code> atau <code>shares-only</code>.
:::
