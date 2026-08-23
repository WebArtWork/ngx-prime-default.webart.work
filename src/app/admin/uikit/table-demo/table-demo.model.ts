export interface Representative {
	name: string;
	image: string;
}

export interface Customer {
	id: number;
	name: string;
	country: { name: string; code: string };
	company: string;
	date: string;
	status: string;
	activity: number;
	representative: Representative;
	verified: boolean;
	balance: number;
}

export interface OrderRow {
	id: string;
	customer: string;
	date: string;
	amount: number;
	status: string;
}

export interface OrderedProduct {
	id: string;
	name: string;
	image: string;
	price: number;
	category: string;
	rating: number;
	inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
	orders: OrderRow[];
}
