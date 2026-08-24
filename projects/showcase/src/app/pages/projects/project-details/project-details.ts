import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TableModule } from '@wawjs/ngx-prime/table';
import { TabsModule } from '@wawjs/ngx-prime/tabs';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TimelineModule } from '@wawjs/ngx-prime/timeline';

import { PROJECT_ACTIVITY, PROJECT_TASK_ROWS } from './project-details.data';

@Component({
	selector: 'sc-project-details',
	imports: [CardModule, TabsModule, TimelineModule, TableModule, TagModule],
	templateUrl: './project-details.html',
	styleUrl: './project-details.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetails {
	protected readonly activity = PROJECT_ACTIVITY;
	protected readonly tasks = PROJECT_TASK_ROWS;
}
