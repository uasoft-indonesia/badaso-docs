---
docId: "selectmultiple"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/select-multiple.md
---

# Select Multiple

Badaso menyediakan sebuah komponen input berupa beberapa pilihan sekaligus dengan dropdown, yaitu BadasoSelectMultiple. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti kode di bawah. Untuk menggunakan radio pada saat membuat CRUD, properti `items` pada Optional Details harus diisi.

```json
{
    "size": "6" // 1-12 default 12
    "items": [
        {
            "label": "This is label",
            "value": "this_is_value"
        }
    ]
}
```

## View: BadasoSelectMultiple

Kode di bawah merupakan sampel untuk penggunaan BadasoSelectMultiple pada Vue Template.

```bash
<badaso-select-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items">
</badaso-select-multiple>
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
    default: "Select Multiple",
},
placeholder: {
    type: String,
    default: "Select Multiple",
},
value: {
    type: Array,
    default: () => {
    return []
    },
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
