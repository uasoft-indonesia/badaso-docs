---
docId: 'password'
---

# Password

Badaso provides a component for password input, namely BadasoPassword. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
  "size": "6", // 1-12 default 12
}
```

## View: BadasoPassword
The code below is a sample for using BadasoPassword in the Vue Template.

```bash
<badaso-password
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-password>
```

## `props`
Below is a list of props that this component provides.
```bash
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Password"
},
placeholder: {
    type: String,
    default: "Password"
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