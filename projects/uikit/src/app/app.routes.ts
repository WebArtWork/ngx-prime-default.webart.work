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
				path: 'form/autocomplete',
				loadComponent: () =>
					import('./pages/form/autocomplete/autocomplete-demo').then((m) => m.AutoCompleteDemo),
			},
			{
				path: 'form/cascadeselect',
				loadComponent: () =>
					import('./pages/form/cascadeselect/cascadeselect-demo').then((m) => m.CascadeSelectDemo),
			},
			{
				path: 'form/colorpicker',
				loadComponent: () =>
					import('./pages/form/colorpicker/colorpicker-demo').then((m) => m.ColorPickerDemo),
			},
			{
				path: 'form/datepicker',
				loadComponent: () =>
					import('./pages/form/datepicker/datepicker-demo').then((m) => m.DatePickerDemo),
			},
			{
				path: 'form/editor',
				loadComponent: () => import('./pages/form/editor/editor-demo').then((m) => m.EditorDemo),
			},
			{
				path: 'form/fieldset',
				loadComponent: () => import('./pages/form/fieldset/fieldset-demo').then((m) => m.FieldsetDemo),
			},
			{
				path: 'form/iconfield',
				loadComponent: () => import('./pages/form/iconfield/iconfield-demo').then((m) => m.IconFieldDemo),
			},
			{
				path: 'form/inputgroup',
				loadComponent: () =>
					import('./pages/form/inputgroup/inputgroup-demo').then((m) => m.InputGroupDemo),
			},
			{
				path: 'form/inputmask',
				loadComponent: () =>
					import('./pages/form/inputmask/inputmask-demo').then((m) => m.InputMaskDemo),
			},
			{
				path: 'form/inputotp',
				loadComponent: () => import('./pages/form/inputotp/inputotp-demo').then((m) => m.InputOtpDemo),
			},
			{
				path: 'form/keyfilter',
				loadComponent: () =>
					import('./pages/form/keyfilter/keyfilter-demo').then((m) => m.KeyFilterDemo),
			},
			{
				path: 'form/listbox',
				loadComponent: () => import('./pages/form/listbox/listbox-demo').then((m) => m.ListboxDemo),
			},
			{
				path: 'form/multiselect',
				loadComponent: () =>
					import('./pages/form/multiselect/multiselect-demo').then((m) => m.MultiSelectDemo),
			},
			{
				path: 'form/treeselect',
				loadComponent: () =>
					import('./pages/form/treeselect/treeselect-demo').then((m) => m.TreeSelectDemo),
			},
			{
				path: 'form/fileupload',
				loadComponent: () =>
					import('./pages/form/fileupload/fileupload-demo').then((m) => m.FileUploadDemo),
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
