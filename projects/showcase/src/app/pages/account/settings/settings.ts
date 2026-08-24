import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { PasswordModule } from '@wawjs/ngx-prime/password';
import { TabsModule } from '@wawjs/ngx-prime/tabs';
import { ToggleSwitchModule } from '@wawjs/ngx-prime/toggleswitch';

@Component({
	selector: 'sc-account-settings',
	imports: [
		FormsModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		PasswordModule,
		TabsModule,
		ToggleSwitchModule,
	],
	templateUrl: './settings.html',
	styleUrl: './settings.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSettings {
	protected readonly name = signal('Ada Lovelace');
	protected readonly email = signal('ada.lovelace@example.com');

	protected readonly currentPassword = signal('');
	protected readonly newPassword = signal('');

	protected readonly emailNotifications = signal(true);
	protected readonly pushNotifications = signal(false);
	protected readonly weeklyDigest = signal(true);
}
