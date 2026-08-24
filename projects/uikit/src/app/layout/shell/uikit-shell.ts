import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UikitSidebar } from '../sidebar/uikit-sidebar';
import { UikitTopbar } from '../topbar/uikit-topbar';

@Component({
	selector: 'uk-shell',
	imports: [RouterOutlet, UikitTopbar, UikitSidebar],
	templateUrl: './uikit-shell.html',
	styleUrl: './uikit-shell.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UikitShell {
	protected readonly sidebarOpen = signal(false);

	protected toggleSidebar(): void {
		this.sidebarOpen.update((value) => !value);
	}
}
