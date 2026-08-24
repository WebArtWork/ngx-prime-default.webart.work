import { Injectable, signal } from '@angular/core';

export type MenuMode = 'static' | 'overlay';

/**
 * Shared, app-wide state for the Design Lab (`/design-lab`).
 *
 * Several kinds of state live here:
 * - The uikit shell's own layout settings that are not ngx-prime design tokens
 *   (menu mode) — the shell reads `menuMode` to adjust sidebar behavior.
 * - A record of which theme tokens the user has actually changed via the Design
 *   Lab controls, kept `undefined`/empty until touched. The topbar's Download
 *   Config button reads these to export a diff-only JSON (only the fields the
 *   user changed), never the full preset.
 *
 * Covers: preset/primary/surface (baseline), primitive border radius scale,
 * semantic focus ring + form-field padding, a representative component-token
 * subset (button/card/table), and global config (ripple, inputVariant,
 * darkModeSelector, zIndex).
 */
@Injectable({ providedIn: 'root' })
export class DesignLabState {
	readonly menuMode = signal<MenuMode>('static');

	readonly presetName = signal<string | undefined>(undefined);
	readonly primaryColorName = signal<string | undefined>(undefined);
	readonly primaryColorHex = signal<string | undefined>(undefined);
	readonly surfaceColorName = signal<string | undefined>(undefined);
	readonly surfaceColorHex = signal<string | undefined>(undefined);

	/** Primitive tokens: border radius scale (`{none,xs,sm,md,lg,xl}`), only set once edited. */
	readonly borderRadiusScale = signal<Record<string, string> | undefined>(undefined);

	/** Semantic tokens. */
	readonly focusRingWidth = signal<string | undefined>(undefined);
	readonly focusRingStyle = signal<string | undefined>(undefined);
	readonly formFieldPaddingX = signal<string | undefined>(undefined);
	readonly formFieldPaddingY = signal<string | undefined>(undefined);

	/**
	 * Component tokens — a representative subset (button/card/table), not full
	 * coverage of all ~90 components. See ROADMAP.md section 2 for why.
	 */
	readonly componentTokenOverrides = signal<Record<string, Record<string, string>>>({});

	/** Global config (`provideNgxPrime`/`NgxPrime` service settings). */
	readonly ripple = signal<boolean | undefined>(undefined);
	readonly inputVariant = signal<'outlined' | 'filled' | undefined>(undefined);
	readonly darkModeSelector = signal<string | undefined>(undefined);
	readonly rtl = signal<boolean | undefined>(undefined);
	readonly zIndexModal = signal<number | undefined>(undefined);

	/** Whether the `pt` pass-through preview example has been toggled on. */
	readonly ptExampleEnabled = signal(false);

	hasChanges(): boolean {
		return (
			this.presetName() !== undefined ||
			this.primaryColorName() !== undefined ||
			this.surfaceColorName() !== undefined ||
			this.borderRadiusScale() !== undefined ||
			this.focusRingWidth() !== undefined ||
			this.focusRingStyle() !== undefined ||
			this.formFieldPaddingX() !== undefined ||
			this.formFieldPaddingY() !== undefined ||
			Object.keys(this.componentTokenOverrides()).length > 0 ||
			this.ripple() !== undefined ||
			this.inputVariant() !== undefined ||
			this.darkModeSelector() !== undefined ||
			this.rtl() !== undefined ||
			this.zIndexModal() !== undefined
		);
	}
}
