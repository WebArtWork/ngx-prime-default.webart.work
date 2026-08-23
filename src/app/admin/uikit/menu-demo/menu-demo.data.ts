import type { MegaMenuItem, MenuItem } from '@wawjs/ngx-prime/api';

export const NESTED_MENU_ITEMS: MenuItem[] = [
	{
		label: 'Customers',
		icon: 'pi pi-fw pi-table',
		items: [
			{
				label: 'New',
				icon: 'pi pi-fw pi-user-plus',
				items: [
					{ label: 'Customer', icon: 'pi pi-fw pi-plus' },
					{ label: 'Duplicate', icon: 'pi pi-fw pi-copy' },
				],
			},
			{ label: 'Edit', icon: 'pi pi-fw pi-user-edit' },
		],
	},
	{
		label: 'Orders',
		icon: 'pi pi-fw pi-shopping-cart',
		items: [
			{ label: 'View', icon: 'pi pi-fw pi-list' },
			{ label: 'Search', icon: 'pi pi-fw pi-search' },
		],
	},
	{
		label: 'Shipments',
		icon: 'pi pi-fw pi-envelope',
		items: [
			{ label: 'Tracker', icon: 'pi pi-fw pi-compass' },
			{ label: 'Map', icon: 'pi pi-fw pi-map-marker' },
			{ label: 'Manage', icon: 'pi pi-fw pi-pencil' },
		],
	},
	{
		label: 'Profile',
		icon: 'pi pi-fw pi-user',
		items: [
			{ label: 'Settings', icon: 'pi pi-fw pi-cog' },
			{ label: 'Billing', icon: 'pi pi-fw pi-file' },
		],
	},
	{ label: 'Quit', icon: 'pi pi-fw pi-sign-out' },
];

export const BREADCRUMB_HOME: MenuItem = { icon: 'pi pi-home', routerLink: '/admin' };
export const BREADCRUMB_ITEMS: MenuItem[] = [
	{ label: 'Computer' },
	{ label: 'Notebook' },
	{ label: 'Accessories' },
	{ label: 'Backpacks' },
	{ label: 'Item' },
];

export const TIERED_MENU_ITEMS: MenuItem[] = [...NESTED_MENU_ITEMS.slice(0, 4), { separator: true }, { label: 'Quit', icon: 'pi pi-fw pi-sign-out' }];

export const OVERLAY_MENU_ITEMS: MenuItem[] = [
	{ label: 'Save', icon: 'pi pi-save' },
	{ label: 'Update', icon: 'pi pi-refresh' },
	{ label: 'Delete', icon: 'pi pi-trash' },
	{ separator: true },
	{ label: 'Home', icon: 'pi pi-home' },
];

export const PLAIN_MENU_ITEMS: MenuItem[] = [
	{
		label: 'Customers',
		items: [
			{ label: 'New', icon: 'pi pi-fw pi-plus' },
			{ label: 'Edit', icon: 'pi pi-fw pi-user-edit' },
		],
	},
	{
		label: 'Orders',
		items: [
			{ label: 'View', icon: 'pi pi-fw pi-list' },
			{ label: 'Search', icon: 'pi pi-fw pi-search' },
		],
	},
];

export const CONTEXT_MENU_ITEMS: MenuItem[] = [
	{ label: 'Save', icon: 'pi pi-save' },
	{ label: 'Update', icon: 'pi pi-refresh' },
	{ label: 'Delete', icon: 'pi pi-trash' },
	{ separator: true },
	{ label: 'Options', icon: 'pi pi-cog' },
];

export const MEGA_MENU_ITEMS: MegaMenuItem[] = [
	{
		label: 'Fashion',
		icon: 'pi pi-fw pi-tag',
		items: [
			[
				{ label: 'Woman', items: [{ label: 'Woman Item' }, { label: 'Woman Item' }] },
				{ label: 'Men', items: [{ label: 'Men Item' }, { label: 'Men Item' }] },
			],
			[
				{ label: 'Kids', items: [{ label: 'Kids Item' }, { label: 'Kids Item' }] },
				{ label: 'Luggage', items: [{ label: 'Luggage Item' }, { label: 'Luggage Item' }] },
			],
		],
	},
	{
		label: 'Electronics',
		icon: 'pi pi-fw pi-desktop',
		items: [
			[
				{ label: 'Computer', items: [{ label: 'Computer Item' }, { label: 'Computer Item' }] },
				{ label: 'Camcorder', items: [{ label: 'Camcorder Item' }, { label: 'Camcorder Item' }] },
			],
			[{ label: 'TV', items: [{ label: 'TV Item' }, { label: 'TV Item' }] }],
		],
	},
	{
		label: 'Furniture',
		icon: 'pi pi-fw pi-image',
		items: [
			[
				{ label: 'Living Room', items: [{ label: 'Living Room Item' }] },
				{ label: 'Kitchen', items: [{ label: 'Kitchen Item' }] },
			],
		],
	},
];

export const PANEL_MENU_ITEMS: MenuItem[] = NESTED_MENU_ITEMS.slice(0, 4);
