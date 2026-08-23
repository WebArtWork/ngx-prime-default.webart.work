import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Button } from '@wawjs/ngx-prime/button';
import { DataView } from '@wawjs/ngx-prime/dataview';
import { OrderList } from '@wawjs/ngx-prime/orderlist';
import { PickList } from '@wawjs/ngx-prime/picklist';
import { SelectButtonDirective, SelectButtonOptionDirective } from '@wawjs/ngx-prime/selectbutton';
import { Tag } from '@wawjs/ngx-prime/tag';
import type { Product } from '../../dashboard/data/product.model';

interface CityOption {
	name: string;
	code: string;
}

const CITIES: CityOption[] = [
	{ name: 'San Francisco', code: 'SF' },
	{ name: 'London', code: 'LDN' },
	{ name: 'Paris', code: 'PRS' },
	{ name: 'Istanbul', code: 'IST' },
	{ name: 'Berlin', code: 'BRL' },
	{ name: 'Barcelona', code: 'BRC' },
	{ name: 'Rome', code: 'RM' },
];

interface ListProduct extends Product {
	category: string;
	rating: number;
	inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
}

const PRODUCTS: ListProduct[] = [
	{ id: '1', name: 'Bamboo Watch', image: 'bamboo-watch.jpg', price: 65, category: 'Accessories', rating: 4, inventoryStatus: 'INSTOCK' },
	{ id: '2', name: 'Black Watch', image: 'black-watch.jpg', price: 72, category: 'Accessories', rating: 5, inventoryStatus: 'INSTOCK' },
	{ id: '3', name: 'Blue Band', image: 'blue-band.jpg', price: 79, category: 'Fitness', rating: 3, inventoryStatus: 'LOWSTOCK' },
	{ id: '4', name: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 29, category: 'Clothing', rating: 4, inventoryStatus: 'OUTOFSTOCK' },
	{ id: '5', name: 'Bracelet', image: 'bracelet.jpg', price: 15, category: 'Accessories', rating: 4, inventoryStatus: 'INSTOCK' },
	{ id: '6', name: 'Brown Purse', image: 'brown-purse.jpg', price: 120, category: 'Accessories', rating: 4, inventoryStatus: 'INSTOCK' },
];

@Component({
	selector: 'app-list-demo',
	imports: [
		FormsModule,
		DataView,
		SelectButtonDirective,
		SelectButtonOptionDirective,
		PickList,
		OrderList,
		Tag,
		Button,
	],
	templateUrl: './list-demo.component.html',
})
export class ListDemoComponent {
	protected layout: 'list' | 'grid' = 'list';
	protected readonly options: Array<'list' | 'grid'> = ['list', 'grid'];
	protected readonly products = PRODUCTS;

	protected sourceCities = CITIES.slice();
	protected targetCities: CityOption[] = [];
	protected orderCities = CITIES.slice();

	protected getSeverity(product: ListProduct) {
		switch (product.inventoryStatus) {
			case 'INSTOCK':
				return 'success';
			case 'LOWSTOCK':
				return 'warn';
			case 'OUTOFSTOCK':
				return 'danger';
			default:
				return 'info';
		}
	}
}
