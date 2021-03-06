---
docId: "uploadimagemultiple"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/upload-image-multiple.md
---

# Upload Image Multiple

Badaso menyediakan sebuah komponen untuk mengunggah beberapa file gambar sekaligus, yaitu BadasoUploadImageMultiple. Setiap file yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend. Beda dengan BadasoUploadFile, BadasoUploadImage dan BadasoUploadImageMultiple akan langsung menampilkan gambar setelah diunggah. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
  "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadImageMultiple

Kode di bawah merupakan sampel untuk penggunaan BadasoUploadImageMultiple pada Vue Template.

```bash
<badaso-upload-image-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-image-multiple>
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
    default: "Upload Image Multiple",
},
placeholder: {
    type: String,
    default: "Upload Image Multiple",
},
value: {
    type: Array,
    default: () => {
    return [];
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
