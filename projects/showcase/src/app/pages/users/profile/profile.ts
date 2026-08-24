import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarModule } from '@wawjs/ngx-prime/avatar';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DividerModule } from '@wawjs/ngx-prime/divider';
import { TagModule } from '@wawjs/ngx-prime/tag';

import { PROFILE_STATS, PROFILE_TAGS } from './profile.data';

@Component({
	selector: 'sc-profile',
	imports: [CardModule, AvatarModule, DividerModule, TagModule],
	templateUrl: './profile.html',
	styleUrl: './profile.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Profile {
	protected readonly stats = PROFILE_STATS;
	protected readonly tags = PROFILE_TAGS;
}
