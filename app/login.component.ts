import { Component, EventEmitter, Output } from '@angular/core';
import { DataService} from './data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: `./app/login.component.html`,
    providers: [DataService]
})
export class LoginComponent {
    userName: string = "balram";
    password: string = "chavan";
    isLoginSuccessful: boolean;
    // @Output() loginEvent: EventEmitter<any> = new EventEmitter();

    constructor(private http: Http, private dataService: DataService, private router: Router) {
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

                this.router.navigateByUrl('/dashboard');

                // if (loginStatus.isAuthenticatedUser) {
                //     alert("Login successful");
                // }
                // else {
                //     alert("Login failed");
                // }
            });
    }
}
