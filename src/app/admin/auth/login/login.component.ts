import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '@wawjs/ngx-prime/button';
import { Checkbox } from '@wawjs/ngx-prime/checkbox';
import { InputText } from '@wawjs/ngx-prime/inputtext';
import { Password } from '@wawjs/ngx-prime/password';
import { AppFloatingConfiguratorComponent } from '../../layout/app-floating-configurator/app-floating-configurator.component';

@Component({
	selector: 'app-login',
	imports: [FormsModule, RouterLink, InputText, Password, Checkbox, Button, AppFloatingConfiguratorComponent],
	templateUrl: './login.component.html',
})
export class LoginComponent {
	protected email = '';
	protected password = '';
	protected checked = false;
}
