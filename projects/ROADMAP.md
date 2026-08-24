# projects/ Workspace Roadmap

Umbrella roadmap for everything under `projects/` in this repo (`showcase`, `uikit`,
and the new `translator`). Component-level detail for uikit lives in
`projects/uikit/ROADMAP.md`; this file tracks cross-project and per-project work.

**Status as of the latest session**: all of `projects/uikit/ROADMAP.md` is done and
builds clean. Section 2 below (`projects/translator`) is now also done. Section 3
(showcase expansion) and the root README (section 1) have not been started yet —
pick up here next.

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
