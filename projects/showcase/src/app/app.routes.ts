import { Routes } from '@angular/router';
import { ShowcaseShell } from './layout/shell/showcase-shell';

export const routes: Routes = [
	{
		path: '',
		component: ShowcaseShell,
		children: [
			{
				path: '',
				loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
			},
			{
				path: 'users',
				loadComponent: () => import('./pages/users/users').then((m) => m.Users),
			},
			{
				path: 'profile',
				loadComponent: () => import('./pages/profile/profile').then((m) => m.Profile),
			},
		],
	},
	{
		path: 'landing',
		loadComponent: () => import('./pages/landing/landing').then((m) => m.Landing),
	},
	{ path: '**', redirectTo: '' },
];
