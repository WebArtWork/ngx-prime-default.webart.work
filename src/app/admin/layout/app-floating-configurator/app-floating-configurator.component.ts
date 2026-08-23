import { Component, inject } from '@angular/core';
import { Button } from '@wawjs/ngx-prime/button';
import { StyleClass } from '@wawjs/ngx-prime/styleclass';
import { AppConfiguratorComponent } from '../app-configurator/app-configurator.component';
import { LayoutService } from '../layout.service';

@Component({
	selector: 'app-floating-configurator',
	imports: [Button, StyleClass, AppConfiguratorComponent],
	template: `
		<div class="flex gap-4 top-8 right-8 fixed">
			<p-button
				type="button"
				(onClick)="layoutService.toggleDarkMode()"
				[rounded]="true"
				[icon]="layoutService.isDarkTheme() ? 'pi pi-moon' : 'pi pi-sun'"
				severity="secondary"
			/>
			<div class="relative">
				<p-button
					icon="pi pi-palette"
					pStyleClass="@next"
					enterFromClass="hidden"
					enterActiveClass="animate-scalein"
					leaveToClass="hidden"
					leaveActiveClass="animate-fadeout"
					[hideOnOutsideClick]="true"
					type="button"
					[rounded]="true"
				/>
				<app-configurator />
			</div>
		</div>
	`,
})
export class AppFloatingConfiguratorComponent {
	protected readonly layoutService = inject(LayoutService);
}
