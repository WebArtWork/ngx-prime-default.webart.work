import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'sc-landing',
	imports: [ButtonModule, CardModule, RouterLink],
	templateUrl: './landing.html',
	styleUrl: './landing.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {
	protected readonly features = [
		{ icon: 'pi pi-bolt', title: 'Fast', description: 'Built on the esbuild-based Angular application builder.' },
		{ icon: 'pi pi-palette', title: 'Themeable', description: 'Runtime theming powered by ngx-prime design tokens.' },
		{ icon: 'pi pi-shield', title: 'Reliable', description: 'Standalone components, signals, and zoneless change detection.' },
	];
}
