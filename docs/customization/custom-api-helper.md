---
docId: "customapihelper"
sidebar_position: 9
---

# Custom API Helper

Badaso provides a [axios](https://github.com/axios/axios) based utility for calling an API. The difference is that resource have inserted headers such as authorization and content-type. Here is an example of calling the API.

```bash
import Vue from 'vue'

Vue.prototype.$resource.get(url); /** equal axios.get(url) **/
```

Badaso also supports for customization API helper. The block below is a directory structure for adding a new API helper.

## Add an API Helper

- To add an API helper, add it to the `modules` directory in `api` directory.

```bash
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 api
┃ ┃ ┃ ┃ ┗ 📜 example-api.js
```

- Below is an example of HTTP request method that you can use.
```bash
example(data = {}) {
  let ep = '/example';
  let qs = QueryString(data);
  let url = ep + qs;
  return Vue.prototype.$resource.get(url);
},
```

```bash
example(data) {
  return Vue.prototype.$resource.post('/example', data);
},
```

```bash
example(data) {
  return Vue.prototype.$resource.put('/example', data);
},
```

```bash
example(data) {
  return Vue.prototype.$resource.patch('/example', data);
},
```

```bash
example(data) {
  let paramData = {
    data: data,
  };
  return Vue.prototype.$resource.delete('/example', paramData);
},
```

- Here is the example of using the custom API helper.

```bash
$api.exampleApi.example(data)
```

```bash
this.$api.exampleApi.example(data)
```