# Roadmap

Goal: turn this app into a full clone of the [Sakai](https://sakai.ngx-prime.org) admin
dashboard template, built entirely on `@wawjs/ngx-prime` components and current Angular
best practices.

**Status (2026-08-24): done.** The full clone is built and mounted at `/admin`, with the
public marketing site untouched at `/`. See `src/app/admin/` for the implementation and
the commit history for how each phase landed.

## 1. Shared maintenance — done

1. ✅ Updated Angular/rxjs/tslib/express to their latest 22.x-compatible versions.
2. Re-running an Angular CLI best-practices/update check periodically going forward
   is still worthwhile — the baseline is a snapshot in time.

## 2. ngx-prime integration — done

1. ✅ Installed `@wawjs/ngx-prime` plus the `@wawjs/css-prime-*` theme packages,
   `chart.js` (a direct dependency of ngx-prime's chart component that isn't declared
   as one — had to be added explicitly), `primeicons`, and `tailwindcss-primeui`.
2. ✅ Wired `provideNgxPrime({ theme, ripple: true })` into `app.config.ts`.
3. ✅ Theme preset lives in `src/app/theme/app-theme.ts` (Aura-based), with
   `darkModeSelector` matching the existing `ThemeService`'s `data-mode` attribute
   so the admin shell and public site share one dark-mode source of truth.
4. ✅ Verified via production build; see phase 7 for why a live dev-server smoke test
   wasn't possible in this environment.

## 3. App shell (Sakai layout) — done

1. ✅ Built in `src/app/admin/layout/`: `app-topbar`, `app-sidebar`, `app-menu`,
   `app-menuitem`, `app-footer`, `app-configurator`, `app-floating-configurator`
   (for auth pages), `app-layout`, and `layout.service.ts`.
2. ✅ Menu model is a data-driven array in `app-menu.component.ts`.
3. ✅ Responsive overlay/mobile sidebar behavior ported from Sakai's layout SCSS
   (`src/styles/_sakai-layout.scss`), scoped under a `.sakai-scope` class so it
   never leaks into the public site's own design tokens.
4. ✅ Root routing (`app.routes.ts` → `admin/admin.routes.ts`) mounts the shell at
   `/admin`; auth pages (`/admin/auth/*`) are standalone routes outside the shell,
   matching real Sakai's structure (no shared "AuthLayout" wrapper — each auth page
   carries its own floating configurator).

## 4. Dashboard page — done

1. ✅ `src/app/admin/dashboard/`: stats cards, recent-sales table, best-selling
   list, revenue-stream chart, notifications panel — on ngx-prime's
   Table/Chart/Menu/Button components.
2. ✅ Recent-sales data comes from a typed `ProductService` (static mock data,
   injectable), not inlined in the component.

## 5. UI Kit page set — done

1. ✅ All 15 pages ported to `src/app/admin/uikit/`: Button, Form Layout, Input,
   Table, List, Tree, Panel, Overlay, Media, Menu, Message, File, Chart, Timeline,
   Misc.
2. ✅ Sidebar entries for every page in `app-menu.component.ts`.

## 6. Pages module — done

1. ✅ `src/app/admin/pages/`: Crud (full add/edit/delete/export table), Empty, and
   Documentation (rewritten to describe this repo's own structure, not upstream
   Sakai's). Timeline lives under UI Kit per real Sakai's own route layout.
2. ✅ Auth pages (Login, Access Denied, Error) under `src/app/admin/auth/`, plus
   Not Found under `src/app/admin/pages/notfound/`; the wildcard route now redirects
   there instead of back to `''`.

## 7. Cross-cutting polish — done, with two noted environment limits

1. ✅ Responsive layout preserved from Sakai's own breakpoints; added `aria-label`s
   to the shell's icon-only buttons (menu toggle, dark-mode toggle, theme/topbar
   menu popovers).
2. **Skipped deliberately:** i18n coverage for admin/demo page strings. Real Sakai
   itself has no i18n — translating ~20 demo pages' worth of English UI-kit copy
   would be a large, low-value effort out of step with the template it's cloning.
   The public marketing site's existing i18n is untouched.
3. ✅ SEO static generation (`tools/seo/generate-static-seo.mjs`) only ever
   operated on the public route (`staticRoutes = ['/']`) and is unaffected. SSR:
   the `/admin/**` subtree was switched to `RenderMode.Client` (see commit
   history) because ngx-prime's DatePicker overlay fails Angular's hydration
   DOM-serialization check under static prerendering (NG0502) — the admin/demo
   section isn't SEO content, so client-only rendering there is the right
   tradeoff; the public site keeps SSR/prerender.
4. **Verified:** clean `npm run build` with the full route set. **Not verified:**
   a live in-browser click-through — blocked by two pre-existing, unrelated
   environment issues: `ng serve` fails on a rolldown-vite dependency-optimizer
   bug reproducible on unmodified `master`, and the built SSR server's
   `security.allowedHosts: []` in `angular.json` rejects every `Host` header
   including `localhost`. Neither is caused by this work. Whoever runs this
   next should fix `allowedHosts` (or serve behind a matching hostname) and
   click through `/admin` and its routes in a real browser before shipping.
