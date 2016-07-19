import { Component } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: `./app/login.component.html`
})
export class LoginComponent {
    userName: string;
    password: string;

    onSubmit() {
        alert("userName:" + this.userName);
        alert("password:" + this.password);
    }
}
