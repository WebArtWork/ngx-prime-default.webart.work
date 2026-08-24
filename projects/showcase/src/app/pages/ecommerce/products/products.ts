import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TableModule } from '@wawjs/ngx-prime/table';

import { PRODUCTS } from './products.data';

@Component({
	selector: 'sc-products',
	imports: [ButtonModule, CardModule, TagModule, TableModule, RouterLink],
	templateUrl: './products.html',
	styleUrl: './products.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
	protected readonly products = PRODUCTS;
}
