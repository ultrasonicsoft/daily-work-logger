import { Component, } from '@angular/core';
import { DataService} from '../shared/data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Typeahead } from '../typeahead/typeahead.component';
import { User } from '../shared/user.model';

import { Message, InboxMessage } from '../shared/message.model';
import {DataTableDirectives} from 'angular2-datatable/datatable';
import {DatePipe, NgClass} from "@angular/common";

@Component({
    selector: 'inbox',
    templateUrl: `./app/inbox/inbox.component.html`,
    directives: [DataTableDirectives, NgClass],
    pipes: [DatePipe],
    styles: [`
    .read {
      font-weight: bold;;
    }
    .unread {
      font-weight: normal;
    }
  `],
})
export class InboxComponent {
    inboxMessages: InboxMessage[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.getAllRecievedMessages();
    }

    getAllRecievedMessages() {
        this.dataService
            .getAllRecievedMessages()
            .then(messages => {
                console.log('get response messages: ' + messages);
                this.inboxMessages = messages;
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
