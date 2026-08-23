import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, inject, signal, viewChild } from '@angular/core';
import { ConfirmationService, MessageService } from '@wawjs/ngx-prime/api';
import { Button } from '@wawjs/ngx-prime/button';
import { ConfirmDialog } from '@wawjs/ngx-prime/confirmdialog';
import { Dialog } from '@wawjs/ngx-prime/dialog';
import { Fluid } from '@wawjs/ngx-prime/fluid';
import { IconField } from '@wawjs/ngx-prime/iconfield';
import { InputIcon } from '@wawjs/ngx-prime/inputicon';
import { InputNumber } from '@wawjs/ngx-prime/inputnumber';
import { InputText } from '@wawjs/ngx-prime/inputtext';
import { RadioButton } from '@wawjs/ngx-prime/radiobutton';
import { Rating } from '@wawjs/ngx-prime/rating';
import { Select } from '@wawjs/ngx-prime/select';
import {
	SortIcon,
	SortableColumn,
	Table,
	TableCheckbox,
	TableHeaderCheckbox,
} from '@wawjs/ngx-prime/table';
import { Tag } from '@wawjs/ngx-prime/tag';
import { Textarea } from '@wawjs/ngx-prime/textarea';
import { Toast } from '@wawjs/ngx-prime/toast';
import { Toolbar } from '@wawjs/ngx-prime/toolbar';
import { CrudProductService } from './crud-product.service';
import type { CrudProduct } from './crud.model';

const STATUSES = [
	{ label: 'INSTOCK', value: 'instock' },
	{ label: 'LOWSTOCK', value: 'lowstock' },
	{ label: 'OUTOFSTOCK', value: 'outofstock' },
];

@Component({
	selector: 'app-crud',
	imports: [
		FormsModule,
		CurrencyPipe,
		Toolbar,
		Button,
		Table,
		SortableColumn,
		SortIcon,
		TableHeaderCheckbox,
		TableCheckbox,
		IconField,
		InputIcon,
		InputText,
		Rating,
		Tag,
		Dialog,
		Textarea,
		Select,
		RadioButton,
		InputNumber,
		ConfirmDialog,
		Toast,
		Fluid,
	],
	templateUrl: './crud.component.html',
})
export class CrudComponent {
	private readonly _productService = inject(CrudProductService);
	private readonly _messageService = inject(MessageService);
	private readonly _confirmationService = inject(ConfirmationService);

	private readonly _table = viewChild<Table<CrudProduct>>('dt');

	protected readonly products = signal<CrudProduct[]>(this._productService.getProducts());
	protected productDialog = false;
	protected product: CrudProduct = {};
	protected selectedProducts: CrudProduct[] | null = null;
	protected submitted = false;
	protected readonly statuses = STATUSES;

	protected exportCSV(): void {
		this._table()?.exportCSV();
	}

	protected onGlobalFilter(table: Table<CrudProduct>, event: Event): void {
		table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
	}

	protected openNew(): void {
		this.product = {};
		this.submitted = false;
		this.productDialog = true;
	}

	protected editProduct(product: CrudProduct): void {
		this.product = { ...product };
		this.productDialog = true;
	}

	protected deleteSelectedProducts(): void {
		this._confirmationService.confirm({
			message: 'Are you sure you want to delete the selected products?',
			header: 'Confirm',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				const selected = this.selectedProducts;
				this.products.update((products) => products.filter((p) => !selected?.includes(p)));
				this.selectedProducts = null;
				this._messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Products Deleted',
					life: 3000,
				});
			},
		});
	}

	protected hideDialog(): void {
		this.productDialog = false;
		this.submitted = false;
	}

	protected deleteProduct(product: CrudProduct): void {
		this._confirmationService.confirm({
			message: `Are you sure you want to delete ${product.name}?`,
			header: 'Confirm',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				this.products.update((products) => products.filter((p) => p.id !== product.id));
				this._messageService.add({
					severity: 'success',
					summary: 'Successful',
					detail: 'Product Deleted',
					life: 3000,
				});
			},
		});
	}

	protected getSeverity(status: CrudProduct['inventoryStatus']) {
		switch (status) {
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

	protected saveProduct(): void {
		this.submitted = true;
		if (!this.product.name?.trim()) return;

		if (this.product.id) {
			const id = this.product.id;
			const updated = this.product;
			this.products.update((products) => products.map((p) => (p.id === id ? updated : p)));
			this._messageService.add({
				severity: 'success',
				summary: 'Successful',
				detail: 'Product Updated',
				life: 3000,
			});
		} else {
			this.product.id = _createId();
			this.product.image = 'product-placeholder.svg';
			this.products.update((products) => [...products, this.product]);
			this._messageService.add({
				severity: 'success',
				summary: 'Successful',
				detail: 'Product Created',
				life: 3000,
			});
		}

		this.productDialog = false;
		this.product = {};
	}
}

function _createId(): string {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let id = '';
	for (let i = 0; i < 5; i++) {
		id += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return id;
}
