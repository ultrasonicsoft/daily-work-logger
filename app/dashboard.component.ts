import { Component } from '@angular/core';
import { DataService} from './data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Event } from './event.model';
declare var scheduler: any;

@Component({
    selector: 'dashboard',
    templateUrl: `./app/dashboard.component.html`,
    providers: [DataService]
})
export class DashboardComponent {
    constructor(private http: Http, private dataService: DataService) {
    }

    ngOnInit() {
        console.log('dashboard initialized.');

        scheduler.init('scheduler_here', new Date(), "week");
      
        scheduler.attachEvent("onEventAdded", this.createNewActivityLog);
    }

    private createNewActivityLog(id: any, eventArgs: Object) {
        let newEvent = new Event();
        // console.log("start_date: "+ eventArgs.start_date);
        // console.log("end_date: "+ eventArgs.end_date);
        // console.log("text: "+ eventArgs.text);
        
        // newEvent.startDate = eventArgs.start_date;
        // newEvent.startDate = eventArgs.end_date;
        // newEvent.description = eventArgs.start_date;
        // console.log(newEvent);
        
        alert('event added in ts');
    }
}
