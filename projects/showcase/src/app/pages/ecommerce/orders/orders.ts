import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { IconFieldModule } from '@wawjs/ngx-prime/iconfield';
import { InputIconModule } from '@wawjs/ngx-prime/inputicon';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SortableColumn, SortIcon, Table } from '@wawjs/ngx-prime/table';
import { TagModule } from '@wawjs/ngx-prime/tag';

import { ORDERS } from './orders.data';

@Component({
	selector: 'sc-orders',
	imports: [
		Table,
		SortableColumn,
		SortIcon,
		TagModule,
		InputTextModule,
		IconFieldModule,
		InputIconModule,
		ButtonModule,
		CardModule,
		RouterLink,
	],
	templateUrl: './orders.html',
	styleUrl: './orders.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Orders {
	protected readonly orders = ORDERS;

	private readonly table = viewChild<Table>('dt');

	protected onSearch(value: string): void {
		this.table()?.filterGlobal(value, 'contains');
	}
}
