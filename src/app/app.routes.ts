import { Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { companyProfile } from './feature/company/company.data';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

export const routes: Routes = [
	{
		path: '',
		component: PublicLayoutComponent,
		children: [
			{
				path: '',
				data: {
					meta: {
						...buildRouteMeta(companyProfile, '/'),
						titleSuffix: '',
					},
				},
				loadComponent: () =>
					import('./pages/landing/landing.component').then((m) => m.LandingComponent),
			},
		],
	},
	{
		path: 'admin',
		loadChildren: () => import('./admin/admin.routes').then((m) => m.adminRoutes),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
