import { Component } from '@angular/core';
import { DataService} from '../shared/data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Typeahead } from '../typeahead/typeahead.component';
import { User } from '../shared/user.model';

import { Message, InboxMessage } from '../shared/message.model';
import {DataTableDirectives} from 'angular2-datatable/datatable';
import {DatePipe} from "@angular/common";
import { NewMessageComponent } from '../new-message/new-message.component';
import { InboxComponent } from '../inbox/inbox.component';
import { OutboxComponent } from '../outbox/outbox.component';

@Component({
    selector: 'messages',
    templateUrl: `./app/messages/messages.component.html`,
    directives: [Typeahead, DataTableDirectives,NewMessageComponent, InboxComponent, OutboxComponent],
    pipes: [DatePipe]
})
export class MessagesComponent {
    allUsers: User[];
    selectedUser: User;
    messageText: string;
    inboxMessages: InboxMessage[];

    constructor(private dataService: DataService) {
    }


    ngOnInit() {
        console.log('MessagesComponent initialized.');

        this.dataService
            .getAllUsers()
            .then(users => {
                console.log('get response: ' + users);
                this.allUsers = users;
            })
            .catch(error => console.log(error));

        this.getAllRecievedMessages();
    }

    public onUserSelected(user: User) {
        if (user) {
            this.selectedUser = user;
            console.log(this.selectedUser);
        }
    }

    sendMessage() {
        let newMessage = new Message();
        newMessage.sentOn = new Date();
        newMessage.fromUserId = this.dataService.getLoggedInUserId();
        newMessage.toUserId = this.selectedUser.Id;
        newMessage.isRead = false;
        newMessage.messageText = this.messageText;

        this.dataService.sendNewMessage(newMessage);
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
