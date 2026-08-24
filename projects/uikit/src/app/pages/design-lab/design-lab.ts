import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import Aura from '@wawjs/css-prime-themes/aura';
import Lara from '@wawjs/css-prime-themes/lara';
import Nora from '@wawjs/css-prime-themes/nora';
import { updatePrimaryPalette, updateSurfacePalette, usePreset } from '@wawjs/css-prime-styled';
import { DesignLabState, type MenuMode } from '../../layout/design-lab-state';

interface SwatchOption {
	name: string;
	color: string;
}

interface PresetOption {
	name: string;
	preset: unknown;
}

@Component({
	selector: 'uk-design-lab',
	imports: [ButtonModule],
	templateUrl: './design-lab.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignLab {
	protected readonly designLabState = inject(DesignLabState);

	protected readonly presets: PresetOption[] = [
		{ name: 'Aura', preset: Aura },
		{ name: 'Lara', preset: Lara },
		{ name: 'Nora', preset: Nora },
	];

	protected readonly activePreset = signal('Aura');

	protected readonly primaryColors: SwatchOption[] = [
		{ name: 'green', color: '#22c55e' },
		{ name: 'lime', color: '#84cc16' },
		{ name: 'orange', color: '#f97316' },
		{ name: 'amber', color: '#f59e0b' },
		{ name: 'yellow', color: '#eab308' },
		{ name: 'teal', color: '#14b8a6' },
		{ name: 'cyan', color: '#06b6d4' },
		{ name: 'blue', color: '#3b82f6' },
		{ name: 'indigo', color: '#6366f1' },
		{ name: 'violet', color: '#8b5cf6' },
		{ name: 'purple', color: '#a855f7' },
		{ name: 'pink', color: '#ec4899' },
		{ name: 'rose', color: '#f43f5e' },
	];

	protected readonly surfaceColors: SwatchOption[] = [
		{ name: 'slate', color: '#64748b' },
		{ name: 'gray', color: '#6b7280' },
		{ name: 'zinc', color: '#71717a' },
		{ name: 'neutral', color: '#737373' },
		{ name: 'stone', color: '#78716c' },
	];

	protected readonly activePrimary = signal('blue');
	protected readonly activeSurface = signal<string | undefined>(undefined);
	protected readonly dark = signal(document.documentElement.classList.contains('app-dark'));

	protected selectPreset(option: PresetOption): void {
		usePreset(option.preset as Record<string, unknown>);
		this.activePreset.set(option.name);
		this.designLabState.presetName.set(option.name === 'Aura' ? undefined : option.name);
	}

	protected selectPrimary(swatch: SwatchOption): void {
		updatePrimaryPalette(swatch.color);
		this.activePrimary.set(swatch.name);
		this.designLabState.primaryColorName.set(swatch.name);
		this.designLabState.primaryColorHex.set(swatch.color);
	}

	protected selectSurface(swatch: SwatchOption): void {
		updateSurfacePalette(swatch.color);
		this.activeSurface.set(swatch.name);
		this.designLabState.surfaceColorName.set(swatch.name);
		this.designLabState.surfaceColorHex.set(swatch.color);
	}

	protected setMenuMode(mode: MenuMode): void {
		this.designLabState.menuMode.set(mode);
	}

	protected toggleDarkMode(): void {
		this.dark.update((value) => !value);
		document.documentElement.classList.toggle('app-dark', this.dark());
	}
}
