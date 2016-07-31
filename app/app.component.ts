import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login.component';
import { DataService} from './data.service';
import { DashboardComponent } from './dashboard.Component';
import { appRouterProviders } from './app.routes';

import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: `./app/app.component.html`,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

}
