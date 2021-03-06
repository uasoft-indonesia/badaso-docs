---
docId: "relation"
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/relation.md
---

# Relation

Badaso menyediakan fitur untuk merelasikan data dari suatu tabel dengan tabel lain. Saat membuat sebuah CRUD, user dapat merelasikan sebuah field dari suatu tabel ke tabel lain dengan memilih field mana yang akan direlasikan, jenis relasi dan tabel tujuan.

## View

Kode di bawah merupakan sampel untuk penggunaan Relation pada Vue Template.

```bash
<badaso-select
  v-if="formType === 'relation' && relationType === 'belongs_to'"
  :label="label"
  :placeholder="placeholder"
  v-model="model"
  size="12"
  :items="itemFromRelation"
  :alert="errors"
>
</badaso-select>
<badaso-text
  v-if="formType === 'relation' && relationType !== 'belongs_to'"
  :label="label"
  :placeholder="placeholder"
  v-model="model"
  size="12"
  :alert="errors"
>
</badaso-text>
```
