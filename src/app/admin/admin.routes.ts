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
			{
				path: 'uikit',
				loadChildren: () => import('./uikit/uikit.routes').then((m) => m.uikitRoutes),
			},
		],
	},
	{
		path: 'notfound',
		loadComponent: () =>
			import('./pages/notfound/notfound.component').then((m) => m.NotfoundComponent),
	},
	{ path: '**', redirectTo: 'notfound' },
];
