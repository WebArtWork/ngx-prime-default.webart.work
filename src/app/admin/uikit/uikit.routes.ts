import { Routes } from '@angular/router';

export const uikitRoutes: Routes = [
	{
		path: 'button',
		loadComponent: () =>
			import('./button-demo/button-demo.component').then((m) => m.ButtonDemoComponent),
	},
	{
		path: 'formlayout',
		loadComponent: () =>
			import('./form-layout-demo/form-layout-demo.component').then(
				(m) => m.FormLayoutDemoComponent,
			),
	},
	{
		path: 'message',
		loadComponent: () =>
			import('./messages-demo/messages-demo.component').then((m) => m.MessagesDemoComponent),
	},
	{
		path: 'file',
		loadComponent: () => import('./file-demo/file-demo.component').then((m) => m.FileDemoComponent),
	},
	{
		path: 'media',
		loadComponent: () =>
			import('./media-demo/media-demo.component').then((m) => m.MediaDemoComponent),
	},
	{
		path: 'input',
		loadComponent: () =>
			import('./input-demo/input-demo.component').then((m) => m.InputDemoComponent),
	},
	{
		path: 'list',
		loadComponent: () => import('./list-demo/list-demo.component').then((m) => m.ListDemoComponent),
	},
	{
		path: 'tree',
		loadComponent: () => import('./tree-demo/tree-demo.component').then((m) => m.TreeDemoComponent),
	},
	{
		path: 'panel',
		loadComponent: () =>
			import('./panels-demo/panels-demo.component').then((m) => m.PanelsDemoComponent),
	},
	{
		path: 'timeline',
		loadComponent: () =>
			import('./timeline-demo/timeline-demo.component').then((m) => m.TimelineDemoComponent),
	},
	{ path: '**', redirectTo: '/admin/notfound' },
];
