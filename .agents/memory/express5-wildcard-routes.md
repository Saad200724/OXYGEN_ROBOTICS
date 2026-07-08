---
name: Express 5 wildcard routes
description: app.get("*", ...) crashes on startup with Express 5's path-to-regexp; use a named wildcard.
---

Express 5 upgraded `path-to-regexp`, which rejects the old bare `"*"` wildcard
pattern with `PathError: Missing parameter name at index 1: *`. This surfaces
as a hard crash the moment the route is registered (not just when hit).

**Why:** path-to-regexp v6+ requires wildcards to be named, e.g. `/*splat`,
so Express can build a valid capture group.

**How to apply:** When a project on Express 5 has a catch-all/SPA-fallback
route like `app.get("*", handler)`, change it to `app.get("/*splat", handler)`
(or scope it more narrowly). Check the installed Express major version before
assuming Express 4 syntax works.
