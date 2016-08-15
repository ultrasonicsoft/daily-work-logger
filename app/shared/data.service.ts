import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './user.model';
import { Subject }    from 'rxjs/Subject';
import { Message, MessageStatus } from './message.model';

@Injectable()
export class DataService {
    userName: string;
    password: string;

    loggedInUser: User;

    private userLoginSource = new Subject<string>();
    userLogin$ = this.userLoginSource.asObservable();

    constructor(private http: Http) {
    }

    isUserLoggedIn() {
        if (this.loggedInUser) {
            return true;
        }
        else {
            return false;
        }
    }

    doLogin(_userName: string, _password: string) {

        let creds = JSON.stringify({ username: _userName, password: _password });

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post('http://localhost:3000/login', creds, { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);

        // this.http.post('http://localhost:3000/login', creds, {
        //     headers: headers
        // }).subscribe(
        //     data => {
        //         console.log("Server response: " + data.json());
        //         var loginStatus = data.json();
        //     });
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    setLoggedInUser(_user: User) {
        this.loggedInUser = _user;
        this.userLoginSource.next(_user.UserName);
    }

    doPostRequest(url: string, body: any): any {
        let response: any;

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(url, body, {
            headers: headers
        }).subscribe(
            data => {
                console.log("Server response: " + data.json());
                alert('event added in ts');
            });

        return response;
    }

    getAllUsers() {
        return this.http.get('http://localhost:3000/users/all')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getLoggedInUserId(): number {
        return this.loggedInUser.Id;
    }

    sendNewMessage(newMessage: Message): any {
        let response: any;

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:3000/messages/newMessage', newMessage, {
            headers: headers
        }).subscribe(
            data => {
                console.log("Server response: " + data.json());
                alert('message sent.');
            });

        return response;
    }

    getAllRecievedMessages() {
        var userId = this.loggedInUser.Id;

        return this.http.get('http://localhost:3000/messages/received/' + userId)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getAllSentMessages() {
        var userId = this.loggedInUser.Id;

        return this.http.get('http://localhost:3000/messages/sent/' + userId)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
}