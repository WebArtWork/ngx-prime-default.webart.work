import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TableModule } from '@wawjs/ngx-prime/table';
import { TagModule } from '@wawjs/ngx-prime/tag';

import { DASHBOARD_STATS, RECENT_ORDERS } from './dashboard.data';

@Component({
	selector: 'sc-dashboard',
	imports: [CardModule, TableModule, TagModule],
	templateUrl: './dashboard.html',
	styleUrl: './dashboard.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
	protected readonly stats = DASHBOARD_STATS;
	protected readonly orders = RECENT_ORDERS;
}
