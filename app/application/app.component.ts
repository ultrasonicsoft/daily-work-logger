import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.Component';
import { appRouterProviders } from '../routes/app.routes';
import { DataService} from '../shared/data.service';
import { User} from '../shared/user.model';

@Component({
    selector: 'my-app',
    templateUrl: `./app/application/app.component.html`,
    directives: [ROUTER_DIRECTIVES]

})
export class AppComponent {
    isUserloggedIn = false;

    constructor(private dataService: DataService) {
        dataService.missionConfirmed$.subscribe(
            astronaut => {
                this.isUserloggedIn = true;
                console.log(`${astronaut} confirmed the mission`);
            });
    }

    ngOnDestroy() {
    }

    ngOnInit() {
        this.isUserloggedIn = this.dataService.isUserLoggedIn();

    }
}
