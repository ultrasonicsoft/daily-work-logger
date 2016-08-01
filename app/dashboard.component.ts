import { Component } from '@angular/core';
import { DataService} from './data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

declare var scheduler:any;

@Component({
    selector: 'dashboard',
    templateUrl: `./app/dashboard.component.html`,
    providers: [DataService]
})
export class DashboardComponent {
    constructor(private http: Http, private dataService: DataService) {
    }

    ngOnInit(){
        console.log('dashboard initialized.');

        scheduler.init('scheduler_here',new Date(),"week");
    }
}
