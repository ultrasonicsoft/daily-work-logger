import { Component } from '@angular/core';
import { DataService} from '../shared/data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Event } from '../shared/event.model';

@Component({
    selector: 'dashboard',
    templateUrl: `./app/dashboard/dashboard.component.html`
})
export class DashboardComponent {

    constructor(dataService: DataService) {
    }

    ngOnInit() {
        console.log('dashboard initialized.');
    }
}
