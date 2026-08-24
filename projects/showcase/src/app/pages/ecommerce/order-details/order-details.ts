import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TableModule } from '@wawjs/ngx-prime/table';
import { TimelineModule } from '@wawjs/ngx-prime/timeline';

import { ORDER_CUSTOMER, ORDER_LINE_ITEMS, ORDER_STATUS_EVENTS } from './order-details.data';

@Component({
	selector: 'sc-order-details',
	imports: [CardModule, TableModule, TimelineModule],
	templateUrl: './order-details.html',
	styleUrl: './order-details.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetails {
	protected readonly events = ORDER_STATUS_EVENTS;
	protected readonly lineItems = ORDER_LINE_ITEMS;
	protected readonly customer = ORDER_CUSTOMER;
}
