# uikit Roadmap

Goal: turn `uikit` from a small sample gallery (Button, Input, Select, Table, Dialog,
Card) into a full ngx-prime component reference plus a live design-token configurator
that developers can use to tune a project's theme and hand the result to a human or an
AI to apply in code.

## 1. Full component coverage — DONE

All categories (Form, Data, Button, Overlay, Navigation, Feedback, Layout, Media,
Misc) now have a demo page for every ngx-prime component/directive they list below.
Navigation, Feedback, Media, and Misc were added as new sidebar sections during this
pass. `chart.js` was added as an explicit dependency (required transitively by
ngx-prime's chart component, was missing from package.json).

Still pending, in order: section 1b composites → section 2 Design Lab → section 3
Download Config, following the established `*-demo.ts`/`.html` pattern (see
`pages/form/checkbox` or `pages/form/radiobutton` for reference) and registering each
new page in `app.routes.ts` + `uikit-sidebar.ts`.

The library has ~90 real component/directive folders under `packages/ngx-prime/src`;
uikit currently demos 6. Add one demo page per component, grouped into the existing
sidebar categories (add categories as needed — Navigation, Feedback, Media, Misc are
not represented yet):

- **Form**: autocomplete, cascadeselect, checkbox, colorpicker, datepicker, editor,
  fieldset, floatlabel, iconfield, inputgroup, inputmask, inputnumber, inputotp,
  inputtext (done), keyfilter, listbox, multiselect, password, radiobutton, rating,
  select (done), selectbutton, slider, textarea, togglebutton, toggleswitch,
  treeselect, fileupload
- **Data**: dataview, orderlist, organizationchart, paginator, picklist, table (done),
  timeline, tree, treetable
- **Button**: button (done), buttongroup, splitbutton, speeddial
- **Overlay**: dialog (done), dynamicdialog, drawer, popover, confirmdialog,
  confirmpopup, contextmenu, tooltip, blockui
- **Navigation**: breadcrumb, menu, menubar, megamenu, panelmenu, steps, stepper, tabs,
  tieredmenu, dock
- **Feedback**: message, toast, progressbar, progressspinner, skeleton, badge, tag,
  metergroup
- **Layout**: accordion, card (done), divider, panel, scrollpanel, splitter, toolbar,
  inplace
- **Media**: avatar, avatargroup, carousel, chart, galleria, image, imagecompare
- **Misc**: chip, knob, terminal, animateonscroll

Each new page follows the existing `*-demo.ts` pattern (basic → sizes → states →
variants → icons, single file per component).

## 1b. Composite "in-context" pages — DONE

All ten composite pages exist, each alongside its category's atomic pages: Form
Layout (`form/form-layout`), File (`form/file-composite`), List
(`data/list-composite`), Tree (`data/tree-composite`), Timeline
(`data/timeline-composite`), Menu in Context (`navigation/menu-in-context`),
Message/Toast Stack (`feedback/message-toast-stack`), Panel
(`layout/panel-composite`), Media Gallery (`media/media-gallery`), Chart Dashboard
(`media/chart-dashboard`).

Atomic per-component pages (above) show a control in isolation. Also add a small set
of composite pages that show several components assembled into a real usage pattern —
mirroring Sakai's own UI Kit section (Form Layout, List, Tree, Panel, Overlay, Media,
Menu, Message, File, Chart, Timeline, Misc): each of those is a single page combining
multiple related components/fields into one realistic block, not an isolated control.
Concretely for uikit:

- **Form Layout**: a full form assembled from several Form-category components
  together (labels, grid layout, validation states) — the thing a template consumer
  actually copies, not just a lone `p-select`.
- **List**: a realistic data-list pattern (e.g. DataView or OrderList) with
  images/actions, not just the bare component defaults.
- **Menu-in-context**: menubar/panelmenu/breadcrumb shown together as real nav, not
  isolated.
- A few more candidates worth one composite page each once the atomic pages exist:
  Tree, Panel, Media (gallery), Message/Toast (stacked notifications), File (upload +
  list), Chart (dashboard-style multi-chart), Timeline, Misc.

These live alongside the atomic pages (same sidebar categories), not instead of them.

## 2. Design Lab — full ngx-prime configuration surface — pending

Add a new top-level "Design Lab" section (its own sidebar entry, e.g. `/design-lab`)
that exposes everything `provideNgxPrime` and the `@wawjs/css-prime-styled` preset
system can change, with every control bound live via `usePreset` /
`updatePrimaryPalette` / `updateSurfacePalette` / `definePreset` so every demo
component on screen updates instantly as controls move:

- **Baseline controls (minimum — match Sakai's own topbar configurator popover)**:
  - Primary color swatches (a fixed palette row, e.g. green/lime/orange/amber/
    yellow/teal/cyan/blue/indigo/violet/purple/pink/rose) → `updatePrimaryPalette`.
  - Surface color swatches (slate/gray/zinc/neutral/stone, etc.) →
    `updateSurfacePalette`.
  - Preset switcher: Aura / Lara / Nora (all three exist under
    `css-prime/packages/themes/src/presets/`, plus Material) → `usePreset`.
  - Menu mode: Static / Overlay — this isn't a prime token, it's uikit's own shell
    layout setting (mirrors Sakai's `LayoutService.layoutConfig.menuMode`); wire it
    to the uikit shell's sidebar behavior, not to the preset system.
  - Dark mode toggle already exists in the topbar — keep it, just relocate/group it
    with these controls in one popover instead of a lone icon button.
- More candidates once the baseline above is in: font family, scale/density
  (compact/comfortable — mirrors the default app's own `data-density` tokens),
  focus-ring style, and per-component color overrides surfaced as a search/filter
  over the component-token tree instead of one long flat list.
- **Primitive tokens**: full color palette per hue (50–950), border radius scale.
- **Semantic tokens**: primary/surface palette pickers, focus ring, form-field
  paddings — the "base" section of a preset.
- **Component tokens**: per-component overrides (the same tree the ngx-prime
  showcase's own `apps/showcase/components/layout/designer` exposes, without its
  licensing/backend coupling — pure client-side preset editing).
- **Global config**: `ripple` on/off, `inputVariant` (outlined/filled),
  `overlayAppendTo`, `zIndex` (modal/overlay/menu/tooltip), `darkModeSelector` /
  dark-mode toggle, RTL toggle.
- **Pass-through preview**: at least one example of per-component `pt` customization,
  so the pattern is documented even if full PT editing isn't built yet.

## 3. Download Config button — pending

Add a "Download Config" button next to the dark-mode toggle in the uikit topbar
(`uikit-topbar.ts`/`.html`), alongside the Design Lab controls from #2:

- Exports the **diff only** (tokens actually changed from the base preset) as a
  downloadable JSON file — not the full preset, to keep the output small and easy
  for a human or an AI to read and merge into the project's real theme file.
- Live preview (via `usePreset`) stays separate from the download — adjusting
  controls always previews instantly; downloading is just a snapshot of the current
  diff at the moment the button is pressed.
- No attempt to write files or auto-apply the config into the project — the button's
  only job is producing a clean, generic JSON handoff.
