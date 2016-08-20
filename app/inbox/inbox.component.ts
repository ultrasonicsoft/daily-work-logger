import { Component, } from '@angular/core';
import { DataService} from '../shared/data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Typeahead } from '../typeahead/typeahead.component';
import { User } from '../shared/user.model';

import { Message, InboxMessage } from '../shared/message.model';
import {DataTableDirectives} from 'angular2-datatable/datatable';
import {DatePipe, NgClass,SlicePipe} from "@angular/common";

declare var jQuery: any;

@Component({
    selector: 'inbox',
    templateUrl: `./app/inbox/inbox.component.html`,
    directives: [DataTableDirectives, NgClass],
    pipes: [DatePipe,SlicePipe],
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
    messageThread: InboxMessage[];
    selectedMessage: InboxMessage;
    replyMessageText: string;
    allowReply = false;

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

    public openMessage(message: InboxMessage) {

        this.dataService
            .getMessageThread(message.Id)
            .then(messages => {
                console.log('get response messages thread: ' + messages);
                this.messageThread = messages;
            })
            .catch(error => console.log(error));

        this.selectedMessage = message;
        (<any>jQuery('#myModal')).modal('show');
        // alert('message to be opened: ' + message.messageText);
    }

    public enableReply() {
        this.allowReply = true;
    }
    public reply() {
        let replyMessage = new Message();
        replyMessage.Id = this.selectedMessage.Id;
        replyMessage.messageText = this.replyMessageText;
        replyMessage.sentOn = new Date();
        this.dataService.sendReply(replyMessage);
    }

    public discard() {
        this.allowReply = false;
    }

    public closeMessage() {
        this.dataService
            .markMessageAsRead(this.selectedMessage.Id)
            .then((response: any) => {
                console.log('get response messages: ' + response);
                this.getAllRecievedMessages();
            });
    }

    public refreshInbox() {
        this.getAllRecievedMessages();
    }
}
