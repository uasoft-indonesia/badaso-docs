---
docId: "multilanguage"
sidebar_position: 7
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/core-concept/multi-language.md
---

# Multi Language

## Backend

Badaso menyediakan bahasa inggris secara default untuk bahasa dari backend. Untuk mengubah bahasa, perlu dibuatkan konfigurasi lokalisasi untuk laravel, konfigurasi ini dapat diatur melalui `.env`. Kode di bawah adalah struktur direktori untuk menambahkan bahasa baru.

```bash
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 lang
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 en
┃ ┃ ┃ ┃ ┣ 📜 api_response.php
┃ ┃ ┃ ┃ ┣ 📜 validation.php
┃ ┃ ┃ ┣ 📂 add your lang
┃ ┃ ┃ ┃ ┣ 📜 api_response.php
┃ ┃ ┃ ┃ ┣ 📜 validation.php
```

## Frontend

For some labels on the frontend, also use a separate language from backend. The code below is the language directory structure in frontend. The language on the frontend can be changed via the header navbar on the dashboard. The language in frontend only changes labels on frontend, not including responses from backend Badaso.

```bash
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┣ 📜 en.js
┃ ┃ ┃ ┃ ┣ 📜 id.js
```
