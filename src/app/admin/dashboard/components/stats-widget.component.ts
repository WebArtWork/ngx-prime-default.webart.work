import { Component } from '@angular/core';

interface StatCard {
	label: string;
	value: string;
	icon: string;
	iconBg: string;
	iconColor: string;
	highlight: string;
	note: string;
}

const STATS: StatCard[] = [
	{
		label: 'Orders',
		value: '152',
		icon: 'pi pi-shopping-cart',
		iconBg: 'bg-blue-100 dark:bg-blue-400/10',
		iconColor: 'text-blue-500',
		highlight: '24 new',
		note: 'since last visit',
	},
	{
		label: 'Revenue',
		value: '$2,100',
		icon: 'pi pi-dollar',
		iconBg: 'bg-orange-100 dark:bg-orange-400/10',
		iconColor: 'text-orange-500',
		highlight: '52%+',
		note: 'since last week',
	},
	{
		label: 'Customers',
		value: '28,441',
		icon: 'pi pi-users',
		iconBg: 'bg-cyan-100 dark:bg-cyan-400/10',
		iconColor: 'text-cyan-500',
		highlight: '520',
		note: 'newly registered',
	},
	{
		label: 'Comments',
		value: '152 unread',
		icon: 'pi pi-comment',
		iconBg: 'bg-purple-100 dark:bg-purple-400/10',
		iconColor: 'text-purple-500',
		highlight: '85',
		note: 'responded',
	},
];

@Component({
	selector: 'app-stats-widget',
	template: `@for (stat of stats; track stat.label) {
		<div class="col-span-12 lg:col-span-6 xl:col-span-3">
			<div class="card mb-0">
				<div class="flex justify-between mb-4">
					<div>
						<span class="block text-muted-color font-medium mb-4">{{ stat.label }}</span>
						<div class="text-surface-900 dark:text-surface-0 font-medium text-xl">
							{{ stat.value }}
						</div>
					</div>
					<div
						class="flex items-center justify-center rounded-border"
						[class]="stat.iconBg"
						style="width: 2.5rem; height: 2.5rem"
					>
						<i class="text-xl!" [class]="[stat.icon, stat.iconColor]"></i>
					</div>
				</div>
				<span class="text-primary font-medium">{{ stat.highlight }} </span>
				<span class="text-muted-color">{{ stat.note }}</span>
			</div>
		</div>
	}`,
})
export class StatsWidgetComponent {
	protected readonly stats = STATS;
}
