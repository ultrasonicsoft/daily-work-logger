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
    static dataService: DataService;

    constructor(dataService: DataService) {
        DashboardComponent.dataService = dataService;
    }

    ngOnInit() {
        console.log('dashboard initialized.');
        scheduler.init('scheduler_here', new Date(), "week");
        scheduler.attachEvent("onEventAdded", this.createNewActivityLog);
    }

    createNewActivityLog(id: any, eventArgs: Object) {
        let newEvent = new Event();

        newEvent.id = (<any>eventArgs).id;
        newEvent.startDate = (<any>eventArgs).start_date;
        newEvent.endDate = (<any>eventArgs).end_date;
        newEvent.description = (<any>eventArgs).text;
        console.log(newEvent);

        let url = 'http://localhost:3000/events/createNewEvent';

        DashboardComponent.dataService.doPostRequest(url, newEvent);
    }
}
