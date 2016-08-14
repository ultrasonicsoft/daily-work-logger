import { Component } from '@angular/core';
import { DataService} from '../shared/data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'messages',
    templateUrl: `./app/messages/messages.component.html`
})
export class MessagesComponent {

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        console.log('MessagesComponent initialized.');
    }
}
