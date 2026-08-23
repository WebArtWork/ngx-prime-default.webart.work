import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, afterNextRender, effect, inject, signal } from '@angular/core';
import { UIChart } from '@wawjs/ngx-prime/chart';
import { LayoutService } from '../../layout/layout.service';

@Component({
	selector: 'app-revenue-stream-widget',
	imports: [UIChart],
	template: `<div class="card mb-8!">
		<div class="font-semibold text-xl mb-4">Revenue Stream</div>
		<p-chart type="bar" [data]="chartData()" [options]="chartOptions()" class="h-100" />
	</div>`,
})
export class RevenueStreamWidgetComponent {
	private readonly _layoutService = inject(LayoutService);
	private readonly _document = inject(DOCUMENT);
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	protected readonly chartData = signal<unknown>(null);
	protected readonly chartOptions = signal<unknown>(null);

	constructor() {
		if (!this._isBrowser) return;

		afterNextRender(() => this._initChart());

		effect(() => {
			this._layoutService.isDarkTheme();
			this._initChart();
		});
	}

	private _initChart(): void {
		const documentStyle = getComputedStyle(this._document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');
		const borderColor = documentStyle.getPropertyValue('--surface-border');
		const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

		this.chartData.set({
			labels: ['Q1', 'Q2', 'Q3', 'Q4'],
			datasets: [
				{
					type: 'bar',
					label: 'Subscriptions',
					backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
					data: [4000, 10000, 15000, 4000],
					barThickness: 32,
				},
				{
					type: 'bar',
					label: 'Advertising',
					backgroundColor: documentStyle.getPropertyValue('--p-primary-300'),
					data: [2100, 8400, 2400, 7500],
					barThickness: 32,
				},
				{
					type: 'bar',
					label: 'Affiliate',
					backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
					data: [4100, 5200, 3400, 7400],
					borderRadius: { topLeft: 8, topRight: 8, bottomLeft: 0, bottomRight: 0 },
					borderSkipped: false,
					barThickness: 32,
				},
			],
		});

		this.chartOptions.set({
			maintainAspectRatio: false,
			aspectRatio: 0.8,
			plugins: {
				legend: { labels: { color: textColor } },
			},
			scales: {
				x: {
					stacked: true,
					ticks: { color: textMutedColor },
					grid: { color: 'transparent', borderColor: 'transparent' },
				},
				y: {
					stacked: true,
					ticks: { color: textMutedColor },
					grid: { color: borderColor, borderColor: 'transparent', drawTicks: false },
				},
			},
		});
	}
}
