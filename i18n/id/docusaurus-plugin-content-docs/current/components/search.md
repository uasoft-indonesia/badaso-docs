---
docId: "search"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/search.md
---

# Search

Badaso menyediakan sebuah komponen input untuk pencarian, yaitu BadasoSearch. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
  "size": "6" // 1-12 default 12
}
```

## View: BadasoSearch

Kode di bawah merupakan sampel untuk penggunaan BadasoSearch pada Vue Template.

```bash
<badaso-search
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-search>
```

## `props`

Below is a list of props that this component provides.

```js
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Search"
},
placeholder: {
    type: String,
    default: "Search"
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
