import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, afterNextRender, computed, inject, signal } from '@angular/core';
import { $t, updatePreset, updateSurfacePalette } from '@wawjs/css-prime-themes';
import Aura from '@wawjs/css-prime-themes/aura';
import Lara from '@wawjs/css-prime-themes/lara';
import Nora from '@wawjs/css-prime-themes/nora';
import { SelectButtonDirective, SelectButtonOptionDirective } from '@wawjs/ngx-prime/selectbutton';
import { LayoutService } from '../layout.service';

const PRESETS = { Aura, Lara, Nora } as const;
type PresetName = keyof typeof PRESETS;

interface SurfaceOption {
	name: string;
	palette: Record<string, string>;
}

const PRIMARY_COLOR_NAMES = [
	'emerald',
	'green',
	'lime',
	'orange',
	'amber',
	'yellow',
	'teal',
	'cyan',
	'sky',
	'blue',
	'indigo',
	'violet',
	'purple',
	'fuchsia',
	'pink',
	'rose',
];

const SURFACES: SurfaceOption[] = [
	{ name: 'slate', palette: { 500: '#64748b' } },
	{ name: 'gray', palette: { 500: '#6b7280' } },
	{ name: 'zinc', palette: { 500: '#71717a' } },
	{ name: 'neutral', palette: { 500: '#737373' } },
	{ name: 'stone', palette: { 500: '#78716c' } },
];

@Component({
	selector: 'app-configurator',
	imports: [SelectButtonDirective, SelectButtonOptionDirective],
	templateUrl: './app-configurator.component.html',
	host: {
		class:
			'hidden absolute top-13 right-0 w-72 p-4 bg-surface-0 dark:bg-surface-900 border border-surface rounded-border origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]',
	},
})
export class AppConfiguratorComponent {
	protected readonly layoutService = inject(LayoutService);
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	protected readonly presets = Object.keys(PRESETS) as PresetName[];
	protected readonly menuModeOptions = [
		{ label: 'Static', value: 'static' as const },
		{ label: 'Overlay', value: 'overlay' as const },
	];
	protected readonly surfaces = SURFACES;

	protected readonly selectedPrimaryColor = signal(this.layoutService.layoutConfig().primary);
	protected readonly selectedSurfaceColor = signal(this.layoutService.layoutConfig().surface);
	protected readonly selectedPreset = signal<PresetName>(
		this.layoutService.layoutConfig().preset as PresetName,
	);
	protected readonly menuMode = computed(() => this.layoutService.layoutConfig().menuMode);

	protected readonly primaryColors = computed(() => {
		const presetPalette = PRESETS[this.selectedPreset()].primitive as Record<
			string,
			Record<string, string>
		>;
		return PRIMARY_COLOR_NAMES.map((name) => ({ name, palette: presetPalette[name] ?? {} }));
	});

	constructor() {
		if (this._isBrowser) {
			afterNextRender(() => this._applyPreset(this.selectedPreset()));
		}
	}

	protected onPrimaryChange(color: { name: string; palette: Record<string, string> }): void {
		this.selectedPrimaryColor.set(color.name);
		this.layoutService.layoutConfig.update((state) => ({ ...state, primary: color.name }));
		updatePreset(this._buildPresetExtension(color.palette));
	}

	protected onSurfaceChange(surface: SurfaceOption): void {
		this.selectedSurfaceColor.set(surface.name);
		this.layoutService.layoutConfig.update((state) => ({ ...state, surface: surface.name }));
		updateSurfacePalette(surface.palette);
	}

	protected onPresetChange(preset: PresetName): void {
		this.selectedPreset.set(preset);
		this.layoutService.layoutConfig.update((state) => ({ ...state, preset }));
		this._applyPreset(preset);
	}

	protected onMenuModeChange(menuMode: 'static' | 'overlay'): void {
		this.layoutService.layoutConfig.update((state) => ({ ...state, menuMode }));
	}

	private _applyPreset(preset: PresetName): void {
		const color = this.primaryColors().find((c) => c.name === this.selectedPrimaryColor());
		$t()
			.preset(PRESETS[preset])
			.preset(this._buildPresetExtension(color?.palette))
			.use({ useDefaultOptions: true });
	}

	private _buildPresetExtension(palette: Record<string, string> | undefined) {
		return { semantic: { primary: palette } };
	}
}
