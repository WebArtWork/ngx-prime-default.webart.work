# vendor/

`wawjs-ngx-prime-22.0.0-patch1.tgz` is a locally-patched build of `@wawjs/ngx-prime`,
used until a fixed version is published to npm.

## Why

The published `@wawjs/ngx-prime@22.0.0` declares several optional, opt-in template
slots (e.g. `Table`'s `#colgroup`, `#paginatorleft`, `#checkboxicon`; also affects
`DataView`, `PickList`, `Stepper`) as **required** content-child queries
(`contentChild.required(...)`) instead of optional ones (`contentChild(...)`).
Since almost no consumer ever provides these slots, reading the resulting signal
throws — and because Angular's change detection is a single synchronous walk,
that throw aborts the rest of that render pass, silently leaving later-checked
components (in our case, the whole sidebar menu) unrendered. This affects any
page using `Table`, `DataView`, `PickList`, or `Stepper` with a paginator,
scrollable columns, or similar optional features — including this app's own
dashboard (Recent Sales table), which most users hit first.

## What

Patched in `packages/ngx-prime/src/{table,dataview,picklist,stepper}/*.ts` in the
sibling `ngx-prime` monorepo (`../ngx-prime`): changed `contentChild.required<TemplateRef<...>>`
to plain `contentChild<TemplateRef<...>>` for all optional named template slots,
then rebuilt (`pnpm --filter ngx-prime build`) and packed
(`npm pack` in `packages/ngx-prime/dist`).

## When to remove this

Once WebArtWork publishes a version of `@wawjs/ngx-prime` to npm containing this
fix, switch `package.json`'s dependency back to a normal registry version and
delete this directory.
