# Roadmap

Goal: turn this app into a full clone of the [Sakai](https://sakai.ngx-prime.org) admin
dashboard template, built entirely on `@wawjs/ngx-prime` components and current Angular
best practices.

Baseline check (2026-08-24): the app already runs Angular 22.1.2 with the esbuild
`@angular/build:application` builder, zoneless change detection
(`provideZonelessChangeDetection()`), standalone components, and `inject()`-based DI —
no Angular-version upgrade is needed. What's missing is `@wawjs/ngx-prime` itself (only
`@wawjs/ngx-default`/`ngx-core`/`ngx-translate`/`ngx-ui` are installed today) and any of
the actual Sakai page/layout functionality — the existing `sakai` folder in the
`ngx-prime` showcase app is marketing copy for that template, not a working clone.

## 1. Shared maintenance

1. Update application and development dependencies, refresh the lockfile, and
   resolve peer-dependency or build issues.
2. Re-run an Angular CLI best-practices/update check (`ng update`,
   `@angular/core` "get_best_practices") before starting new feature work, since
   the baseline above is a snapshot in time.

## 2. ngx-prime integration

1. Install `@wawjs/ngx-prime` (and the `@wawjs/css-prime-*` theme package(s) it
   needs) as an app dependency.
2. Wire up `providePrimeNG(...)`-equivalent configuration from `@wawjs/ngx-prime`
   in `app.config.ts`, alongside the existing `provideNgxCore`/`provideNgxUi`/
   `provideTranslate` providers.
3. Configure the Sakai theme preset/tokens (colors, dark-mode toggle, ripple) and
   import global styles, following ngx-prime's Tailwind v4 setup already used by
   this app's `@tailwindcss/postcss` devDependency.
4. Verify the production build (`npm run build`) and a smoke pass of core UI
   (buttons, inputs, overlays) render correctly after the integration.

## 3. App shell (Sakai layout)

1. Build the Sakai app shell as standalone, signal-based components: topbar
   (logo, search, notifications, profile menu, dark-mode toggle), sidebar/menu
   (collapsible sections, active-route highlighting), footer, and a
   "configurator" panel for theme/menu-mode preferences — replacing/extending
   the current bare `layouts/topbar` and `layouts/footer`.
2. Model the menu as data-driven config (route + icon + label + children), not
   hardcoded template markup, so new pages register by editing one file.
3. Add responsive/mobile behavior for the sidebar (overlay mode, slim mode) and
   keep it keyboard/screen-reader accessible.
4. Route the shell through a top-level layout route so `AuthLayout` (login/
   error pages) and `AppLayout` (everything else) can differ, using lazy
   `loadComponent`/`loadChildren` per Angular 22 best practice.

## 4. Dashboard page

1. Recreate the Sakai dashboard: stat/metric cards, recent-sales/orders table,
   best-selling-products list, revenue chart, and a notifications/activity
   panel — using ngx-prime `Card`, `Table`, `Chart`, `Badge`, `Menu` components.
2. Back the widgets with typed, injectable data services (even if backed by
   static/mock data for now) rather than inlining data in components, so real
   data sources can be swapped in later without touching templates.

## 5. UI Kit page set

1. Recreate Sakai's UI Kit pages against ngx-prime equivalents: Form Layout,
   Input, Float Label, Invalid State, Button, Table, List, Tree, Panel,
   Overlay, Media, Menu, Message, File, Chart, Misc.
2. Add matching sidebar entries/links for every UI Kit page.

## 6. Pages module

1. Recreate Sakai's "Pages" set: Crud (list/edit), Timeline, Empty, and a
   Documentation page describing this app's own ngx-prime setup.
2. Recreate the auth pages (Login, Access Denied, Error, Not Found) under the
   `AuthLayout`, wired into routing with proper redirects (e.g. unknown routes
   → Not Found instead of the current blanket `redirectTo: ''`).

## 7. Cross-cutting polish

1. Preserve responsive behavior and accessible navigation (landmarks, focus
   management, ARIA labels) across every cloned page, not just the shell.
2. Confirm i18n (`@wawjs/ngx-translate`) coverage for all new page strings,
   consistent with the existing `src/i18n` setup.
3. Confirm SSR/hydration (`provideClientHydration(withEventReplay())`) and the
   SEO static-generation step (`tools/seo/generate-static-seo.mjs`) still work
   across the expanded route set.
4. Final production build + full click-through of every cloned page and nav
   link.
