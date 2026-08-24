import { Routes } from '@angular/router';
import { UikitShell } from './layout/shell/uikit-shell';

export const routes: Routes = [
	{
		path: '',
		component: UikitShell,
		children: [
			{ path: '', redirectTo: 'button/button', pathMatch: 'full' },
			{
				path: 'form/input',
				loadComponent: () => import('./pages/form/input/input-demo').then((m) => m.InputDemo),
			},
			{
				path: 'form/select',
				loadComponent: () => import('./pages/form/select/select-demo').then((m) => m.SelectDemo),
			},
			{
				path: 'button/button',
				loadComponent: () => import('./pages/button/button/button-demo').then((m) => m.ButtonDemo),
			},
			{
				path: 'data/table',
				loadComponent: () => import('./pages/data/table/table-demo').then((m) => m.TableDemo),
			},
			{
				path: 'overlay/dialog',
				loadComponent: () => import('./pages/overlay/dialog/dialog-demo').then((m) => m.DialogDemo),
			},
			{
				path: 'layout/card',
				loadComponent: () => import('./pages/layout/card/card-demo').then((m) => m.CardDemo),
			},
		],
	},
	{ path: '**', redirectTo: '' },
];
