---
docId: "routing"
sidebar_position: 2
---

# Routing

This page explains the frontend and backend routing for the generated CRUD.

`.env` configuration:

```md title=".env"
MIX_API_ROUTE_PREFIX=
MIX_ADMIN_PANEL_ROUTE_PREFIX=
```

## CRUD Generated Routes

### Backend

The following is the type of API URL called for the backend.

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

The following is the type of API URL called for the Frontend.

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
