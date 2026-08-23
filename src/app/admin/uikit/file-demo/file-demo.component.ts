import { Component, inject } from '@angular/core';
import { MessageService } from '@wawjs/ngx-prime/api';
import { Button } from '@wawjs/ngx-prime/button';
import { FileUpload } from '@wawjs/ngx-prime/fileupload';
import type { FileUploadEvent } from '@wawjs/ngx-prime/types/fileupload';
import { Toast } from '@wawjs/ngx-prime/toast';

@Component({
	selector: 'app-file-demo',
	imports: [FileUpload, Toast, Button],
	templateUrl: './file-demo.component.html',
})
export class FileDemoComponent {
	private readonly _messageService = inject(MessageService);

	protected onUpload(_event: FileUploadEvent): void {
		this._messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
	}
}
