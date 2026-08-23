import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
	{
		path: 'crud',
		loadComponent: () => import('./crud/crud.component').then((m) => m.CrudComponent),
	},
	{
		path: 'empty',
		loadComponent: () => import('./empty/empty.component').then((m) => m.EmptyComponent),
	},
	{ path: '**', redirectTo: '/admin/notfound' },
];
