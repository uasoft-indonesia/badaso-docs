---
docId: "datetime"
---

# Date Time
Badaso provides an input component for date and time, that is BadasoDatetime. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```bash
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoDatetime
The code below is a sample for using BadasoDatetime on the Vue Template.
```bash
<badaso-datetime
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-datetime>
```

## `props`
The following is a list of props provided by BadasoDatetime.
```bash
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Date Time",
},
placeholder: {
    type: String,
    default: "Date Time",
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