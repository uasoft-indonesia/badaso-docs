---
docId: "uploadimage"
---

# Upload Image
Badaso provides a component for uploading image files, namely BadasoUploadImage. The uploaded file will be generated as base64 to be sent to the backend. Unlike BadasoUploadFile, BadasoUploadImage and BadasoUploadImageMultiple will display images immediately after uploading. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadImage 
The code below is a sample for using BadasoUploadImage on the Vue Template.
```bash
<badaso-upload-image
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-image>
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
    default: "Upload Image",
},
placeholder: {
    type: String,
    default: "Upload Image",
},
value: {
    type: Object|String,
    default: () => {
    return null;
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