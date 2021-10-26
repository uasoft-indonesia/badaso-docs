---
docId: "routing"
sidebar_position: 2
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/core-concept/routing.md
---

# Routing

Pada halaman ini dijelaskan mengenai routing frontend dan backend untuk CRUD yang di-generate.

`.env` configuration:

```md title=".env"
MIX_API_ROUTE_PREFIX=
MIX_ADMIN_PANEL_ROUTE_PREFIX=
```

## CRUD Generated Routes

### Backend

Berikut ini merupakan tipe URL API yang dipanggil untuk Backend.

- Browse/Index (List) : GET

```bash
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG
```

- Add/Create : POST

```bash
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/add
```

- Read/Detail : GET

```bash
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/read
```

- Edit/Update : PUT

```bash
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/edit
```

- Delete/Remove : DELETE

```bash
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/delete
```

### Frontend

Berikut ini merupakan tipe URL API yang dipanggil untuk Frontend.

- Browse/Index (List)

```bash
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG
```

- Add/Create

```bash
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/add
```

- Read/Detail

```bash
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/ID/detail
```

- Edit/Update

```bash
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/ID/edit
```
