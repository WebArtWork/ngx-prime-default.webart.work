import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';

@Component({
	selector: 'sc-topbar',
	imports: [ButtonModule],
	templateUrl: './showcase-topbar.html',
	styleUrl: './showcase-topbar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseTopbar {
	readonly menuToggle = output<void>();

	protected readonly dark = signal(false);

	protected toggleDarkMode(): void {
		this.dark.update((value) => !value);
		document.documentElement.classList.toggle('app-dark', this.dark());
	}
}
