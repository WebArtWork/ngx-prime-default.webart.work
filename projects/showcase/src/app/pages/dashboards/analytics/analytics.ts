import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { ChartModule } from '@wawjs/ngx-prime/chart';
import { MeterGroupModule } from '@wawjs/ngx-prime/metergroup';
import { ProgressBarModule } from '@wawjs/ngx-prime/progressbar';

import { GOAL_METERS, KPI_STATS, REVENUE_TREND } from './analytics.data';

@Component({
	selector: 'sc-analytics',
	imports: [CardModule, ChartModule, MeterGroupModule, ProgressBarModule],
	templateUrl: './analytics.html',
	styleUrl: './analytics.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Analytics {
	protected readonly kpis = KPI_STATS;
	protected readonly revenueTrend = REVENUE_TREND;
	protected readonly goalMeters = GOAL_METERS;
	protected readonly meterValues = GOAL_METERS.map((meter) => ({
		label: meter.label,
		value: meter.value,
		color: meter.color,
	}));
	protected readonly chartOptions = {
		plugins: { legend: { display: false } },
		maintainAspectRatio: false,
	};
}
