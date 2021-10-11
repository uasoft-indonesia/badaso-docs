---
docId: "plugins"
sidebar_position: 12
---

# Plugins

Untuk membuat plugin badaso, Anda harus memahami cara membuat paket laravel terlebih dahulu. Anda bisa mempelajarinya [disini](https://laravelpackage.com/).

## Penamaan

Plugin Badaso menggunakan slug untuk penamaannya, contoh: **badaso-blog-module**. Plugin itu sendiri harus setingkat dengan direktori badaso core agar bisa mendeteksi plugin oleh badaso core, contoh:

```bash
📦 uasoft-indonesia
┣ 📂 badaso
┣ 📂 badaso-example-plugin /** Your plugins here **/
```

## Mendaftarkan Plugin

Untuk mendeteksi plugin, Anda harus menyertakannya dalam file .env pada variabel **MIX_BADASO_PLUGINS** dengan pembatas koma (,) tanpa spasi. Sebagai contoh:

```bash
MIX_BADASO_MODULES=badaso-blog-module,badaso-content-module
```

:::info

Jika plugin menggunakan menu di sidebar, Anda harus mendaftarkannya ke dalam **MIX_BADASO_MENU** untuk menampilkannya dengan pembatas koma (,) tanpa spasi. Sebagai contoh:

```bash
MIX_BADASO_MENU=badaso-blog-module,badaso-content-module
```

:::

## Resources Directory Structure

Di bawah ini adalah struktur direktori resources untuk plugin dari badaso.

```bash
📦 uasoft-indonesia
┣ 📂 badaso
┣ 📂 badaso-example-plugin
┃ ┣ 📂 src
┃ ┃ ┣ 📂 resources
┃ ┃ ┃ ┣ 📂 js
┃ ┃ ┃ ┃ ┣ 📂 api
┃ ┃ ┃ ┃ ┃ ┣ 📂 modules               /** Register your api helper here. **/
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜 badaso-example.js   /** Example of api helper. **/
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js *            /** This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 components
┃ ┃ ┃ ┃ ┃ ┣ 📜 example-component.vue /** Example of components. **/
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js *            /** Export the components here. This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┃ ┣ 📂 modules
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜 en.js               /** Example of internationalization **/
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js *            /** Export the language here. This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 pages
┃ ┃ ┃ ┃ ┃ ┣ 📂 example
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js              /** Export the pages here. This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 router
┃ ┃ ┃ ┃ ┃ ┗ 📜 routes.js *           /** Export the router here. This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 store
┃ ┃ ┃ ┃ ┃ ┗ 📜 badaso.js *           /** Export the store here. This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 utils
┃ ┃ ┃ ┃ ┃ ┗ 📜 example.js *          /** Export the utils here. **/
```

:::caution

Untuk penamaan file router harus menggunakan routes.js dan file store harus menggunakan badaso.js.

:::

:::info
<code>\*</code> akan di deteksi otomatis oleh badaso core.

Jika Anda ingin menggunakan assets dan utils, Anda dapat membuat folder assets dan utils, tetapi folder tersebut hanya berpengaruh pada lingkup plugin Anda, bukan lingkup badaso core.
:::

### `src\resources\js\pages\index.vue`

Berikut adalah konten index.vue di direktori pages.

```bash
<template>
  <component
    v-if="globalComponentList[defaultComponent]"
    v-bind:is="globalComponentList[defaultComponent]"
  ></component>
  <component v-else v-bind:is="defaultComponent"></component>
</template>

<script>
import Example from "./example/index.vue";

export default {
  components: {
    // Register the pages here
    Example
  },
  name: "ExamplePlugin",
  data: () => ({
    globalComponentList: {},
    defaultComponent: null,
  }),
  mounted() {
    const routeName = this.$route.name;
    const componentName = this.$caseConvert.kebab(routeName);
    const slug = this.$route.params ? this.$route.params.slug : "";

    this.globalComponentList = this.constructor.superOptions.components;

    this.defaultComponent = componentName;
  },
  methods: {},
};
</script>
```
