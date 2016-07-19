import { Component } from '@angular/core';
import { LoginComponent } from './login.component';

@Component({
    selector: 'my-app',
    templateUrl : `./app/app.component.html`,
    directives: [LoginComponent]
})
export class AppComponent { }
