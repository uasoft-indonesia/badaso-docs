---
docId: "uploadmfileultiple"
---

# Upload File Multiple
Badaso provides a component that uploads multiple files at once, namely BadasoUploadFileMultiple. Each uploaded file will be generated as base64 to be sent to the backend. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadFileMultiple 
The code below is a sample for using BadasoUploadFileMultiple on the Vue Template.
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
Below is a list of props that this component provides.
```bash
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
For `type` props, you can choose `private-only` or `shares-only`.
:::