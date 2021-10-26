---
docId: "checkbox"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/checkbox.md
---

# Checkbox

Pada saat membuat CRUD, bagian Optional Details checkbox dapat di isi dengan JSON seperti di bawah. Properti `items` harus diisi sedangkan `size` tidak harus diisi karena secara default sudah diisi 12. Properti `items` berguna sebagai content checkbox sedangkan `size` berfungsi untuk mengatur lebar container checkbox.

```json
{
  "size": "6", // 1-12 default 12
  "items": [
    {
      "label": "This is label",
      "value": "this_is_value"
    }
  ]
}
```

## View: BadasoCheckbox

Badaso menyediakan komponen Vue untuk penggunaan checkbox, yaitu BadasoCheckbox. Penggunaan BadasoCheckbox dapat dilihat pada sampel kode di bawah.

```bash
<badaso-checkbox
  :label="label"
  :placeholder="placeholder"
  v-model="model"
  size="12"
  :alert="error"
  :items="items"
>
</badaso-checkbox>
```

## `props`

Untuk penggunaan BadasoCheckbox terdapat beberapa props yang harus diisi dan opsional. Kode di bawah merupakan daftar props untuk BadasoCheckbox.

```js
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Checkbox",
},
placeholder: {
    type: String,
    default: "Checkbox",
},
value: {
    type: Array,
    required: true,
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

:::info

Props `value` diisi dengan menggunakan v-model.

:::
