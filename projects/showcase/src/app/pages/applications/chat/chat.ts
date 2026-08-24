import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from '@wawjs/ngx-prime/avatar';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';

import { CHAT_CONTACTS, CHAT_MESSAGES, type ChatMessage } from './chat.data';

/**
 * No ready-made chat component in ngx-prime — this composes `p-avatar` (as
 * initials) with custom message bubbles and `p-inputtext`, the same building
 * blocks a real chat UI would use.
 */
@Component({
	selector: 'sc-chat',
	imports: [FormsModule, AvatarModule, ButtonModule, CardModule, InputTextModule],
	templateUrl: './chat.html',
	styleUrl: './chat.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Chat {
	protected readonly contacts = CHAT_CONTACTS;
	protected readonly activeContactId = signal(CHAT_CONTACTS[0]?.id);
	protected readonly messages = signal<ChatMessage[]>(CHAT_MESSAGES);
	protected readonly draft = signal('');

	protected selectContact(id: string): void {
		this.activeContactId.set(id);
	}

	protected send(): void {
		const text = this.draft().trim();
		if (!text) return;
		this.messages.update((messages) => [
			...messages,
			{ from: 'me', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
		]);
		this.draft.set('');
	}
}
