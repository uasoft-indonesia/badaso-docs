---
docId: "url"
---

# URL
Badaso provides an input component in the form of a URL, namely BadasoUrl. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadFile 
The code below is a sample for using BadasoUploadFile on the Vue Template.
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
Below is a list of props that this component provides.
```bash
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
For `type` props, you can choose `private-only` or `shares-only`.
:::