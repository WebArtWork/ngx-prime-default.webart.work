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

New pages follow the established `*-demo.ts`/`.html` pattern (see `pages/form/checkbox`
or `pages/form/radiobutton` for reference) and are registered in `app.routes.ts` +
`uikit-sidebar.ts`. Full list covered, for reference:

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

## 2. Design Lab — full ngx-prime configuration surface — baseline DONE, rest pending

Baseline controls exist at `/design-lab` (new top-level sidebar entry), each wired
live: preset switcher (Aura/Lara/Nora) via `usePreset`, primary color swatches
(green/lime/orange/amber/yellow/teal/cyan/blue/indigo/violet/purple/pink/rose) via
`updatePrimaryPalette`, surface color swatches (slate/gray/zinc/neutral/stone) via
`updateSurfacePalette`, menu mode (Static/Overlay) as a uikit-shell-only setting
backed by `layout/design-lab-state.ts` (read by `uikit-shell` to change sidebar
behavior, not routed through the preset system), and a dark mode toggle grouped on
the same page. Implemented as a dedicated page rather than a topbar popover — still
satisfies "one place, not a lone icon button", but if a popover is specifically
wanted later, move the same controls into one.

Still pending — in order, once resumed:
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

## 3. Download Config button — baseline DONE

A "Download Config" button lives in `uikit-topbar.ts`/`.html` next to the dark-mode
toggle. It reads `DesignLabState` (preset name / primary color / surface color —
only set once the user actually changes them via `/design-lab`) and downloads a
small diff-only JSON (e.g. `{ "preset": "Lara", "primaryPalette": { "name": "teal",
"color": "#14b8a6" } }`), disabled until at least one change has been made. Live
preview via `usePreset`/`updatePrimaryPalette`/`updateSurfacePalette` stays fully
separate from the download, as specified. Not yet covered: once the primitive/
semantic/component token trees and global config controls from section 2 exist,
the diff calculation should be extended to include those changes too — right now
it only tracks preset/primary/surface.

## Continuation notes for the next session

uikit sections 1, 1b, 2 (baseline), and 3 (baseline) are all done and every commit
so far builds clean (`npx ng build uikit`). Suggested order to resume:

1. Finish section 2's remaining subsections (primitive/semantic/component token
   trees, global config, pt preview example) — the biggest remaining uikit item.
2. Extend the Download Config diff (section 3) to cover whatever section 2 adds.
3. Then move to `projects/ROADMAP.md` sections 2 and 3 (translator, showcase
   expansion), and the root README last, per that file's own ordering.
