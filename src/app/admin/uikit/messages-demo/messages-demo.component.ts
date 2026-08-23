import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { MessageService } from '@wawjs/ngx-prime/api';
import { Button } from '@wawjs/ngx-prime/button';
import { InputText } from '@wawjs/ngx-prime/inputtext';
import { Message } from '@wawjs/ngx-prime/message';
import { Toast } from '@wawjs/ngx-prime/toast';

@Component({
	selector: 'app-messages-demo',
	imports: [FormsModule, Toast, Button, InputText, Message],
	templateUrl: './messages-demo.component.html',
})
export class MessagesDemoComponent {
	private readonly _messageService = inject(MessageService);

	protected username: string | undefined;
	protected email: string | undefined;
	protected readonly pt = { contentWrapper: 'flex items-center' };

	protected showSuccessViaToast(): void {
		this._messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
	}

	protected showInfoViaToast(): void {
		this._messageService.add({ severity: 'info', summary: 'Info Message', detail: 'ngx-prime rocks' });
	}

	protected showWarnViaToast(): void {
		this._messageService.add({
			severity: 'warn',
			summary: 'Warn Message',
			detail: 'There are unsaved changes',
		});
	}

	protected showErrorViaToast(): void {
		this._messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
	}
}
