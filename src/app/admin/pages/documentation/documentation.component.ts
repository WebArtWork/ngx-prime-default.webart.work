import { Component } from '@angular/core';

@Component({
	selector: 'app-documentation',
	template: `
		<div class="card">
			<div class="font-semibold text-2xl mb-4">Documentation</div>
			<div class="font-semibold text-xl mb-4">Get Started</div>
			<p class="text-lg mb-4">
				This admin dashboard is a clone of
				<a
					href="https://sakai.ngx-prime.org"
					target="_blank"
					rel="noopener noreferrer"
					class="text-primary font-medium"
					>Sakai</a
				>
				rebuilt on
				<a
					href="https://github.com/WebArtWork/ngx-prime"
					target="_blank"
					rel="noopener noreferrer"
					class="text-primary font-medium"
					>ngx-prime</a
				>, an independent Angular UI component library. It runs on Angular 22 with zoneless
				change detection, standalone components, and signal-based inputs throughout.
			</p>

			<div class="font-semibold text-xl mb-4">Structure</div>
			<ul class="leading-normal list-disc pl-8 text-lg mb-4">
				<li>
					<span class="text-primary font-medium">src/app/admin/layout</span>: the app shell — topbar,
					sidebar, menu, footer, and theme configurator.
				</li>
				<li>
					<span class="text-primary font-medium">src/app/admin/dashboard</span>: the dashboard page and
					its widgets.
				</li>
				<li>
					<span class="text-primary font-medium">src/app/admin/uikit</span>: the UI Kit demo pages, one
					per ngx-prime component family.
				</li>
				<li>
					<span class="text-primary font-medium">src/app/admin/pages</span>: Crud, Empty, Documentation,
					and Not Found.
				</li>
				<li>
					<span class="text-primary font-medium">src/app/admin/auth</span>: the standalone Login,
					Access Denied, and Error pages.
				</li>
			</ul>

			<div class="font-semibold text-xl mb-4">Menu</div>
			<p class="text-lg mb-4">
				The sidebar menu model lives in
				<span class="bg-highlight px-2 py-1 rounded-border not-italic text-base"
					>src/app/admin/layout/app-menu/app-menu.component.ts</span
				>. Add a route there to add a new item to the sidebar.
			</p>

			<div class="font-semibold text-xl mb-4">Layout Service</div>
			<p class="text-lg mb-4">
				<span class="bg-highlight px-2 py-1 rounded-border not-italic text-base"
					>src/app/admin/layout/layout.service.ts</span
				>
				manages sidebar/menu state and the ngx-prime theme preset. Dark mode itself is delegated to the
				app-wide
				<span class="bg-highlight px-2 py-1 rounded-border not-italic text-base">ThemeService</span>
				(from <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base">@wawjs/ngx-ui</span
				>), so the admin dashboard and the public site share one light/dark state.
			</p>

			<div class="font-semibold text-xl mb-4">Tailwind CSS</div>
			<p class="text-lg mb-4">
				The demo pages are built with Tailwind CSS v4. Layout/typography/card styles are scoped under a
				<span class="bg-highlight px-2 py-1 rounded-border not-italic text-base">.sakai-scope</span>
				class in
				<span class="bg-highlight px-2 py-1 rounded-border not-italic text-base"
					>src/styles/_sakai-layout.scss</span
				>, so they never leak into the public marketing site's own design tokens.
			</p>

			<div class="font-semibold text-xl mb-4">Theme</div>
			<p class="text-lg mb-4">
				CSS variables used here are derived from the applied ngx-prime theme preset, configured in
				<span class="bg-highlight px-2 py-1 rounded-border not-italic text-base"
					>src/app/theme/app-theme.ts</span
				>.
			</p>
		</div>
	`,
})
export class DocumentationComponent {}
