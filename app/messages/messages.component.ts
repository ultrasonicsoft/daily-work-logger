import { Component } from '@angular/core';
import { DataService} from '../shared/data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Typeahead } from '../typeahead/typeahead.component';
import { User } from '../shared/user.model';

import { Message, MessageStatus } from '../shared/message.model';

@Component({
    selector: 'messages',
    templateUrl: `./app/messages/messages.component.html`,
    directives: [Typeahead]
})
export class MessagesComponent {
    allUsers: User[];
    selectedUser: User;
    messageText:string;

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
    }

    public onUserSelected(user: User) {
        if (user) {
            this.selectedUser = user;
            console.log(this.selectedUser);
        }
    }

    sendMessage(){
        let newMessage = new Message();
        newMessage.sentOn = new Date();
        newMessage.fromUserId = this.dataService.getLoggedInUserId();
        newMessage.toUserId = this.selectedUser.Id;
        newMessage.status = MessageStatus.New;
        newMessage.messageText = this.messageText;

        this.dataService.sendNewMessage(newMessage);
    }
}
