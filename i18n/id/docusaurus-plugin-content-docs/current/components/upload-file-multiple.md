---
docId: "uploadfilemultiple"
---

# Upload File Multiple

Badaso menyediakan sebuah komponen pengunggah beberapa file sekaligus, yaitu BadasoUploadFileMultiple. Setiap file yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
  "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadFileMultiple

Kode di bawah merupakan sampel untuk penggunaan BadasoUploadFileMultiple pada Vue Template.

```bash
<badaso-upload-file-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-file-multiple>
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
    default: "Upload File Multiple",
},
placeholder: {
    type: String,
    default: "Upload File Multiple",
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
