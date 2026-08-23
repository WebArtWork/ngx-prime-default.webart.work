import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Button, ButtonDirective } from '@wawjs/ngx-prime/button';
import { IconField } from '@wawjs/ngx-prime/iconfield';
import { InputIcon } from '@wawjs/ngx-prime/inputicon';
import { InputText } from '@wawjs/ngx-prime/inputtext';
import { MultiSelect } from '@wawjs/ngx-prime/multiselect';
import { ProgressBar } from '@wawjs/ngx-prime/progressbar';
import { Rating } from '@wawjs/ngx-prime/rating';
import { Ripple } from '@wawjs/ngx-prime/ripple';
import { Select } from '@wawjs/ngx-prime/select';
import { Slider } from '@wawjs/ngx-prime/slider';
import {
	ColumnFilter,
	FrozenColumn,
	RowGroupHeader,
	RowToggler,
	SortIcon,
	SortableColumn,
	Table,
} from '@wawjs/ngx-prime/table';
import { Tag } from '@wawjs/ngx-prime/tag';
import { ToggleButton } from '@wawjs/ngx-prime/togglebutton';
import { CUSTOMERS, ORDERED_PRODUCTS, REPRESENTATIVE_OPTIONS, STATUS_OPTIONS } from './table-demo.data';
import type { Customer, OrderedProduct } from './table-demo.model';

@Component({
	selector: 'app-table-demo',
	imports: [
		FormsModule,
		CurrencyPipe,
		DatePipe,
		Table,
		ColumnFilter,
		SortableColumn,
		SortIcon,
		FrozenColumn,
		RowGroupHeader,
		RowToggler,
		Button,
		ButtonDirective,
		Ripple,
		IconField,
		InputIcon,
		InputText,
		MultiSelect,
		Select,
		Slider,
		Tag,
		ProgressBar,
		ToggleButton,
		Rating,
	],
	templateUrl: './table-demo.component.html',
})
export class TableDemoComponent {
	protected readonly customers1 = signal<Customer[]>(CUSTOMERS);
	protected readonly customers2 = CUSTOMERS.slice(0, 5);
	protected readonly customers3 = CUSTOMERS.slice().sort((a, b) =>
		a.representative.name.localeCompare(b.representative.name),
	);
	protected readonly products = ORDERED_PRODUCTS;
	protected readonly representatives = REPRESENTATIVE_OPTIONS;
	protected readonly statuses = STATUS_OPTIONS;

	protected readonly loading = signal(false);
	protected readonly activityValues = [0, 100];
	protected readonly expandedRows = signal<Record<string, boolean>>({});
	protected isExpanded = false;
	protected balanceFrozen = false;

	private readonly _filterInput = viewChild<ElementRef<HTMLInputElement>>('filter');

	protected onGlobalFilter(table: Table<Customer>, event: Event): void {
		table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
	}

	protected clear(table: Table<Customer>): void {
		table.clear();
		const input = this._filterInput();
		if (input) input.nativeElement.value = '';
	}

	protected expandAll(): void {
		if (Object.keys(this.expandedRows()).length === 0) {
			this.expandedRows.set(Object.fromEntries(this.products.map((p) => [p.id, true])));
			this.isExpanded = true;
		} else {
			this.collapseAll();
		}
	}

	protected collapseAll(): void {
		this.expandedRows.set({});
		this.isExpanded = false;
	}

	protected formatCurrency(value: number): string {
		return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	}

	protected calculateCustomerTotal(name: string): number {
		return this.customers2.filter((c) => c.representative.name === name).length;
	}

	protected getSeverity(status: string) {
		switch (status.toLowerCase()) {
			case 'qualified':
			case 'instock':
			case 'delivered':
				return 'success';
			case 'negotiation':
			case 'lowstock':
			case 'pending':
				return 'warn';
			case 'unqualified':
			case 'outofstock':
			case 'cancelled':
				return 'danger';
			default:
				return 'info';
		}
	}

	protected trackByProduct(_: number, product: OrderedProduct): string {
		return product.id;
	}
}
