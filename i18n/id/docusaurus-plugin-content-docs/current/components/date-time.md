---
docId: "datetime"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/date-time.md
---

# Date Time

Badaso menyediakan sebuah komponen input untuk tanggal dan waktu, yaitu BadasoDatetime. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```JSON
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoDatetime

Kode di bawah merupakan sampel untuk penggunaan BadasoDatetime pada Vue Template.

```bash
<badaso-datetime
  :label="label"
  :placeholder="placeholder"
  v-model="model"
  size="12"
  :alert="error"
>
</badaso-datetime>
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
    default: "Date Time",
},
placeholder: {
    type: String,
    default: "Date Time",
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
