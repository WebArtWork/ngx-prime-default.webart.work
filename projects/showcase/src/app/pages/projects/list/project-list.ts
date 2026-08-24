import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from '@wawjs/ngx-prime/card';
import { ProgressBarModule } from '@wawjs/ngx-prime/progressbar';
import { TagModule } from '@wawjs/ngx-prime/tag';

import { PROJECT_SUMMARIES } from './project-list.data';

@Component({
	selector: 'sc-project-list',
	imports: [CardModule, ProgressBarModule, TagModule, RouterLink],
	templateUrl: './project-list.html',
	styleUrl: './project-list.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectList {
	protected readonly projects = PROJECT_SUMMARIES;
}
