import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { EditorModule } from '@wawjs/ngx-prime/editor';
import { FileUploadModule } from '@wawjs/ngx-prime/fileupload';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';

interface CategoryOption {
	label: string;
	value: string;
}

@Component({
	selector: 'sc-product-create-edit',
	imports: [
		FormsModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		EditorModule,
		FileUploadModule,
	],
	templateUrl: './product-create-edit.html',
	styleUrl: './product-create-edit.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCreateEdit {
	protected readonly categories: CategoryOption[] = [
		{ label: 'Audio', value: 'audio' },
		{ label: 'Accessories', value: 'accessories' },
		{ label: 'Displays', value: 'displays' },
		{ label: 'Furniture', value: 'furniture' },
	];

	protected readonly name = signal('');
	protected readonly category = signal<CategoryOption | null>(null);
	protected readonly price = signal(0);
	protected readonly stock = signal(0);
	protected readonly description = signal('');

	protected onImageUpload(): void {
		// Demo-only handler — a real app would upload to its own API.
	}
}
