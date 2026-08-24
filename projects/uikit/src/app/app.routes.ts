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
				path: 'form/checkbox',
				loadComponent: () => import('./pages/form/checkbox/checkbox-demo').then((m) => m.CheckboxDemo),
			},
			{
				path: 'form/radiobutton',
				loadComponent: () =>
					import('./pages/form/radiobutton/radiobutton-demo').then((m) => m.RadioButtonDemo),
			},
			{
				path: 'form/rating',
				loadComponent: () => import('./pages/form/rating/rating-demo').then((m) => m.RatingDemo),
			},
			{
				path: 'form/slider',
				loadComponent: () => import('./pages/form/slider/slider-demo').then((m) => m.SliderDemo),
			},
			{
				path: 'form/textarea',
				loadComponent: () => import('./pages/form/textarea/textarea-demo').then((m) => m.TextareaDemo),
			},
			{
				path: 'form/togglebutton',
				loadComponent: () =>
					import('./pages/form/togglebutton/togglebutton-demo').then((m) => m.ToggleButtonDemo),
			},
			{
				path: 'form/toggleswitch',
				loadComponent: () =>
					import('./pages/form/toggleswitch/toggleswitch-demo').then((m) => m.ToggleSwitchDemo),
			},
			{
				path: 'form/floatlabel',
				loadComponent: () => import('./pages/form/floatlabel/floatlabel-demo').then((m) => m.FloatLabelDemo),
			},
			{
				path: 'form/inputnumber',
				loadComponent: () =>
					import('./pages/form/inputnumber/inputnumber-demo').then((m) => m.InputNumberDemo),
			},
			{
				path: 'form/password',
				loadComponent: () => import('./pages/form/password/password-demo').then((m) => m.PasswordDemo),
			},
			{
				path: 'form/selectbutton',
				loadComponent: () =>
					import('./pages/form/selectbutton/selectbutton-demo').then((m) => m.SelectButtonDemo),
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
