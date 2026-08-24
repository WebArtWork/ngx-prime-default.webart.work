# projects/ Workspace Roadmap

Umbrella roadmap for everything under `projects/` in this repo (`showcase`, `uikit`,
and the new `translator`). Component-level detail for uikit lives in
`projects/uikit/ROADMAP.md`; this file tracks cross-project and per-project work.

**Status as of the latest session**: `projects/uikit/ROADMAP.md` sections 1 (full
component coverage), 1b (composites), 2 (Design Lab baseline), and 3 (Download
Config baseline) are all done and build clean. Section 2's remaining subsections
(primitive/semantic/component token trees, global config, pt preview) are still
open in that file. Sections 2 and 3 below (translator, showcase expansion) and the
root README (section 1) have not been started yet — pick up here next.

## 1. Documentation pass — pending, do this last

Once the roadmap items below (and in `projects/uikit/ROADMAP.md`) are done, write one
proper root `README.md` covering the whole workspace — not a separate README per
project. It should explain what this repo is, how `src/app` (the main site) relates
to `projects/showcase`, `projects/uikit`, and `projects/translator`, how to run each
one, and where to look for uikit's Design Lab / Download Config feature and
translator's shared-file behavior.

## 2. New project: `projects/translator` — pending

A supportive Angular app (same pattern as showcase/uikit: own `ng serve`/`ng build`
target, own `app.config.ts`) for managing translations:

- Reads/writes the **same translation files** the main app (`src/app`, via
  `@wawjs/ngx-translate`) already uses — not a separate copy. Needs investigation
  into `src/i18n/*.json` structure first so the tool operates on the real files,
  not a duplicated schema.
- Core workflow: browse keys per language, spot missing/untranslated keys across
  languages, edit values, save back to the real JSON files.
- Built with ngx-prime components (Table for the key/language grid, InputText for
  editing, Tag for missing-translation indicators) — same conventions as
  showcase/uikit (standalone, OnPush, signals).
- Scope for v1: read + edit + save existing keys. Not in scope for v1: adding
  brand-new languages, machine translation, pluralization tooling.

## 3. `projects/showcase` — expand page set — pending

Reorganize existing pages into a fuller site structure, and build out the missing
ones with real ngx-prime content (no empty placeholder pages):

```
showcase/
├── dashboards/
│   ├── default/         — the existing Dashboard page, moved here as-is
│   └── analytics/       — new: KPI cards + Chart + MeterGroup/ProgressBar-driven view
├── users/
│   ├── list/             — the existing Users page, moved here as-is
│   ├── profile/          — the existing Profile page, moved here as-is
│   └── create-edit/      — new: form page (InputText, Select, FileUpload for avatar)
├── ecommerce/
│   ├── products/         — new: Table or DataView grid of products (Card, Tag for stock)
│   ├── product-create-edit/ — new: form (InputNumber, Editor, FileUpload, Select)
│   ├── orders/            — new: Table with status Tags, filtering, pagination
│   └── order-details/     — new: Timeline (order status) + Table (line items) + Card (customer)
├── projects/
│   ├── list/              — new: Card/DataView grid of projects with ProgressBar
│   ├── project-details/   — new: Tabs + Timeline + Table (tasks)
│   └── tasks/              — new: task list/board (Table or drag/drop via OrderList/PickList)
├── applications/
│   ├── calendar/          — new: scheduling UI built on DatePicker (no ready-made
│   │                          "calendar app" component in ngx-prime — this is a
│   │                          custom composition, flag before building)
│   ├── chat/              — new: message list UI (Avatar + custom bubbles + InputText —
│   │                          also custom composition, no ngx-prime chat component)
│   └── files/             — new: file browser (Table/DataView + FileUpload + Breadcrumb)
├── account/
│   └── settings/          — new: Tabs + form fields (InputText, ToggleSwitch, Password)
├── authentication/
│   ├── login/             — new: standalone page outside the shell (InputText, Password,
│   │                          Checkbox, Button) — same "no chrome" pattern as landing
│   └── register/          — new: same pattern as login
└── errors/
    └── 404/               — new: standalone not-found page outside the shell
```

Two pages (`applications/calendar`, `applications/chat`) don't map to a single
ready-made ngx-prime component — call this out explicitly before building so it's a
conscious design decision, not a surprise mid-implementation.
