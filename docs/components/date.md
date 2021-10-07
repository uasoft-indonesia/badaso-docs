---
docId: "date"
---

# Date
Badaso provides an input component for dates, namely BadasoDate. At the time of generating the CRUD, this component can be set to Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoDate
The code below is a sample for using BadasoDate on the Vue Template.
```bash
<badaso-date
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-date>
```

## `props`
The following is a list of props provided by BadasoDate.
```bash
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Date",
},
placeholder: {
    type: String,
    default: "Date",
},
value: {
    type: String,
    required: true,
    default: "",
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