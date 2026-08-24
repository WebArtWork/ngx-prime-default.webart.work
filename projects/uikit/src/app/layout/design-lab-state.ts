import { Injectable, signal } from '@angular/core';

export type MenuMode = 'static' | 'overlay';

/**
 * Shared, app-wide state for the uikit shell's own layout settings that are not
 * ngx-prime design tokens (e.g. menu mode). Design Lab (`/design-lab`) is the only
 * place that writes to this; the shell reads it to adjust sidebar behavior.
 */
@Injectable({ providedIn: 'root' })
export class DesignLabState {
	readonly menuMode = signal<MenuMode>('static');
}
