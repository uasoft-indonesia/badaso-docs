---
docId: "switch"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/switch.md
---

# Switch

Badaso menyediakan sebuah komponen input berupa boolean dengan switch, yaitu BadasoSwitch. Pada saat generate CRUD, lebar container untuk komponen ini dapat diatur pada Optional Details dengan format seperti kode di bawah. Untuk menggunakan switch pada saat membuat CRUD, properti `items` pada Optional Details harus diisi.

```json
{
  "size": "6" // 1-12 default 12
}
```

## View: BadasoSwitch

Kode di bawah merupakan sampel untuk penggunaan BadasoSwitch pada Vue Template.

```bash
<badaso-switch
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-switch>
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
    default: "Switch"
},
placeholder: {
    type: String,
    default: "Switch"
},
onLabel: {
    type: String,
    default: "On"
},
offLabel: {
    type: String,
    default: "Off"
},
value:  {
    type: Boolean,
    required: true,
    default: false
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
