import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { DesignLabState } from '../design-lab-state';

@Component({
	selector: 'uk-topbar',
	imports: [ButtonModule],
	templateUrl: './uikit-topbar.html',
	styleUrl: './uikit-topbar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UikitTopbar {
	protected readonly designLabState = inject(DesignLabState);

	readonly menuToggle = output<void>();

	protected readonly dark = signal(false);

	protected toggleDarkMode(): void {
		this.dark.update((value) => !value);
		document.documentElement.classList.toggle('app-dark', this.dark());
	}

	/**
	 * Downloads the diff-only config: just the Design Lab tokens the user has
	 * actually changed from the base preset, as a small generic JSON handoff.
	 * Live preview always stays separate — this is only a snapshot on demand.
	 */
	protected downloadConfig(): void {
		const diff: Record<string, unknown> = {};

		const preset = this.designLabState.presetName();
		if (preset !== undefined) {
			diff['preset'] = preset;
		}

		const primaryName = this.designLabState.primaryColorName();
		if (primaryName !== undefined) {
			diff['primaryPalette'] = { name: primaryName, color: this.designLabState.primaryColorHex() };
		}

		const surfaceName = this.designLabState.surfaceColorName();
		if (surfaceName !== undefined) {
			diff['surfacePalette'] = { name: surfaceName, color: this.designLabState.surfaceColorHex() };
		}

		const json = JSON.stringify(diff, null, 2);
		const blob = new Blob([json], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'ngx-prime-theme-config.json';
		link.click();
		URL.revokeObjectURL(url);
	}
}
