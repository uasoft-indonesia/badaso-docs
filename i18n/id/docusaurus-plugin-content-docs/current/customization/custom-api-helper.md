---
docId: "customapihelper"
sidebar_position: 9
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/customization/custom-api-helper.md
---

# Custom API Helper

Badaso menyediakan utilitas berbasis [axios](https://github.com/axios/axios) untuk pemanggilan api. Bedanya resource sudah menyisipkan header seperti authorization dan content-type. Berikut ini contoh pemanggilan api tersebut.

```js
import Vue from "vue";

Vue.prototype.$resource.get(url); /** equal axios.get(url) **/
```

Badaso juga mendukung untuk kustomisasi API helper. Blok di bawah ini adalah struktur direktori untuk menambahkan API helper baru.

## Add an API Helper

- Untuk menambahkan API helper, tambahkan ke direktori `modules` di direktori `api`.

```bash
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 api
┃ ┃ ┃ ┃ ┗ 📜 example-api.js
```

- Di bawah ini adalah contoh HTTP request method yang dapat Anda gunakan.

```js
example(data = {}) {
  let ep = '/example';
  let qs = QueryString(data);
  let url = ep + qs;
  return Vue.prototype.$resource.get(url);
},
```

```js
example(data) {
  return Vue.prototype.$resource.post('/example', data);
},
```

```js
example(data) {
  return Vue.prototype.$resource.put('/example', data);
},
```

```js
example(data) {
  return Vue.prototype.$resource.patch('/example', data);
},
```

```js
example(data) {
  let paramData = {
    data: data,
  };
  return Vue.prototype.$resource.delete('/example', paramData);
},
```

- Berikut adalah contoh penggunaan custom API helper.

```bash
$api.exampleApi.example(data)
```

```bash
this.$api.exampleApi.example(data)
```
