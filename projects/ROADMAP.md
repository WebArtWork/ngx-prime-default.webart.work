# projects/ Workspace Roadmap

Umbrella roadmap for everything under `projects/` in this repo (`showcase`, `uikit`,
and the new `translator`). Component-level detail for uikit lives in
`projects/uikit/ROADMAP.md`; this file tracks cross-project and per-project work.

**Status as of the latest session**: all of `projects/uikit/ROADMAP.md` is done and
builds clean. Sections 2 (`projects/translator`) and 3 (showcase expansion) below
are both now done. Only the root README (section 1) remains — pick up here next.

## 1. Documentation pass — pending, do this last

Once the roadmap items below (and in `projects/uikit/ROADMAP.md`) are done, write one
proper root `README.md` covering the whole workspace — not a separate README per
project. It should explain what this repo is, how `src/app` (the main site) relates
to `projects/showcase`, `projects/uikit`, and `projects/translator`, how to run each
one, and where to look for uikit's Design Lab / Download Config feature and
translator's shared-file behavior.

## 2. New project: `projects/translator` — DONE (v1 scope)

`projects/translator` is a new Angular app registered in `angular.json` (own
`ng build`/`ng serve translator` target, `projects/translator/src/app/app.config.ts`,
prefix `tr`), same pattern as showcase/uikit.

Investigated `src/i18n/*.json` first (not a dictionary — an array-based scheme):
`en.json` (the `defaultLanguageCode` from `src/environments/environment.prod.ts`) is
an array of source-text strings, and each string doubles as the translation *key*
used everywhere in `src/app` (e.g. `translateService.translate('Settings')`,
`[translate]="'Settings'"`). `ua.json` is a same-length array, positionally aligned
— index N in `ua.json` translates index N in `en.json`. Confirmed by reading
`node_modules/@wawjs/ngx-translate/types/wawjs-ngx-translate.d.ts`
(`TranslateArray`, `_mapArrayToTranslations`) and grepping `translateService.` call
sites in `src/app/layouts/**`.

The translator's build target maps a second asset glob
(`{ glob: '*.json', input: 'src/i18n', output: 'i18n' }`, alongside its own
`public/`) so it serves the **real** root `src/i18n/*.json` files, not a copy.
`pages/translations/translations-page.ts` fetches both via `HttpClient`, builds one
row per English key with a `values` map (`en`, `ua`, …), flags `missing` (index
doesn't exist yet in that language's array) and `untranslated` (value still equals
the English source text), and renders a `p-table` with `p-tag` issue badges, an
`InputText` search filter, a "missing/untranslated only" `ToggleSwitch`, and
per-cell `InputText` editing.

Save-back: this is a static Angular SPA with no backend, so it cannot write
`src/i18n/*.json` directly from the browser. Mirroring uikit's "Download Config"
pattern, a "Download en.json" / "Download ua.json" button per language downloads
the edited array as JSON for the developer to drop back over the matching file —
documented in the page itself, not a silent limitation.

Out of scope for v1 (per the original spec, confirmed unimplemented): adding
brand-new languages, machine translation, pluralization tooling.

## 3. `projects/showcase` — expand page set — DONE

The full tree described below now exists under `projects/showcase/src/app/pages/`,
routed in `app.routes.ts` and linked from the nested `p-panelMenu` in
`layout/sidebar/showcase-sidebar.ts`:

```
showcase/
├── dashboards/
│   ├── default/         — the original Dashboard page, moved here as-is
│   └── analytics/       — KPI cards + Chart (line) + MeterGroup + ProgressBar rows
├── users/
│   ├── list/             — the original Users page, moved here as-is
│   ├── profile/          — the original Profile page, moved here as-is
│   └── create-edit/      — form page (InputText, Select, FileUpload for avatar)
├── ecommerce/
│   ├── products/         — Table of products (Card wrapper, Tag for stock status)
│   ├── product-create-edit/ — form (InputNumber currency mode, Editor, FileUpload, Select)
│   ├── orders/            — Table with status Tags, global search, pagination
│   └── order-details/     — Timeline (order status) + Table (line items) + Card (customer)
├── projects/
│   ├── list/              — Card grid of projects with ProgressBar + status Tag
│   ├── project-details/   — Tabs (Activity/Tasks) + Timeline + Table
│   └── tasks/              — 3-column board built from three independent p-orderList
│                              instances (drag to reprioritize within a column) —
│                              ngx-prime has no dedicated Kanban component
├── applications/
│   ├── calendar/          — p-datePicker (inline) + a plain event list keyed by ISO
│   │                          date — no ready-made "calendar app" component in
│   │                          ngx-prime, called out in the component's own doc comment
│   ├── chat/              — p-avatar (initials) + custom message bubbles + InputText —
│   │                          also custom composition, no ngx-prime chat component
│   └── files/             — Table + FileUpload (basic mode) + Breadcrumb
├── account/
│   └── settings/          — Tabs (Profile/Security/Notifications) + InputText/Password/ToggleSwitch
├── authentication/
│   ├── login/             — standalone page outside the shell (InputText, Password,
│   │                          Checkbox, Button) — same "no chrome" pattern as landing
│   └── register/          — same pattern as login
└── errors/
    └── 404 (not-found)/    — standalone not-found page outside the shell
```

`applications/calendar` and `applications/chat` don't map to a single ready-made
ngx-prime component, as flagged in the original plan — both compose existing
primitives (DatePicker/Avatar/InputText) instead, documented inline in their
`.ts` files' doc comments rather than silently improvised.

All pages use real ngx-prime components with concrete demo data (no empty
placeholders), follow the existing showcase conventions (standalone, OnPush,
`<name>.ts`/`.html`/`.scss`/`.data.ts` file split), and the full `npx ng build
showcase` passes.
