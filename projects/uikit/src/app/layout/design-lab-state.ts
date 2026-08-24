import { Injectable, signal } from '@angular/core';

export type MenuMode = 'static' | 'overlay';

/**
 * Shared, app-wide state for the Design Lab (`/design-lab`).
 *
 * Two kinds of state live here:
 * - The uikit shell's own layout settings that are not ngx-prime design tokens
 *   (menu mode) — the shell reads `menuMode` to adjust sidebar behavior.
 * - A record of which theme tokens the user has actually changed via the Design
 *   Lab controls, kept `undefined` until touched. The topbar's Download Config
 *   button reads these to export a diff-only JSON (only the fields the user
 *   changed), never the full preset.
 */
@Injectable({ providedIn: 'root' })
export class DesignLabState {
	readonly menuMode = signal<MenuMode>('static');

	readonly presetName = signal<string | undefined>(undefined);
	readonly primaryColorName = signal<string | undefined>(undefined);
	readonly primaryColorHex = signal<string | undefined>(undefined);
	readonly surfaceColorName = signal<string | undefined>(undefined);
	readonly surfaceColorHex = signal<string | undefined>(undefined);

	hasChanges(): boolean {
		return (
			this.presetName() !== undefined ||
			this.primaryColorName() !== undefined ||
			this.surfaceColorName() !== undefined
		);
	}
}
