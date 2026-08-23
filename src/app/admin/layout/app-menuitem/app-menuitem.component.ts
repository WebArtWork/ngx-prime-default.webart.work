import { NgClass } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Ripple } from '@wawjs/ngx-prime/ripple';
import { filter } from 'rxjs';
import { LayoutService } from '../layout.service';
import type { AppMenuItem } from './app-menuitem.model';

@Component({
	selector: '[app-menuitem]',
	imports: [NgClass, RouterLink, RouterLinkActive, Ripple],
	templateUrl: './app-menuitem.component.html',
	host: {
		'[class.active-menuitem]': 'isActive()',
		'[class.layout-root-menuitem]': 'root()',
	},
})
export class AppMenuitemComponent {
	protected readonly layoutService = inject(LayoutService);
	private readonly _router = inject(Router);

	readonly item = input.required<AppMenuItem>();
	readonly root = input<boolean>(false);
	readonly parentPath = input<string | null>(null);

	protected readonly isVisible = computed(() => this.item().visible !== false);
	protected readonly hasChildren = computed(() => !!this.item().items?.length);
	protected readonly hasRouterLink = computed(() => !!this.item().routerLink);

	protected readonly fullPath = computed(() => {
		const itemPath = this.item().path;
		if (!itemPath) return this.parentPath();
		const parent = this.parentPath();
		if (parent && !itemPath.startsWith(parent)) {
			return parent + itemPath;
		}
		return itemPath;
	});

	protected readonly isActive = computed(() => {
		const activePath = this.layoutService.layoutState().activePath;
		const path = this.item().path;
		return path ? (activePath?.startsWith(this.fullPath() ?? '') ?? false) : false;
	});

	constructor() {
		this._router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
			if (this.item().routerLink) {
				this._updateActiveStateFromRoute();
			}
		});
	}

	protected itemClick(event: Event): void {
		const item = this.item();

		if (item.disabled) {
			event.preventDefault();
			return;
		}

		if (this.hasChildren()) {
			this.layoutService.layoutState.update((state) => ({
				...state,
				activePath: this.isActive() ? this.parentPath() : this.fullPath(),
				menuHoverActive: !this.isActive(),
			}));
		} else {
			this.layoutService.layoutState.update((state) => ({
				...state,
				overlayMenuActive: false,
				mobileMenuActive: false,
				menuHoverActive: false,
			}));
		}
	}

	private _updateActiveStateFromRoute(): void {
		const routerLink = this.item().routerLink;
		if (!routerLink) return;

		const isRouteActive = this._router.isActive(routerLink[0]!, {
			paths: 'exact',
			queryParams: 'ignored',
			matrixParams: 'ignored',
			fragment: 'ignored',
		});

		const parentPath = this.parentPath();
		if (isRouteActive && parentPath) {
			this.layoutService.layoutState.update((state) => ({ ...state, activePath: parentPath }));
		}
	}
}
