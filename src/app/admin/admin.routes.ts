import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

export const adminRoutes: Routes = [
	{
		path: '',
		component: AppLayoutComponent,
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
			},
		],
	},
];
