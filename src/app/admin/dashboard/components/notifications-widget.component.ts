import { Component, viewChild } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { Button } from '@wawjs/ngx-prime/button';
import { Menu } from '@wawjs/ngx-prime/menu';

interface NotificationItem {
	icon: string;
	iconBg: string;
	iconColor: string;
	message: string;
	highlight?: string;
	name?: string;
}

interface NotificationGroup {
	heading: string;
	items: NotificationItem[];
}

const GROUPS: NotificationGroup[] = [
	{
		heading: 'TODAY',
		items: [
			{
				icon: 'pi pi-dollar',
				iconBg: 'bg-blue-100 dark:bg-blue-400/10',
				iconColor: 'text-blue-500',
				name: 'Richard Jones',
				message: 'has purchased a blue t-shirt for',
				highlight: '$79.00',
			},
			{
				icon: 'pi pi-download',
				iconBg: 'bg-orange-100 dark:bg-orange-400/10',
				iconColor: 'text-orange-500',
				message: 'Your request for withdrawal of $2500.00 has been initiated.',
			},
		],
	},
	{
		heading: 'YESTERDAY',
		items: [
			{
				icon: 'pi pi-dollar',
				iconBg: 'bg-blue-100 dark:bg-blue-400/10',
				iconColor: 'text-blue-500',
				name: 'Keyser Wick',
				message: 'has purchased a black jacket for',
				highlight: '$59.00',
			},
			{
				icon: 'pi pi-question',
				iconBg: 'bg-pink-100 dark:bg-pink-400/10',
				iconColor: 'text-pink-500',
				name: 'Jane Davis',
				message: 'has posted a new question about your product.',
			},
		],
	},
	{
		heading: 'LAST WEEK',
		items: [
			{
				icon: 'pi pi-arrow-up',
				iconBg: 'bg-green-100 dark:bg-green-400/10',
				iconColor: 'text-green-500',
				message: 'Your revenue has increased by 25%.',
			},
			{
				icon: 'pi pi-heart',
				iconBg: 'bg-purple-100 dark:bg-purple-400/10',
				iconColor: 'text-purple-500',
				message: 'users have added your products to their wishlist.',
				highlight: '12',
			},
		],
	},
];

@Component({
	selector: 'app-notifications-widget',
	imports: [Button, Menu],
	templateUrl: './notifications-widget.component.html',
})
export class NotificationsWidgetComponent {
	protected readonly groups = GROUPS;
	protected readonly menuItems: MenuItem[] = [
		{ label: 'Add New', icon: 'pi pi-fw pi-plus' },
		{ label: 'Remove', icon: 'pi pi-fw pi-trash' },
	];

	private readonly _menu = viewChild.required<Menu>('menu');

	protected toggleMenu(event: Event): void {
		this._menu().toggle(event);
	}
}
