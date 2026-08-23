import type { Customer, OrderedProduct, Representative } from './table-demo.model';

const REPRESENTATIVES: Representative[] = [
	{ name: 'Amy Elsner', image: 'amyelsner.png' },
	{ name: 'Anna Fali', image: 'annafali.png' },
	{ name: 'Asiya Javayant', image: 'asiyajavayant.png' },
	{ name: 'Bernardo Dominic', image: 'bernardodominic.png' },
	{ name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
];

export const REPRESENTATIVE_OPTIONS = REPRESENTATIVES;

export const STATUS_OPTIONS = [
	{ label: 'Unqualified', value: 'unqualified' },
	{ label: 'Qualified', value: 'qualified' },
	{ label: 'New', value: 'new' },
	{ label: 'Negotiation', value: 'negotiation' },
	{ label: 'Renewal', value: 'renewal' },
	{ label: 'Proposal', value: 'proposal' },
];

export const CUSTOMERS: Customer[] = [
	{ id: 1000, name: 'James Butt', country: { name: 'Algeria', code: 'dz' }, company: 'Benton, John B Jr', date: '2015-09-13', status: 'qualified', activity: 17, representative: REPRESENTATIVES[0]!, verified: true, balance: 70663 },
	{ id: 1001, name: 'Josephine Darakjy', country: { name: 'Egypt', code: 'eg' }, company: 'Chanay, Jeffrey A Esq', date: '2019-02-09', status: 'negotiation', activity: 0, representative: REPRESENTATIVES[1]!, verified: true, balance: 82429 },
	{ id: 1002, name: 'Art Venere', country: { name: 'Panama', code: 'pa' }, company: 'Chemel, James L Cpa', date: '2017-05-13', status: 'unqualified', activity: 63, representative: REPRESENTATIVES[2]!, verified: false, balance: 28334 },
	{ id: 1003, name: 'Lenna Paprocki', country: { name: 'Slovenia', code: 'si' }, company: 'Feltz Printing Service', date: '2020-09-15', status: 'renewal', activity: 37, representative: REPRESENTATIVES[3]!, verified: true, balance: 88521 },
	{ id: 1004, name: 'Donette Foller', country: { name: 'South Korea', code: 'kr' }, company: 'Printing Dimensions', date: '2016-05-20', status: 'proposal', activity: 33, representative: REPRESENTATIVES[4]!, verified: true, balance: 93905 },
	{ id: 1005, name: 'Simona Morasca', country: { name: 'Italy', code: 'it' }, company: 'Chapman, Ross E Esq', date: '2018-06-25', status: 'qualified', activity: 68, representative: REPRESENTATIVES[0]!, verified: false, balance: 50041 },
	{ id: 1006, name: 'Mitsue Tollner', country: { name: 'Paraguay', code: 'py' }, company: 'Morlong Associates', date: '2019-02-09', status: 'renewal', activity: 52, representative: REPRESENTATIVES[1]!, verified: true, balance: 58706 },
	{ id: 1007, name: 'Leota Dilliard', country: { name: 'Russia', code: 'ru' }, company: 'Commercial Press', date: '2018-03-01', status: 'new', activity: 15, representative: REPRESENTATIVES[2]!, verified: true, balance: 26640 },
];

export const ORDERED_PRODUCTS: OrderedProduct[] = [
	{
		id: '1000',
		name: 'Bamboo Watch',
		image: 'bamboo-watch.jpg',
		price: 65,
		category: 'Accessories',
		rating: 4,
		inventoryStatus: 'INSTOCK',
		orders: [
			{ id: '1000-0', customer: 'David James', date: '2020-09-13', amount: 65, status: 'DELIVERED' },
			{ id: '1000-1', customer: 'Leon Rodrigues', date: '2020-05-14', amount: 130, status: 'PENDING' },
		],
	},
	{
		id: '1001',
		name: 'Black Watch',
		image: 'black-watch.jpg',
		price: 72,
		category: 'Accessories',
		rating: 5,
		inventoryStatus: 'INSTOCK',
		orders: [{ id: '1001-0', customer: 'Toriana Cosentino', date: '2021-03-25', amount: 72, status: 'CANCELLED' }],
	},
	{
		id: '1002',
		name: 'Blue Band',
		image: 'blue-band.jpg',
		price: 79,
		category: 'Fitness',
		rating: 3,
		inventoryStatus: 'LOWSTOCK',
		orders: [],
	},
];
