import { Component, signal } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { Button } from '@wawjs/ngx-prime/button';
import { ButtonGroup } from '@wawjs/ngx-prime/buttongroup';
import { SplitButton } from '@wawjs/ngx-prime/splitbutton';

const SPLIT_BUTTON_ITEMS: MenuItem[] = [
	{ label: 'Update', icon: 'pi pi-refresh' },
	{ label: 'Delete', icon: 'pi pi-times' },
	{ label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
	{ separator: true },
	{ label: 'Setup', icon: 'pi pi-cog' },
];

@Component({
	selector: 'app-button-demo',
	imports: [Button, ButtonGroup, SplitButton],
	templateUrl: './button-demo.component.html',
})
export class ButtonDemoComponent {
	protected readonly items = SPLIT_BUTTON_ITEMS;
	protected readonly loading = signal([false, false, false, false]);

	protected load(index: number): void {
		this.loading.update((state) => state.map((v, i) => (i === index ? true : v)));
		setTimeout(() => {
			this.loading.update((state) => state.map((v, i) => (i === index ? false : v)));
		}, 1000);
	}
}
