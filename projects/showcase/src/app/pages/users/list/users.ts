import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { IconFieldModule } from '@wawjs/ngx-prime/iconfield';
import { InputIconModule } from '@wawjs/ngx-prime/inputicon';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SortableColumn, SortIcon, Table } from '@wawjs/ngx-prime/table';
import { TagModule } from '@wawjs/ngx-prime/tag';

import { USERS } from './users.data';

@Component({
	selector: 'sc-users',
	imports: [Table, SortableColumn, SortIcon, TagModule, InputTextModule, IconFieldModule, InputIconModule],
	templateUrl: './users.html',
	styleUrl: './users.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Users {
	protected readonly users = USERS;

	private readonly table = viewChild<Table>('dt');

	protected onSearch(value: string): void {
		this.table()?.filterGlobal(value, 'contains');
	}
}
