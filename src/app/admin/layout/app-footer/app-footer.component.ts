import { Component } from '@angular/core';

@Component({
	selector: 'app-admin-footer',
	template: `<div class="layout-footer">
		ngx-prime-default admin, cloned from
		<a
			href="https://sakai.ngx-prime.org"
			target="_blank"
			rel="noopener noreferrer"
			class="text-primary font-bold hover:underline"
			>Sakai</a
		>
		, built with
		<a
			href="https://github.com/WebArtWork/ngx-prime"
			target="_blank"
			rel="noopener noreferrer"
			class="text-primary font-bold hover:underline"
			>ngx-prime</a
		>
	</div>`,
})
export class AppFooterComponent {}
