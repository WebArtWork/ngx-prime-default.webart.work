import { isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, PLATFORM_ID, inject, signal } from '@angular/core';
import { Avatar } from '@wawjs/ngx-prime/avatar';
import { AvatarGroup } from '@wawjs/ngx-prime/avatargroup';
import { Badge } from '@wawjs/ngx-prime/badge';
import { Button } from '@wawjs/ngx-prime/button';
import { Chip } from '@wawjs/ngx-prime/chip';
import { OverlayBadge } from '@wawjs/ngx-prime/overlaybadge';
import { ProgressBar } from '@wawjs/ngx-prime/progressbar';
import { Skeleton } from '@wawjs/ngx-prime/skeleton';
import { Tag } from '@wawjs/ngx-prime/tag';

@Component({
	selector: 'app-misc-demo',
	imports: [ProgressBar, Badge, Avatar, AvatarGroup, Tag, Chip, Button, Skeleton, OverlayBadge],
	templateUrl: './misc-demo.component.html',
})
export class MiscDemoComponent {
	protected readonly value = signal(0);

	constructor() {
		if (!isPlatformBrowser(inject(PLATFORM_ID))) return;

		const interval = setInterval(() => {
			this.value.update((v) => {
				const next = v + Math.floor(Math.random() * 10) + 1;
				if (next >= 100) {
					clearInterval(interval);
					return 100;
				}
				return next;
			});
		}, 2000);

		inject(DestroyRef).onDestroy(() => clearInterval(interval));
	}
}
