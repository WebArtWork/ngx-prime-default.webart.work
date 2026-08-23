import { isPlatformBrowser } from '@angular/common';
import {
	Component,
	DestroyRef,
	ElementRef,
	PLATFORM_ID,
	afterNextRender,
	effect,
	inject,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LayoutService } from '../layout.service';
import { AppMenuComponent } from '../app-menu/app-menu.component';

@Component({
	selector: 'app-sidebar',
	imports: [AppMenuComponent],
	template: `
		<div class="layout-sidebar">
			<app-menu></app-menu>
		</div>
	`,
})
export class AppSidebarComponent {
	protected readonly layoutService = inject(LayoutService);
	private readonly _router = inject(Router);
	private readonly _el = inject(ElementRef<HTMLElement>);
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private readonly _destroyRef = inject(DestroyRef);

	private _outsideClickListener: ((event: MouseEvent) => void) | null = null;

	constructor() {
		effect(() => {
			const state = this.layoutService.layoutState();
			const shouldListen = this.layoutService.isDesktop()
				? state.overlayMenuActive
				: state.mobileMenuActive;

			if (shouldListen) {
				this._bindOutsideClickListener();
			} else {
				this._unbindOutsideClickListener();
			}
		});

		this._router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe((event) => this._onRouteChange(event.urlAfterRedirects));

		afterNextRender(() => this._onRouteChange(this._router.url));

		this._destroyRef.onDestroy(() => this._unbindOutsideClickListener());
	}

	private _onRouteChange(path: string): void {
		this.layoutService.layoutState.update((state) => ({
			...state,
			activePath: path,
			overlayMenuActive: false,
			mobileMenuActive: false,
			menuHoverActive: false,
		}));
	}

	private _bindOutsideClickListener(): void {
		if (!this._isBrowser || this._outsideClickListener) return;

		this._outsideClickListener = (event: MouseEvent) => {
			if (this._isOutsideClicked(event)) {
				this.layoutService.layoutState.update((state) => ({
					...state,
					overlayMenuActive: false,
					mobileMenuActive: false,
					menuHoverActive: false,
				}));
			}
		};
		document.addEventListener('click', this._outsideClickListener);
	}

	private _unbindOutsideClickListener(): void {
		if (this._outsideClickListener) {
			document.removeEventListener('click', this._outsideClickListener);
			this._outsideClickListener = null;
		}
	}

	private _isOutsideClicked(event: MouseEvent): boolean {
		const topbarButtonEl = document.querySelector('.layout-menu-button');
		const sidebarEl = this._el.nativeElement;
		const target = event.target as Node;

		return !(
			sidebarEl?.contains(target) ||
			topbarButtonEl?.isSameNode(target) ||
			topbarButtonEl?.contains(target)
		);
	}
}
