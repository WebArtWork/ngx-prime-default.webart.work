import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '@wawjs/ngx-prime/button';
import { AppFloatingConfiguratorComponent } from '../../layout/app-floating-configurator/app-floating-configurator.component';

@Component({
	selector: 'app-notfound',
	imports: [RouterLink, Button, AppFloatingConfiguratorComponent],
	templateUrl: './notfound.component.html',
})
export class NotfoundComponent {}
