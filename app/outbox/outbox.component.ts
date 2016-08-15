import { Component } from '@angular/core';
import { DataService} from '../shared/data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Typeahead } from '../typeahead/typeahead.component';
import { User } from '../shared/user.model';

import { Message, MessageStatus, InboxMessage } from '../shared/message.model';
import {DataTableDirectives} from 'angular2-datatable/datatable';
import {DatePipe} from "@angular/common";

@Component({
    selector: 'outbox',
    templateUrl: `./app/outbox/outbox.component.html`,
    directives: [DataTableDirectives],
    pipes: [DatePipe]
})
export class OutboxComponent {
    outboxMessages: InboxMessage[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.getAllSentMessages();
    }

    getAllSentMessages() {
        this.dataService
            .getAllSentMessages()
            .then(messages => {
                console.log('get response messages: ' + messages);
                this.outboxMessages = messages;
            })
            .catch(error => console.log(error));
    }

    private sortByWordLength = (a: any) => {
        return a.name.length;
    }

    public removeItem(item: any) {
        // this.data = _.filter(this.data, (elem:any) => elem != item);
        // console.log("Remove: ", item.email);
    }
}
