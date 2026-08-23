import { Component, viewChild } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { Button } from '@wawjs/ngx-prime/button';
import { Menu } from '@wawjs/ngx-prime/menu';

interface BestSeller {
	name: string;
	category: string;
	percent: number;
	barColor: string;
	textColor: string;
}

const BEST_SELLERS: BestSeller[] = [
	{ name: 'Space T-Shirt', category: 'Clothing', percent: 50, barColor: 'bg-orange-500', textColor: 'text-orange-500' },
	{ name: 'Portal Sticker', category: 'Accessories', percent: 16, barColor: 'bg-cyan-500', textColor: 'text-cyan-500' },
	{ name: 'Supernova Sticker', category: 'Accessories', percent: 67, barColor: 'bg-pink-500', textColor: 'text-pink-500' },
	{ name: 'Wonders Notebook', category: 'Office', percent: 35, barColor: 'bg-green-500', textColor: 'text-primary' },
	{ name: 'Mat Black Case', category: 'Accessories', percent: 75, barColor: 'bg-purple-500', textColor: 'text-purple-500' },
	{ name: 'Robots T-Shirt', category: 'Clothing', percent: 40, barColor: 'bg-teal-500', textColor: 'text-teal-500' },
];

@Component({
	selector: 'app-best-selling-widget',
	imports: [Button, Menu],
	templateUrl: './best-selling-widget.component.html',
})
export class BestSellingWidgetComponent {
	protected readonly bestSellers = BEST_SELLERS;
	protected readonly menuItems: MenuItem[] = [
		{ label: 'Add New', icon: 'pi pi-fw pi-plus' },
		{ label: 'Remove', icon: 'pi pi-fw pi-trash' },
	];

	private readonly _menu = viewChild.required<Menu>('menu');

	protected toggleMenu(event: Event): void {
		this._menu().toggle(event);
	}
}
