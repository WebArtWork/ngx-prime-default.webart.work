import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StyleClass } from '@wawjs/ngx-prime/styleclass';
import { AppConfiguratorComponent } from '../app-configurator/app-configurator.component';
import { LayoutService } from '../layout.service';

@Component({
	selector: 'app-topbar',
	imports: [NgClass, RouterLink, StyleClass, AppConfiguratorComponent],
	templateUrl: './app-topbar.component.html',
})
export class AppTopbarComponent {
	protected readonly layoutService = inject(LayoutService);

	protected toggleDarkMode(): void {
		this.layoutService.toggleDarkMode();
	}
}
