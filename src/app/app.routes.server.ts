import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	{
		// The admin dashboard demo is interactive/overlay-heavy (datepicker,
		// autocomplete, multiselect, dialogs, ...) rather than SEO content.
		// At least one ngx-prime overlay (DatePicker's panel) fails Angular's
		// hydration DOM-serialization check under static prerendering
		// (NG0502) — rendering this subtree client-side instead avoids that
		// while keeping SSR/prerender for the public marketing site.
		path: 'admin/**',
		renderMode: RenderMode.Client,
	},
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
