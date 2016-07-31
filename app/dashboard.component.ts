import { Component } from '@angular/core';
import { DataService} from './data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'dashboard',
    templateUrl: `./app/dashboard.component.html`,
    providers: [DataService]
})
export class DashboardComponent {
    constructor(private http: Http, private dataService: DataService) {
    }
}
