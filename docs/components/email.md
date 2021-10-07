---
docId: "email"
---

# Email
Badaso provides an input component for email, namely BadasoEmail. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoEmail
The code below is a sample for using BadasoEmail on the Vue Template.
```bash
<badaso-email
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-email>
```

## `props`
The following is a list of props provided by BadasoEmail.
```bash
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Email",
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
},
placeholder: {
    type: String,
    default: "Email",
},
value: {
    type: String,
    required: true,
    default: "",
},
readonly: {
    type: Boolean,
    default: false,
},
disabled: {
    type: Boolean,
    default: false,
},
autofocus: {
    type: Boolean,
    default: false,
},
required: {
    type: Boolean,
    default: false,
},
```