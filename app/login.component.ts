import { Component, EventEmitter,Output } from '@angular/core';
import { DataService} from './data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'login',
    templateUrl: `./app/login.component.html`,
    providers: [DataService]
})
export class LoginComponent {
    userName: string;
    password: string;
    isLoginSuccessful: boolean;
    // loginEvent = new EventEmitter<any>();
    @Output() loginEvent: EventEmitter<any> = new EventEmitter();

    constructor(private http: Http, private dataService: DataService) {
        // this.http.get("http://localhost:3000/login")
        //     .toPromise()
        //     .then(response => {
        //         console.log('got response:');
        //         console.log(response.json());
        //         console.log(response.json().data);
        //     })
        //     .catch();

    }

    onSubmit() {

        console.log("trying to login...");
        console.log("user name: " + this.userName);
        console.log("password: " + this.password);

        let creds = JSON.stringify({ username: this.userName, password: this.password });

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:3000/login', creds, {
            headers: headers
        })
            .subscribe(
            data => {
                console.log("Server response: " + data.json());

                var loginStatus = data.json();
                this.loginEvent.emit(loginStatus);

                if (loginStatus.isAuthenticatedUser) {
                    alert("Login successful");
                }
                else {
                    alert("Login failed");
                }
            });
        // console.log('tryig to call service...');

        // this.http.get("http://localhost:3000/users")
        //     .toPromise()
        //     .then(response => {
        //         console.log('got response:');
        //         console.log(response.json().data);
        //     })
        //     .catch();
        // this.isLoginSuccessful = this.dataService.isAuthenticatedUser(this.userName, this.password);
        // if (this.isLoginSuccessful) {
        //     alert("Login success");
        // }
        // else {
        //     alert("Login failed");
        // }
    }
}
