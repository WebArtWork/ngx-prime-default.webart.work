import { Component } from '@angular/core';
import { AppMenuitemComponent } from '../app-menuitem/app-menuitem.component';
import type { AppMenuItem } from '../app-menuitem/app-menuitem.model';

const MENU_MODEL: AppMenuItem[] = [
	{
		label: 'Home',
		items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] }],
	},
	{
		label: 'UI Components',
		items: [
			{ label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/uikit/formlayout'] },
			{ label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/uikit/input'] },
			{ label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/admin/uikit/button'] },
			{ label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/admin/uikit/table'] },
			{ label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/admin/uikit/list'] },
			{ label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/admin/uikit/tree'] },
			{ label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/admin/uikit/panel'] },
			{ label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/admin/uikit/overlay'] },
			{ label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/admin/uikit/media'] },
			{ label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/admin/uikit/menu'] },
			{ label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/admin/uikit/message'] },
			{ label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/admin/uikit/file'] },
			{ label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/admin/uikit/charts'] },
			{ label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/admin/uikit/timeline'] },
			{ label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/admin/uikit/misc'] },
		],
	},
	{
		label: 'Pages',
		icon: 'pi pi-fw pi-briefcase',
		path: '/admin/pages',
		items: [
			{
				label: 'Auth',
				icon: 'pi pi-fw pi-user',
				path: '/admin/auth',
				items: [
					{ label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/admin/auth/login'] },
					{ label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['/admin/auth/error'] },
					{ label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['/admin/auth/access'] },
				],
			},
			{ label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/admin/pages/crud'] },
			{ label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/admin/notfound'] },
			{ label: 'Empty', icon: 'pi pi-fw pi-circle-off', routerLink: ['/admin/pages/empty'] },
		],
	},
	{
		label: 'Get Started',
		items: [
			{ label: 'Documentation', icon: 'pi pi-fw pi-book', routerLink: ['/admin/documentation'] },
			{
				label: 'View Source',
				icon: 'pi pi-fw pi-github',
				url: 'https://github.com/WebArtWork/ngx-prime',
				target: '_blank',
			},
		],
	},
];

@Component({
	selector: 'app-menu',
	imports: [AppMenuitemComponent],
	template: `<ul class="layout-menu">
		@for (item of model; track item.label) {
			<li app-menuitem [item]="item" [root]="true"></li>
		}
	</ul>`,
})
export class AppMenuComponent {
	protected readonly model = MENU_MODEL;
}
