import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
	selector: 'app-public-layout',
	imports: [RouterOutlet, TopbarComponent, FooterComponent],
	template: `
		<div class="flex min-h-screen flex-col">
			<app-topbar />
			<main class="flex-1">
				<router-outlet />
			</main>
			<app-footer />
		</div>
	`,
})
export class PublicLayoutComponent {}
