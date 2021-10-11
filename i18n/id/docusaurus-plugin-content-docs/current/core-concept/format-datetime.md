---
docId: "formatdatetime"
sidebar_position: 11
---

# Format Datetime

Badaso menyediakan beberapa konfigurasi untuk memformat tampilan waktu. Anda dapat menambahkan key di bawah ini ke .env Anda dan mengisinya dengan format yang Anda inginkan.

:::info
Badaso menggunakan <a href="https://momentjs.com/docs/#/displaying/format/" target="_blank">MomentJS</a> untuk memformat waktu tampilan.
:::

```bash
#OPTIONAL. Format untuk menampilkan tanggal di UI
MIX_DATE_FORMAT=

#OPTIONAL. Format untuk menampilkan waktu di UI
MIX_TIME_FORMAT=

#OPTIONAL. Format untuk menampilkan tanggal waktu di UI
MIX_DATETIME_FORMAT=
```
