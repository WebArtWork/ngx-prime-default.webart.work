import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { FileUploadModule } from '@wawjs/ngx-prime/fileupload';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { ToggleSwitchModule } from '@wawjs/ngx-prime/toggleswitch';

interface RoleOption {
	label: string;
	value: string;
}

@Component({
	selector: 'sc-user-create-edit',
	imports: [
		FormsModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		SelectModule,
		FileUploadModule,
		ToggleSwitchModule,
	],
	templateUrl: './user-create-edit.html',
	styleUrl: './user-create-edit.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateEdit {
	protected readonly roles: RoleOption[] = [
		{ label: 'Admin', value: 'admin' },
		{ label: 'Editor', value: 'editor' },
		{ label: 'Viewer', value: 'viewer' },
	];

	protected readonly name = signal('');
	protected readonly email = signal('');
	protected readonly role = signal<RoleOption | null>(null);
	protected readonly active = signal(true);

	protected onAvatarUpload(): void {
		// Demo-only handler — a real app would upload to its own API.
	}
}
