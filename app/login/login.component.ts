import { Component, EventEmitter, Output } from '@angular/core';
import { DataService} from '../shared/data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { User } from '../shared/user.model';

@Component({
    selector: 'login',
    templateUrl: `./app/login/login.component.html`
})
export class LoginComponent {
    userName: string = "balram";
    password: string = "chavan";
    isLoginSuccessful: boolean;
    // @Output() loginEvent: EventEmitter<any> = new EventEmitter();

    constructor(private http: Http, private dataService: DataService, private router: Router) {
    }

    onSubmit() {
        // this.dataService.doPostRequest("",null);
        console.log("trying to login...");
        console.log("user name: " + this.userName);
        console.log("password: " + this.password);

        this.dataService.doLogin(this.userName, this.password)
            .then(user => {
                console.log('login result: ' + user.isAuthenticatedUser);
                let loggedInUser = new User();
                loggedInUser.UserName = user.loggedInUser.UserName;
                loggedInUser.Id = user.loggedInUser.Id;
                loggedInUser.RoleId = user.loggedInUser.RoleId;

                this.dataService.setLoggedInUser(loggedInUser);
                this.router.navigateByUrl('/dashboard');
            });

        // let creds = JSON.stringify({ username: this.userName, password: this.password });

        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');

        // this.http.post('http://localhost:3000/login', creds, {
        //     headers: headers
        // }).subscribe(
        //     data => {
        //         console.log("Server response: " + data.json());
        //         var loginStatus = data.json();
        //         this.router.navigateByUrl('/dashboard');
        //     });
    }
}
