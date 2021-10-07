---
docId: "customutilities"
sidebar_position: 8
---

# Custom Utilities

Badaso also supports for customization utilities. The block below is a directory structure for adding a new utilities.

## Add Utilities
- To add a utilities, add it to the `utils` directory.
```bash
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 utils /** you can add a utility here **/
┃ ┃ ┃ ┃ ┣ 📜 example-utils.js /** example one **/
┃ ┃ ┃ ┃ ┗ 📜 exampleutils.js /** example two **/
```

- To use the utility that was just added, you can try using syntax below.

:::caution
The naming utils in Badaso uses the camel case. For example example-utils will become exampleUtils.
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