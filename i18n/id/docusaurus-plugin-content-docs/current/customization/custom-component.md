---
docId: "customcomponent"
sidebar_position: 10
---

# Custom Component

Badaso menggunakan VueJS framework untuk frontend. Oleh karena itu, penambahan komponen pada frontend juga menggunakan VueJS. Blok di bawah ini adalah struktur direktori untuk menambahkan komponen baru ke frontend.

## Menambahkan sebuah Komponen

- Untuk menambahkan sebuah komponen, tambahkan ke direktori `components`.

```bash
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 components /** you can add a component here **/
┃ ┃ ┃ ┃ ┗ 📜 ExampleComponent.vue
```

- Sekarang Anda dapat menggunakan komponen kustom itu di halaman Anda seperti contoh di bawah.

:::info
Custom Component akan di-import otomatis dan dapat digunakan secara langsung jika penamaan file menggunakan pascal case.
:::

```bash
<template>
  ...
  <example-component></example-component>
  ...
</template>
```
