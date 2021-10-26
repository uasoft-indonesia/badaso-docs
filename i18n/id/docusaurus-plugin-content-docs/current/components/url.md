---
docId: "url"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/url.md
---

# URL

Badaso menyediakan sebuah komponen input berupa URL, yaitu BadasoUrl. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
  "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadFile

Kode di bawah merupakan sampel untuk penggunaan BadasoUrl pada Vue Template.

```bash
<badaso-url
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-url>
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
    default: "URL"
},
placeholder: {
    type: String,
    default: "URL"
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

:::info
Untuk props <code>type</code>, dapat dipilih antara <code>private-only</code> atau <code>shares-only</code>.
:::
