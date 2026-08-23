import { Component } from '@angular/core';
import { Breadcrumb } from '@wawjs/ngx-prime/breadcrumb';
import { ButtonDirective } from '@wawjs/ngx-prime/button';
import { ContextMenu } from '@wawjs/ngx-prime/contextmenu';
import { IconField } from '@wawjs/ngx-prime/iconfield';
import { InputIcon } from '@wawjs/ngx-prime/inputicon';
import { InputText } from '@wawjs/ngx-prime/inputtext';
import { MegaMenu } from '@wawjs/ngx-prime/megamenu';
import { Menu } from '@wawjs/ngx-prime/menu';
import { Menubar } from '@wawjs/ngx-prime/menubar';
import { PanelMenu } from '@wawjs/ngx-prime/panelmenu';
import { Step, StepList, Stepper } from '@wawjs/ngx-prime/stepper';
import { Tab, TabList, Tabs } from '@wawjs/ngx-prime/tabs';
import { TieredMenu } from '@wawjs/ngx-prime/tieredmenu';
import {
	BREADCRUMB_HOME,
	BREADCRUMB_ITEMS,
	CONTEXT_MENU_ITEMS,
	MEGA_MENU_ITEMS,
	NESTED_MENU_ITEMS,
	OVERLAY_MENU_ITEMS,
	PANEL_MENU_ITEMS,
	PLAIN_MENU_ITEMS,
	TIERED_MENU_ITEMS,
} from './menu-demo.data';

@Component({
	selector: 'app-menu-demo',
	imports: [
		Menubar,
		IconField,
		InputIcon,
		InputText,
		Breadcrumb,
		Stepper,
		StepList,
		Step,
		Tabs,
		TabList,
		Tab,
		TieredMenu,
		Menu,
		ButtonDirective,
		ContextMenu,
		MegaMenu,
		PanelMenu,
	],
	templateUrl: './menu-demo.component.html',
})
export class MenuDemoComponent {
	protected readonly nestedMenuItems = NESTED_MENU_ITEMS;
	protected readonly breadcrumbHome = BREADCRUMB_HOME;
	protected readonly breadcrumbItems = BREADCRUMB_ITEMS;
	protected readonly tieredMenuItems = TIERED_MENU_ITEMS;
	protected readonly overlayMenuItems = OVERLAY_MENU_ITEMS;
	protected readonly menuItems = PLAIN_MENU_ITEMS;
	protected readonly contextMenuItems = CONTEXT_MENU_ITEMS;
	protected readonly megaMenuItems = MEGA_MENU_ITEMS;
	protected readonly panelMenuItems = PANEL_MENU_ITEMS;
}
