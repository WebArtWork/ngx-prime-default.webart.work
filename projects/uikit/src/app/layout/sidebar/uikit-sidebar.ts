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
			items: [{ label: 'Table', routerLink: ['/data/table'] }],
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
