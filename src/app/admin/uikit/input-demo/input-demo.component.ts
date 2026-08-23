import { FormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';
import type { AutoCompleteCompleteEvent } from '@wawjs/ngx-prime/types/autocomplete';
import type { TreeNode } from '@wawjs/ngx-prime/api';
import { AutoComplete } from '@wawjs/ngx-prime/autocomplete';
import { Button } from '@wawjs/ngx-prime/button';
import { Checkbox } from '@wawjs/ngx-prime/checkbox';
import { ColorPicker } from '@wawjs/ngx-prime/colorpicker';
import { DatePicker } from '@wawjs/ngx-prime/datepicker';
import { Fluid } from '@wawjs/ngx-prime/fluid';
import { IconField } from '@wawjs/ngx-prime/iconfield';
import { InputGroup } from '@wawjs/ngx-prime/inputgroup';
import { InputGroupAddon } from '@wawjs/ngx-prime/inputgroupaddon';
import { InputIcon } from '@wawjs/ngx-prime/inputicon';
import { InputNumber } from '@wawjs/ngx-prime/inputnumber';
import { InputText } from '@wawjs/ngx-prime/inputtext';
import { Knob } from '@wawjs/ngx-prime/knob';
import { FloatLabel } from '@wawjs/ngx-prime/floatlabel';
import { Listbox } from '@wawjs/ngx-prime/listbox';
import { MultiSelect } from '@wawjs/ngx-prime/multiselect';
import { RadioButton } from '@wawjs/ngx-prime/radiobutton';
import { Rating } from '@wawjs/ngx-prime/rating';
import { Select } from '@wawjs/ngx-prime/select';
import { SelectButtonDirective, SelectButtonOptionDirective } from '@wawjs/ngx-prime/selectbutton';
import { Slider } from '@wawjs/ngx-prime/slider';
import { Textarea } from '@wawjs/ngx-prime/textarea';
import { ToggleButton } from '@wawjs/ngx-prime/togglebutton';
import { ToggleSwitch } from '@wawjs/ngx-prime/toggleswitch';
import { TreeSelect } from '@wawjs/ngx-prime/treeselect';

interface NamedOption {
	name: string;
	code: string;
}

const CITY_OPTIONS: NamedOption[] = [
	{ name: 'New York', code: 'NY' },
	{ name: 'Rome', code: 'RM' },
	{ name: 'London', code: 'LDN' },
	{ name: 'Istanbul', code: 'IST' },
	{ name: 'Paris', code: 'PRS' },
];

const COUNTRY_OPTIONS: NamedOption[] = [
	{ name: 'Australia', code: 'AU' },
	{ name: 'Brazil', code: 'BR' },
	{ name: 'China', code: 'CN' },
	{ name: 'Egypt', code: 'EG' },
	{ name: 'France', code: 'FR' },
	{ name: 'Germany', code: 'DE' },
	{ name: 'India', code: 'IN' },
	{ name: 'Japan', code: 'JP' },
	{ name: 'Spain', code: 'ES' },
	{ name: 'United States', code: 'US' },
];

const TREE_SELECT_NODES: TreeNode[] = [
	{
		key: '0',
		label: 'Documents',
		icon: 'pi pi-fw pi-folder',
		children: [
			{ key: '0-0', label: 'Work', icon: 'pi pi-fw pi-folder' },
			{ key: '0-1', label: 'Home', icon: 'pi pi-fw pi-folder' },
		],
	},
	{
		key: '1',
		label: 'Events',
		icon: 'pi pi-fw pi-calendar',
		children: [
			{ key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus' },
			{ key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus' },
		],
	},
];

@Component({
	selector: 'app-input-demo',
	imports: [
		FormsModule,
		Fluid,
		InputText,
		Button,
		Checkbox,
		RadioButton,
		SelectButtonDirective,
		SelectButtonOptionDirective,
		InputGroup,
		InputGroupAddon,
		IconField,
		InputIcon,
		FloatLabel,
		AutoComplete,
		InputNumber,
		Slider,
		Rating,
		ColorPicker,
		Knob,
		Select,
		DatePicker,
		ToggleButton,
		ToggleSwitch,
		TreeSelect,
		MultiSelect,
		Listbox,
		Textarea,
	],
	templateUrl: './input-demo.component.html',
})
export class InputDemoComponent {
	protected floatValue: string | null = null;
	protected autoValue = COUNTRY_OPTIONS;
	protected autoFilteredValue = signal<NamedOption[]>([]);
	protected selectedAutoValue: NamedOption[] | null = null;
	protected calendarValue: Date | null = null;
	protected inputNumberValue: number | null = null;
	protected sliderValue = 50;
	protected ratingValue: number | null = null;
	protected colorValue = '#1976D2';
	protected radioValue: string | null = null;
	protected checkboxValue: string[] = [];
	protected switchValue = false;
	protected readonly listboxValues = CITY_OPTIONS;
	protected listboxValue: NamedOption | null = null;
	protected readonly dropdownValues = CITY_OPTIONS;
	protected dropdownValue: NamedOption | null = null;
	protected readonly multiselectCountries = COUNTRY_OPTIONS;
	protected multiselectSelectedCountries: NamedOption[] = [];
	protected toggleValue = false;
	protected selectButtonValue: NamedOption | null = null;
	protected readonly selectButtonValues: NamedOption[] = [
		{ name: 'Option 1', code: '1' },
		{ name: 'Option 2', code: '2' },
		{ name: 'Option 3', code: '3' },
	];
	protected knobValue = 50;
	protected inputGroupValue = false;
	protected readonly treeSelectNodes = TREE_SELECT_NODES;
	protected selectedNode: TreeNode | null = null;

	protected filterCountry(event: AutoCompleteCompleteEvent): void {
		const query = event.query.toLowerCase();
		this.autoFilteredValue.set(this.autoValue.filter((c) => c.name.toLowerCase().startsWith(query)));
	}
}
