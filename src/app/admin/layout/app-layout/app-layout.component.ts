import { DOCUMENT, NgClass, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, computed, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { AppSidebarComponent } from '../app-sidebar/app-sidebar.component';
import { AppTopbarComponent } from '../app-topbar/app-topbar.component';
import { LayoutService } from '../layout.service';

@Component({
	selector: 'app-admin-layout',
	imports: [NgClass, RouterOutlet, AppTopbarComponent, AppSidebarComponent, AppFooterComponent],
	template: `<div class="layout-wrapper sakai-scope" [ngClass]="containerClass()">
		<app-topbar></app-topbar>
		<app-sidebar></app-sidebar>
		<div class="layout-main-container">
			<div class="layout-main">
				<router-outlet></router-outlet>
			</div>
			<app-admin-footer></app-admin-footer>
		</div>
		<div class="layout-mask"></div>
	</div>`,
})
export class AppLayoutComponent {
	private readonly _layoutService = inject(LayoutService);
	private readonly _document = inject(DOCUMENT);
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	protected readonly containerClass = computed(() => {
		const config = this._layoutService.layoutConfig();
		const state = this._layoutService.layoutState();
		return {
			'layout-overlay': config.menuMode === 'overlay',
			'layout-static': config.menuMode === 'static',
			'layout-static-inactive': state.staticMenuDesktopInactive && config.menuMode === 'static',
			'layout-overlay-active': state.overlayMenuActive,
			'layout-mobile-active': state.mobileMenuActive,
		};
	});

	constructor() {
		effect(() => {
			const { mobileMenuActive } = this._layoutService.layoutState();
			if (this._isBrowser) {
				this._document.body.classList.toggle('blocked-scroll', mobileMenuActive);
			}
		});
	}
}
