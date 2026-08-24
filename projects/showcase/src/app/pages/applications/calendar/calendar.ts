import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DatePickerModule } from '@wawjs/ngx-prime/datepicker';
import { TagModule } from '@wawjs/ngx-prime/tag';

import { CALENDAR_EVENTS } from './calendar.data';

/**
 * No ready-made "calendar app" component exists in ngx-prime — this composes
 * `p-datePicker` (inline) with a plain event list keyed by ISO date, which is
 * the same building block a real scheduling UI would use.
 */
@Component({
	selector: 'sc-calendar',
	imports: [FormsModule, CardModule, DatePickerModule, TagModule],
	templateUrl: './calendar.html',
	styleUrl: './calendar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarPage {
	protected readonly selectedDate = signal(new Date('2026-08-25'));

	protected readonly eventsForSelectedDate = computed(() => {
		const iso = this.toIso(this.selectedDate());
		return CALENDAR_EVENTS.filter((event) => event.date === iso);
	});

	private toIso(date: Date): string {
		return date.toISOString().slice(0, 10);
	}
}
