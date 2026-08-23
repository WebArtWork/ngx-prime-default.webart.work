import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, afterNextRender, effect, inject, signal } from '@angular/core';
import { Fluid } from '@wawjs/ngx-prime/fluid';
import { UIChart } from '@wawjs/ngx-prime/chart';
import { LayoutService } from '../../layout/layout.service';

@Component({
	selector: 'app-chart-demo',
	imports: [UIChart, Fluid],
	templateUrl: './chart-demo.component.html',
})
export class ChartDemoComponent {
	private readonly _layoutService = inject(LayoutService);
	private readonly _document = inject(DOCUMENT);
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	protected readonly lineData = signal<unknown>(null);
	protected readonly barData = signal<unknown>(null);
	protected readonly pieData = signal<unknown>(null);
	protected readonly polarData = signal<unknown>(null);
	protected readonly radarData = signal<unknown>(null);
	protected readonly lineOptions = signal<unknown>(null);
	protected readonly barOptions = signal<unknown>(null);
	protected readonly pieOptions = signal<unknown>(null);
	protected readonly polarOptions = signal<unknown>(null);
	protected readonly radarOptions = signal<unknown>(null);

	constructor() {
		if (!this._isBrowser) return;

		afterNextRender(() => this._initCharts());

		effect(() => {
			this._layoutService.isDarkTheme();
			this._initCharts();
		});
	}

	private _initCharts(): void {
		const documentStyle = getComputedStyle(this._document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');
		const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
		const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

		this.barData.set({
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
					borderColor: documentStyle.getPropertyValue('--p-primary-500'),
					data: [65, 59, 80, 81, 56, 55, 40],
				},
				{
					label: 'My Second dataset',
					backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
					borderColor: documentStyle.getPropertyValue('--p-primary-200'),
					data: [28, 48, 40, 19, 86, 27, 90],
				},
			],
		});

		this.barOptions.set({
			maintainAspectRatio: false,
			aspectRatio: 0.8,
			plugins: { legend: { labels: { color: textColor } } },
			scales: {
				x: {
					ticks: { color: textColorSecondary, font: { weight: 500 } },
					grid: { display: false, drawBorder: false },
				},
				y: {
					ticks: { color: textColorSecondary },
					grid: { color: surfaceBorder, drawBorder: false },
				},
			},
		});

		this.pieData.set({
			labels: ['A', 'B', 'C'],
			datasets: [
				{
					data: [540, 325, 702],
					backgroundColor: [
						documentStyle.getPropertyValue('--p-indigo-500'),
						documentStyle.getPropertyValue('--p-purple-500'),
						documentStyle.getPropertyValue('--p-teal-500'),
					],
					hoverBackgroundColor: [
						documentStyle.getPropertyValue('--p-indigo-400'),
						documentStyle.getPropertyValue('--p-purple-400'),
						documentStyle.getPropertyValue('--p-teal-400'),
					],
				},
			],
		});

		this.pieOptions.set({
			plugins: { legend: { labels: { usePointStyle: true, color: textColor } } },
		});

		this.lineData.set({
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
					borderColor: documentStyle.getPropertyValue('--p-primary-500'),
					tension: 0.4,
				},
				{
					label: 'Second Dataset',
					data: [28, 48, 40, 19, 86, 27, 90],
					fill: false,
					backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
					borderColor: documentStyle.getPropertyValue('--p-primary-200'),
					tension: 0.4,
				},
			],
		});

		this.lineOptions.set({
			maintainAspectRatio: false,
			aspectRatio: 0.8,
			plugins: { legend: { labels: { color: textColor } } },
			scales: {
				x: { ticks: { color: textColorSecondary }, grid: { color: surfaceBorder, drawBorder: false } },
				y: { ticks: { color: textColorSecondary }, grid: { color: surfaceBorder, drawBorder: false } },
			},
		});

		this.polarData.set({
			datasets: [
				{
					data: [11, 16, 7, 3],
					backgroundColor: [
						documentStyle.getPropertyValue('--p-indigo-500'),
						documentStyle.getPropertyValue('--p-purple-500'),
						documentStyle.getPropertyValue('--p-teal-500'),
						documentStyle.getPropertyValue('--p-orange-500'),
					],
					label: 'My dataset',
				},
			],
			labels: ['Indigo', 'Purple', 'Teal', 'Orange'],
		});

		this.polarOptions.set({
			plugins: { legend: { labels: { color: textColor } } },
			scales: {
				r: { grid: { color: surfaceBorder }, ticks: { display: false, color: textColorSecondary } },
			},
		});

		this.radarData.set({
			labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
			datasets: [
				{
					label: 'My First dataset',
					borderColor: documentStyle.getPropertyValue('--p-indigo-400'),
					pointBackgroundColor: documentStyle.getPropertyValue('--p-indigo-400'),
					pointBorderColor: documentStyle.getPropertyValue('--p-indigo-400'),
					pointHoverBackgroundColor: textColor,
					pointHoverBorderColor: documentStyle.getPropertyValue('--p-indigo-400'),
					data: [65, 59, 90, 81, 56, 55, 40],
				},
				{
					label: 'My Second dataset',
					borderColor: documentStyle.getPropertyValue('--p-purple-400'),
					pointBackgroundColor: documentStyle.getPropertyValue('--p-purple-400'),
					pointBorderColor: documentStyle.getPropertyValue('--p-purple-400'),
					pointHoverBackgroundColor: textColor,
					pointHoverBorderColor: documentStyle.getPropertyValue('--p-purple-400'),
					data: [28, 48, 40, 19, 96, 27, 100],
				},
			],
		});

		this.radarOptions.set({
			plugins: { legend: { labels: { color: textColor } } },
			scales: {
				r: { pointLabels: { color: textColor }, grid: { color: surfaceBorder } },
			},
		});
	}
}
