---
docId: "uploadimagemultiple"
---

# Upload Image Multiple
Badaso provides a component for uploading multiple image files at once, namely BadasoUploadImageMultiple. Each uploaded file will be generated as base64 to be sent to the backend. Unlike BadasoUploadFile, BadasoUploadImage and BadasoUploadImageMultiple will display images immediately after uploading. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadImageMultiple 
The code below is a sample for using BadasoUploadImageMultiple on the Vue Template.
```bash
<badaso-upload-image-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-image-multiple>
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
    default: "Upload Image Multiple",
},
placeholder: {
    type: String,
    default: "Upload Image Multiple",
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