import { Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from '@wawjs/ngx-prime/accordion';
import { Button } from '@wawjs/ngx-prime/button';
import { Divider } from '@wawjs/ngx-prime/divider';
import { Fieldset } from '@wawjs/ngx-prime/fieldset';
import { IconField } from '@wawjs/ngx-prime/iconfield';
import { InputIcon } from '@wawjs/ngx-prime/inputicon';
import { InputText } from '@wawjs/ngx-prime/inputtext';
import { Panel } from '@wawjs/ngx-prime/panel';
import { Splitter } from '@wawjs/ngx-prime/splitter';
import { SplitButton } from '@wawjs/ngx-prime/splitbutton';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@wawjs/ngx-prime/tabs';
import { Toolbar } from '@wawjs/ngx-prime/toolbar';

const TOOLBAR_ITEMS: MenuItem[] = [
	{ label: 'Save', icon: 'pi pi-check' },
	{ label: 'Update', icon: 'pi pi-upload' },
	{ label: 'Delete', icon: 'pi pi-trash' },
	{ label: 'Home Page', icon: 'pi pi-home' },
];

@Component({
	selector: 'app-panels-demo',
	imports: [
		Toolbar,
		Button,
		SplitButton,
		IconField,
		InputIcon,
		InputText,
		Accordion,
		AccordionPanel,
		AccordionHeader,
		AccordionContent,
		Tabs,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
		Panel,
		Fieldset,
		Divider,
		Splitter,
	],
	templateUrl: './panels-demo.component.html',
})
export class PanelsDemoComponent {
	protected readonly items = TOOLBAR_ITEMS;
}
