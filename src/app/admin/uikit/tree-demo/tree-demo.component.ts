import { Component, signal } from '@angular/core';
import type { TreeNode } from '@wawjs/ngx-prime/api';
import { Tree } from '@wawjs/ngx-prime/tree';
import { TTCheckbox, TTRow, TTSelectableRow, TreeTable, TreeTableToggler } from '@wawjs/ngx-prime/treetable';

const FILE_NODES: TreeNode[] = [
	{
		key: '0',
		label: 'Documents',
		data: 'Documents Folder',
		icon: 'pi pi-fw pi-folder',
		children: [
			{
				key: '0-0',
				label: 'Work',
				data: 'Work Folder',
				icon: 'pi pi-fw pi-folder',
				children: [
					{ key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
					{ key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' },
				],
			},
			{
				key: '0-1',
				label: 'Home',
				data: 'Home Folder',
				icon: 'pi pi-fw pi-folder',
				children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }],
			},
		],
	},
	{
		key: '1',
		label: 'Events',
		data: 'Events Folder',
		icon: 'pi pi-fw pi-calendar',
		children: [
			{ key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
			{ key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
		],
	},
];

const TREE_TABLE_NODES: TreeNode[] = [
	{
		key: '0',
		data: { name: 'Documents', size: '75kb', type: 'Folder' },
		children: [
			{ key: '0-0', data: { name: 'Work', size: '55kb', type: 'Folder' } },
			{ key: '0-1', data: { name: 'Home', size: '20kb', type: 'Folder' } },
		],
	},
	{
		key: '1',
		data: { name: 'Events', size: '15kb', type: 'Folder' },
		children: [{ key: '1-0', data: { name: 'Meeting', size: '15kb', type: 'File' } }],
	},
];

interface TreeTableColumn {
	field: 'name' | 'size' | 'type';
	header: string;
}

@Component({
	selector: 'app-tree-demo',
	imports: [Tree, TreeTable, TreeTableToggler, TTCheckbox, TTRow, TTSelectableRow],
	templateUrl: './tree-demo.component.html',
})
export class TreeDemoComponent {
	protected readonly treeValue = signal(FILE_NODES);
	protected readonly treeTableValue = signal(TREE_TABLE_NODES);
	protected selectedTreeValue: TreeNode[] = [];
	protected selectedTreeTableValue: Record<string, { partialChecked: boolean; checked: boolean }> = {
		'0-0': { partialChecked: false, checked: true },
	};

	protected readonly cols: TreeTableColumn[] = [
		{ field: 'name', header: 'Name' },
		{ field: 'size', header: 'Size' },
		{ field: 'type', header: 'Type' },
	];
}
