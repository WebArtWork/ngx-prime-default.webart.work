import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { ToggleSwitchModule } from '@wawjs/ngx-prime/toggleswitch';
import { TableModule } from '@wawjs/ngx-prime/table';
import { FormsModule } from '@angular/forms';
import Aura from '@wawjs/css-prime-themes/aura';
import Lara from '@wawjs/css-prime-themes/lara';
import Nora from '@wawjs/css-prime-themes/nora';
import {
	updatePreset,
	updatePrimaryPalette,
	updateSurfacePalette,
	usePreset,
} from '@wawjs/css-prime-styled';
import { NgxPrime } from '@wawjs/ngx-prime/config';
import { DesignLabState, type MenuMode } from '../../layout/design-lab-state';

interface SwatchOption {
	name: string;
	color: string;
}

interface PresetOption {
	name: string;
	preset: unknown;
}

interface ComponentTokenField {
	label: string;
	path: string[]; // path within components.<name>.<...>
	value: string;
}

interface ComponentTokenGroup {
	name: string;
	label: string;
	fields: ComponentTokenField[];
}

@Component({
	selector: 'uk-design-lab',
	imports: [
		ButtonModule,
		CardModule,
		InputTextModule,
		SelectButtonModule,
		ToggleSwitchModule,
		TableModule,
		FormsModule,
	],
	templateUrl: './design-lab.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignLab {
	protected readonly designLabState = inject(DesignLabState);
	protected readonly ngxPrime = inject(NgxPrime);

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

	// --- Primitive tokens: border radius scale ------------------------------

	protected readonly borderRadiusScale = signal<Record<string, string>>({
		none: '0',
		xs: '2px',
		sm: '4px',
		md: '6px',
		lg: '8px',
		xl: '12px',
	});

	protected setBorderRadiusStep(step: string, value: string): void {
		this.borderRadiusScale.update((scale) => ({ ...scale, [step]: value }));
	}

	protected applyBorderRadiusScale(): void {
		const scale = this.borderRadiusScale();
		updatePreset({ primitive: { borderRadius: scale } });
		this.designLabState.borderRadiusScale.set({ ...scale });
	}

	// --- Semantic tokens: focus ring + form-field padding --------------------

	protected readonly focusRingWidth = signal('1px');
	protected readonly focusRingStyleOptions = ['solid', 'dashed', 'none'];
	protected readonly focusRingStyle = signal('solid');
	protected readonly formFieldPaddingX = signal('0.75rem');
	protected readonly formFieldPaddingY = signal('0.5rem');

	protected applyFocusRing(): void {
		updatePreset({
			semantic: {
				focusRing: { width: this.focusRingWidth(), style: this.focusRingStyle() },
			},
		});
		this.designLabState.focusRingWidth.set(this.focusRingWidth());
		this.designLabState.focusRingStyle.set(this.focusRingStyle());
	}

	protected applyFormFieldPadding(): void {
		updatePreset({
			semantic: {
				formField: {
					paddingX: this.formFieldPaddingX(),
					paddingY: this.formFieldPaddingY(),
				},
			},
		});
		this.designLabState.formFieldPaddingX.set(this.formFieldPaddingX());
		this.designLabState.formFieldPaddingY.set(this.formFieldPaddingY());
	}

	// --- Component tokens: representative subset (button/card/table) --------
	//
	// Full per-component editing across all ~90 uikit components is out of
	// scope for this pass — see ROADMAP.md section 2. This is a documented
	// example of the pattern (search/filter over a token tree) scoped to three
	// representative components instead.

	protected readonly componentTokenSearch = signal('');

	protected readonly componentTokenGroups = signal<ComponentTokenGroup[]>([
		{
			name: 'button',
			label: 'Button',
			fields: [
				{ label: 'Root border radius', path: ['root', 'borderRadius'], value: '6px' },
				{ label: 'Root gap', path: ['root', 'gap'], value: '0.5rem' },
			],
		},
		{
			name: 'card',
			label: 'Card',
			fields: [
				{ label: 'Body padding', path: ['root', 'body', 'padding'], value: '1.25rem' },
				{ label: 'Body gap', path: ['root', 'body', 'gap'], value: '0.5rem' },
			],
		},
		{
			name: 'datatable',
			label: 'Table',
			fields: [
				{ label: 'Header cell padding', path: ['header', 'cell', 'padding'], value: '0.75rem 1rem' },
				{ label: 'Body cell padding', path: ['bodyCell', 'padding'], value: '0.75rem 1rem' },
			],
		},
	]);

	protected filteredComponentTokenGroups(): ComponentTokenGroup[] {
		const term = this.componentTokenSearch().trim().toLowerCase();
		const groups = this.componentTokenGroups();
		if (!term) return groups;
		return groups
			.map((group) => ({
				...group,
				fields: group.fields.filter(
					(field) =>
						group.label.toLowerCase().includes(term) || field.label.toLowerCase().includes(term),
				),
			}))
			.filter((group) => group.fields.length > 0);
	}

	protected setComponentTokenValue(groupName: string, fieldPath: string[], value: string): void {
		this.componentTokenGroups.update((groups) =>
			groups.map((group) =>
				group.name !== groupName
					? group
					: {
							...group,
							fields: group.fields.map((field) =>
								field.path === fieldPath || field.path.join('.') === fieldPath.join('.')
									? { ...field, value }
									: field,
							),
						},
			),
		);
	}

	protected applyComponentToken(group: ComponentTokenGroup, field: ComponentTokenField): void {
		const override: Record<string, unknown> = {};
		let cursor = override;
		field.path.forEach((key, index) => {
			if (index === field.path.length - 1) {
				cursor[key] = field.value;
			} else {
				cursor[key] = {};
				cursor = cursor[key] as Record<string, unknown>;
			}
		});
		updatePreset({ components: { [group.name]: override } });
		this.designLabState.componentTokenOverrides.update((overrides) => ({
			...overrides,
			[group.name]: { ...(overrides[group.name] ?? {}), [field.path.join('.')]: field.value },
		}));
	}

	// --- Global config --------------------------------------------------------

	protected readonly inputVariantOptions = ['outlined', 'filled'];

	protected toggleRipple(value: boolean): void {
		this.ngxPrime.ripple.set(value);
		this.designLabState.ripple.set(value);
	}

	protected setInputVariant(value: 'outlined' | 'filled'): void {
		this.ngxPrime.inputVariant.set(value);
		this.designLabState.inputVariant.set(value);
	}

	protected readonly darkModeSelectorValue = signal('.app-dark');

	protected applyDarkModeSelector(): void {
		// Re-applying the theme options updates the selector the ThemeProvider
		// watches for dark mode; the demo app itself still toggles `.app-dark`.
		usePreset(this.presets.find((preset) => preset.name === this.activePreset())?.preset as any);
		this.designLabState.darkModeSelector.set(this.darkModeSelectorValue());
	}

	protected readonly rtl = signal(false);

	protected toggleRtl(value: boolean): void {
		this.rtl.set(value);
		document.documentElement.setAttribute('dir', value ? 'rtl' : 'ltr');
		this.designLabState.rtl.set(value);
	}

	protected readonly zIndexModal = signal(1100);

	protected applyZIndexModal(): void {
		this.ngxPrime.zIndex.modal = this.zIndexModal();
		this.designLabState.zIndexModal.set(this.zIndexModal());
	}

	// --- Pass-through (pt) preview --------------------------------------------

	protected readonly ptExampleEnabled = signal(false);

	protected readonly ptExample = {
		root: { style: 'border-width: 2px; border-style: dashed;' },
		label: { style: 'font-style: italic;' },
	};

	protected togglePtExample(value: boolean): void {
		this.ptExampleEnabled.set(value);
		this.designLabState.ptExampleEnabled.set(value);
	}
}
