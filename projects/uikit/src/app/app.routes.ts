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
				path: 'button/buttongroup',
				loadComponent: () =>
					import('./pages/button/buttongroup/buttongroup-demo').then((m) => m.ButtonGroupDemo),
			},
			{
				path: 'button/splitbutton',
				loadComponent: () =>
					import('./pages/button/splitbutton/splitbutton-demo').then((m) => m.SplitButtonDemo),
			},
			{
				path: 'button/speeddial',
				loadComponent: () =>
					import('./pages/button/speeddial/speeddial-demo').then((m) => m.SpeedDialDemo),
			},
			{
				path: 'data/table',
				loadComponent: () => import('./pages/data/table/table-demo').then((m) => m.TableDemo),
			},
			{
				path: 'data/dataview',
				loadComponent: () => import('./pages/data/dataview/dataview-demo').then((m) => m.DataViewDemo),
			},
			{
				path: 'data/orderlist',
				loadComponent: () => import('./pages/data/orderlist/orderlist-demo').then((m) => m.OrderListDemo),
			},
			{
				path: 'data/organizationchart',
				loadComponent: () =>
					import('./pages/data/organizationchart/organizationchart-demo').then(
						(m) => m.OrganizationChartDemo,
					),
			},
			{
				path: 'data/paginator',
				loadComponent: () => import('./pages/data/paginator/paginator-demo').then((m) => m.PaginatorDemo),
			},
			{
				path: 'data/picklist',
				loadComponent: () => import('./pages/data/picklist/picklist-demo').then((m) => m.PickListDemo),
			},
			{
				path: 'data/timeline',
				loadComponent: () => import('./pages/data/timeline/timeline-demo').then((m) => m.TimelineDemo),
			},
			{
				path: 'data/tree',
				loadComponent: () => import('./pages/data/tree/tree-demo').then((m) => m.TreeDemo),
			},
			{
				path: 'data/treetable',
				loadComponent: () => import('./pages/data/treetable/treetable-demo').then((m) => m.TreeTableDemo),
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
