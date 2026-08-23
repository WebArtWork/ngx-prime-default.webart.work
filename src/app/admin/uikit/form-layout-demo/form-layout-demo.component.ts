import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Button } from '@wawjs/ngx-prime/button';
import { Fluid } from '@wawjs/ngx-prime/fluid';
import { InputText } from '@wawjs/ngx-prime/inputtext';
import { Select } from '@wawjs/ngx-prime/select';
import { Textarea } from '@wawjs/ngx-prime/textarea';

@Component({
	selector: 'app-formlayout-demo',
	imports: [FormsModule, Fluid, InputText, Button, Select, Textarea],
	templateUrl: './form-layout-demo.component.html',
})
export class FormLayoutDemoComponent {
	protected readonly dropdownItems = [
		{ name: 'Option 1', code: 'Option 1' },
		{ name: 'Option 2', code: 'Option 2' },
		{ name: 'Option 3', code: 'Option 3' },
	];

	protected dropdownItem: { name: string; code: string } | null = null;
}
