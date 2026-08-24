import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { PanelMenuModule } from '@wawjs/ngx-prime/panelmenu';

@Component({
	selector: 'sc-sidebar',
	imports: [PanelMenuModule],
	templateUrl: './showcase-sidebar.html',
	styleUrl: './showcase-sidebar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseSidebar {
	protected readonly items: MenuItem[] = [
		{ label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/'] },
		{ label: 'Users', icon: 'pi pi-users', routerLink: ['/users'] },
		{ label: 'Profile', icon: 'pi pi-user', routerLink: ['/profile'] },
		{ label: 'Landing', icon: 'pi pi-globe', routerLink: ['/landing'] },
	];
}
