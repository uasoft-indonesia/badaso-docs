---
docId: "customutilities"
sidebar_position: 8
---

# Custom Utilities

Badaso juga mendukung untuk kustomisasi utilitas. Blok di bawah ini adalah struktur direktori untuk menambahkan utilitas baru.

## Menambahkan Utilitas

- Untuk menambahkan utilitas, tambahkan ke direktori `utils`.

```bash
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 utils /** you can add a utility here **/
┃ ┃ ┃ ┃ ┣ 📜 example-utils.js /** example one **/
┃ ┃ ┃ ┃ ┗ 📜 exampleutils.js /** example two **/
```

- Untuk menggunakan utilitas yang baru saja ditambahkan, Anda dapat mencoba menggunakan sintaks di bawah ini.

:::caution
Penamaan di Badaso menggunakan camel case. Misalnya example-utils akan menjadi exampleUtils.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="template" label="Template" default>

    $exampleUtils.method();
    $exampleutils.method();

  </TabItem>
  <TabItem value="script" label="Script">

    this.$exampleUtils.method();
    this.$exampleutils.method();

  </TabItem>
</Tabs>
