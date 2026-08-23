import { Injectable } from '@angular/core';
import type { Product } from './product.model';

const PRODUCTS: Product[] = [
	{ id: '1000', name: 'Bamboo Watch', image: 'bamboo-watch.jpg', price: 65 },
	{ id: '1001', name: 'Black Watch', image: 'black-watch.jpg', price: 72 },
	{ id: '1002', name: 'Blue Band', image: 'blue-band.jpg', price: 79 },
	{ id: '1003', name: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 29 },
	{ id: '1004', name: 'Bracelet', image: 'bracelet.jpg', price: 15 },
	{ id: '1005', name: 'Brown Purse', image: 'brown-purse.jpg', price: 120 },
];

@Injectable({ providedIn: 'root' })
export class ProductService {
	getRecentSales(): Product[] {
		return PRODUCTS;
	}
}
