---
docId: "overridingpage"
sidebar_position: 3
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/customization/overriding-page.md
---

# Overriding Page

Setiap CRUD yang dihasilkan dari CRUD Generator menggunakan view yang sama. Namun ada kalanya view nya harus diubah sesuai dengan kebutuhan. Badaso menyediakan fitur untuk custom view. Untuk custom view ini, Badaso akan memeriksa apakah ada view yang dibuat pada custom-pages, jika tidak ada, maka Badaso akan menggunakan view default.

Badaso berasumsi pengguna sudah paham dengan dasar vue. Maka dari itu Badaso tidak menjelaskan bagaimana membuat component di vue.

:::info
Anda dapat melakukan override pada semua pages yang ada di dalam direktori <code>pages</code> kecuali <code>index.vue</code>
:::

## Overriding CRUD Generated Page

Berikut langkah-langkah untuk membuat custom view guna menyesuaikan tampilan dari CRUD Generated.

- Buat file vue pada resource seperti struktur berikut.

```bash
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 pages
┃ ┃ ┃ ┃ ┣ 📂 {slug} /** put the override you want here, for example book-management **/
┃ ┃ ┃ ┃ ┃ ┣ 📜 browse.vue
┃ ┃ ┃ ┃ ┃ ┣ 📜 read.vue
┃ ┃ ┃ ┃ ┃ ┣ 📜 edit.vue
┃ ┃ ┃ ┃ ┃ ┣ 📜 add.vue
┃ ┃ ┃ ┃ ┃ ┗ 📜 sort.vue
```

Catatan:

- browse.vue: Tambahkan jika butuh mengubah tampilan index/list.
- read.vue: Tambahkan jika butuh mengubah tampilan halaman detail.
- edit.vue: Tambahkan jika butuh mengubah tampilan halaman edit.
- add.vue: Tambahkan jika butuh mengubah tampilan halaman add.
- sort.vue: Tambahkan jika butuh mengubah tampilan halaman pengurutan.

## Overriding Badaso Default Pages

Berikut langkah-langkah untuk membuat custom view guna menyesuaikan tampilan dari page kecuali CRUD Generated dan index.vue.

- Buat file vue pada resource seperti struktur berikut.

```bash
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 pages
┃ ┃ ┃ ┃ ┣ 📂 {badaso-pages} /** put the override you want here, for example database-management **/
┃ ┃ ┃ ┃ ┃ ┣ 📜 browse.vue
┃ ┃ ┃ ┃ ┃ ┣ 📜 read.vue
┃ ┃ ┃ ┃ ┃ ┣ 📜 edit.vue
┃ ┃ ┃ ┃ ┃ ┣ 📜 add.vue
┃ ┃ ┃ ┃ ┃ ┗ 📜 sort.vue
```

Anda bisa menemukan `badaso-pages` pada

```bash
📦 Your Project
┣ 📂 vendor
┃ ┣ 📂 uasoft-indonesia
┃ ┃ ┣  📂 badaso
┃ ┃ ┃ ┣ 📂 src
┃ ┃ ┃ ┃ ┣ 📂 resources
┃ ┃ ┃ ┃ ┃ ┣ 📂 js
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 pages
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 {badaso-pages} /** HERE **/
```

Catatan:

- browse.vue: Tambahkan jika butuh mengubah tampilan index/list.
- read.vue: Tambahkan jika butuh mengubah tampilan halaman detail.
- edit.vue: Tambahkan jika butuh mengubah tampilan halaman edit.
- add.vue: Tambahkan jika butuh mengubah tampilan halaman add.
- sort.vue: Tambahkan jika butuh mengubah tampilan halaman pengurutan.
