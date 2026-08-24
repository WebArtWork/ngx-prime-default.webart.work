import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderListModule } from '@wawjs/ngx-prime/orderlist';

import { DONE_TASKS, IN_PROGRESS_TASKS, TODO_TASKS } from './tasks.data';

@Component({
	selector: 'sc-tasks',
	imports: [FormsModule, OrderListModule],
	templateUrl: './tasks.html',
	styleUrl: './tasks.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tasks {
	protected readonly todo = TODO_TASKS;
	protected readonly inProgress = IN_PROGRESS_TASKS;
	protected readonly done = DONE_TASKS;
}
