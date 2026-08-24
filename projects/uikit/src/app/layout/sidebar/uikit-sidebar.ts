import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { PanelMenuModule } from '@wawjs/ngx-prime/panelmenu';

@Component({
	selector: 'uk-sidebar',
	imports: [PanelMenuModule],
	templateUrl: './uikit-sidebar.html',
	styleUrl: './uikit-sidebar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UikitSidebar {
	protected readonly items: MenuItem[] = [
		{
			label: 'Form',
			icon: 'pi pi-file-edit',
			items: [
				{ label: 'Input', routerLink: ['/form/input'] },
				{ label: 'Select', routerLink: ['/form/select'] },
				{ label: 'Checkbox', routerLink: ['/form/checkbox'] },
				{ label: 'RadioButton', routerLink: ['/form/radiobutton'] },
				{ label: 'Rating', routerLink: ['/form/rating'] },
				{ label: 'Slider', routerLink: ['/form/slider'] },
				{ label: 'Textarea', routerLink: ['/form/textarea'] },
				{ label: 'ToggleButton', routerLink: ['/form/togglebutton'] },
				{ label: 'ToggleSwitch', routerLink: ['/form/toggleswitch'] },
				{ label: 'FloatLabel', routerLink: ['/form/floatlabel'] },
				{ label: 'InputNumber', routerLink: ['/form/inputnumber'] },
				{ label: 'Password', routerLink: ['/form/password'] },
				{ label: 'SelectButton', routerLink: ['/form/selectbutton'] },
				{ label: 'AutoComplete', routerLink: ['/form/autocomplete'] },
				{ label: 'CascadeSelect', routerLink: ['/form/cascadeselect'] },
				{ label: 'ColorPicker', routerLink: ['/form/colorpicker'] },
				{ label: 'DatePicker', routerLink: ['/form/datepicker'] },
				{ label: 'Editor', routerLink: ['/form/editor'] },
				{ label: 'Fieldset', routerLink: ['/form/fieldset'] },
				{ label: 'IconField', routerLink: ['/form/iconfield'] },
				{ label: 'InputGroup', routerLink: ['/form/inputgroup'] },
				{ label: 'InputMask', routerLink: ['/form/inputmask'] },
				{ label: 'InputOtp', routerLink: ['/form/inputotp'] },
				{ label: 'KeyFilter', routerLink: ['/form/keyfilter'] },
				{ label: 'Listbox', routerLink: ['/form/listbox'] },
				{ label: 'MultiSelect', routerLink: ['/form/multiselect'] },
				{ label: 'TreeSelect', routerLink: ['/form/treeselect'] },
				{ label: 'FileUpload', routerLink: ['/form/fileupload'] },
			],
		},
		{
			label: 'Button',
			icon: 'pi pi-stop',
			items: [{ label: 'Button', routerLink: ['/button/button'] }],
		},
		{
			label: 'Data',
			icon: 'pi pi-table',
			items: [
				{ label: 'Table', routerLink: ['/data/table'] },
				{ label: 'DataView', routerLink: ['/data/dataview'] },
				{ label: 'OrderList', routerLink: ['/data/orderlist'] },
				{ label: 'OrganizationChart', routerLink: ['/data/organizationchart'] },
				{ label: 'Paginator', routerLink: ['/data/paginator'] },
				{ label: 'PickList', routerLink: ['/data/picklist'] },
				{ label: 'Timeline', routerLink: ['/data/timeline'] },
				{ label: 'Tree', routerLink: ['/data/tree'] },
				{ label: 'TreeTable', routerLink: ['/data/treetable'] },
			],
		},
		{
			label: 'Overlay',
			icon: 'pi pi-window-maximize',
			items: [{ label: 'Dialog', routerLink: ['/overlay/dialog'] }],
		},
		{
			label: 'Layout',
			icon: 'pi pi-th-large',
			items: [{ label: 'Card', routerLink: ['/layout/card'] }],
		},
	];
}
