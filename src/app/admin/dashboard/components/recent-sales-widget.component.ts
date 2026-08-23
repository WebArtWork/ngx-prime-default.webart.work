import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Button } from '@wawjs/ngx-prime/button';
import { SortIcon, SortableColumn, Table } from '@wawjs/ngx-prime/table';
import { ProductService } from '../data/product.service';

@Component({
	selector: 'app-recent-sales-widget',
	imports: [CurrencyPipe, Table, SortableColumn, SortIcon, Button],
	templateUrl: './recent-sales-widget.component.html',
})
export class RecentSalesWidgetComponent {
	private readonly _productService = inject(ProductService);

	protected readonly products = this._productService.getRecentSales();
}
