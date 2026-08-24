import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';

@Component({
	selector: 'uk-topbar',
	imports: [ButtonModule],
	templateUrl: './uikit-topbar.html',
	styleUrl: './uikit-topbar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UikitTopbar {
	readonly menuToggle = output<void>();

	protected readonly dark = signal(false);

	protected toggleDarkMode(): void {
		this.dark.update((value) => !value);
		document.documentElement.classList.toggle('app-dark', this.dark());
	}
}
