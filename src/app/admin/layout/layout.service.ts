import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { ThemeService } from '@wawjs/ngx-ui';

export interface LayoutConfig {
	preset: string;
	primary: string;
	surface: string | undefined | null;
	menuMode: 'static' | 'overlay';
}

interface LayoutState {
	staticMenuDesktopInactive: boolean;
	overlayMenuActive: boolean;
	configSidebarVisible: boolean;
	mobileMenuActive: boolean;
	menuHoverActive: boolean;
	activePath: string | null;
}

/**
 * Drives the Sakai-style admin shell (sidebar/topbar/menu state, theme preset).
 * Dark mode itself is delegated to the app-wide `ThemeService` so the admin
 * shell and the public site share one light/dark source of truth.
 */
@Injectable({
	providedIn: 'root',
})
export class LayoutService {
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private readonly _themeService = inject(ThemeService);

	readonly layoutConfig = signal<LayoutConfig>({
		preset: 'Aura',
		primary: 'amber',
		surface: null,
		menuMode: 'static',
	});

	readonly layoutState = signal<LayoutState>({
		staticMenuDesktopInactive: false,
		overlayMenuActive: false,
		configSidebarVisible: false,
		mobileMenuActive: false,
		menuHoverActive: false,
		activePath: null,
	});

	readonly isDarkTheme = computed(() => this._themeService.mode() === 'dark');

	readonly isSidebarActive = computed(
		() => this.layoutState().overlayMenuActive || this.layoutState().mobileMenuActive,
	);

	readonly isOverlay = computed(() => this.layoutConfig().menuMode === 'overlay');

	toggleDarkMode(): void {
		this._themeService.setMode(this.isDarkTheme() ? 'light' : 'dark');
	}

	onMenuToggle(): void {
		if (this.isOverlay()) {
			this.layoutState.update((state) => ({
				...state,
				overlayMenuActive: !state.overlayMenuActive,
			}));
			return;
		}

		if (this.isDesktop()) {
			this.layoutState.update((state) => ({
				...state,
				staticMenuDesktopInactive: !state.staticMenuDesktopInactive,
			}));
		} else {
			this.layoutState.update((state) => ({
				...state,
				mobileMenuActive: !state.mobileMenuActive,
			}));
		}
	}

	showConfigSidebar(): void {
		this.layoutState.update((state) => ({ ...state, configSidebarVisible: true }));
	}

	hideConfigSidebar(): void {
		this.layoutState.update((state) => ({ ...state, configSidebarVisible: false }));
	}

	isDesktop(): boolean {
		return this._isBrowser && window.innerWidth > 991;
	}

	isMobile(): boolean {
		return !this.isDesktop();
	}
}
