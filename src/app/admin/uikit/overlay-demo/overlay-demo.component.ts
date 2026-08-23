import { FormsModule } from '@angular/forms';
import { Component, inject, signal } from '@angular/core';
import { ConfirmationService, MessageService } from '@wawjs/ngx-prime/api';
import { Button } from '@wawjs/ngx-prime/button';
import { ConfirmPopup } from '@wawjs/ngx-prime/confirmpopup';
import { Dialog } from '@wawjs/ngx-prime/dialog';
import { Drawer } from '@wawjs/ngx-prime/drawer';
import { InputText } from '@wawjs/ngx-prime/inputtext';
import { Popover } from '@wawjs/ngx-prime/popover';
import { SelectableRow, SortIcon, SortableColumn, Table } from '@wawjs/ngx-prime/table';
import type { TableRowSelectEvent } from '@wawjs/ngx-prime/types/table';
import { Tooltip } from '@wawjs/ngx-prime/tooltip';
import { Toast } from '@wawjs/ngx-prime/toast';
import type { Product } from '../../dashboard/data/product.model';
import { ProductService } from '../../dashboard/data/product.service';

@Component({
	selector: 'app-overlay-demo',
	imports: [
		FormsModule,
		Dialog,
		Button,
		Drawer,
		Popover,
		ConfirmPopup,
		InputText,
		Tooltip,
		Table,
		SortableColumn,
		SortIcon,
		SelectableRow,
		Toast,
	],
	templateUrl: './overlay-demo.component.html',
})
export class OverlayDemoComponent {
	private readonly _confirmationService = inject(ConfirmationService);
	private readonly _messageService = inject(MessageService);
	private readonly _productService = inject(ProductService);

	protected readonly products = signal<Product[]>(this._productService.getRecentSales());
	protected selectedProduct: Product | undefined;

	protected display = false;
	protected visibleLeft = false;
	protected visibleRight = false;
	protected visibleTop = false;
	protected visibleBottom = false;
	protected visibleFull = false;
	protected displayConfirmation = false;

	protected open(): void {
		this.display = true;
	}

	protected close(): void {
		this.display = false;
	}

	protected toggleDataTable(op: Popover, event: Event): void {
		op.toggle(event);
	}

	protected onProductSelect(op: Popover, event: TableRowSelectEvent<Product>): void {
		op.hide();
		const product = event.data as Product;
		this._messageService.add({
			severity: 'info',
			summary: 'Product Selected',
			detail: product.name,
			life: 3000,
		});
	}

	protected openConfirmation(): void {
		this.displayConfirmation = true;
	}

	protected closeConfirmation(): void {
		this.displayConfirmation = false;
	}

	protected confirm(event: Event): void {
		this._confirmationService.confirm({
			key: 'confirm2',
			target: event.target ?? new EventTarget(),
			message: 'Are you sure that you want to proceed?',
			icon: 'pi pi-exclamation-triangle',
			rejectButtonProps: { label: 'Cancel', severity: 'secondary', outlined: true },
			acceptButtonProps: { label: 'Save' },
			accept: () => {
				this._messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
			},
			reject: () => {
				this._messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
			},
		});
	}
}
