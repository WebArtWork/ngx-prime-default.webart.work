import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { BreadcrumbModule } from '@wawjs/ngx-prime/breadcrumb';
import { CardModule } from '@wawjs/ngx-prime/card';
import { FileUploadModule } from '@wawjs/ngx-prime/fileupload';
import { TableModule } from '@wawjs/ngx-prime/table';

import { FILE_ROWS } from './files.data';

@Component({
	selector: 'sc-files',
	imports: [BreadcrumbModule, CardModule, TableModule, FileUploadModule],
	templateUrl: './files.html',
	styleUrl: './files.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Files {
	protected readonly files = FILE_ROWS;
	protected readonly home: MenuItem = { icon: 'pi pi-home', routerLink: '/applications/files' };
	protected readonly breadcrumbItems: MenuItem[] = [{ label: 'Documents' }];

	protected onUpload(): void {
		// Demo-only handler — a real app would upload to its own API.
	}
}
