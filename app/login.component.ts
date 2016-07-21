import { Component } from '@angular/core';
import { DataService} from './data.service';
import { Http, Response } from '@angular/http';
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
    constructor(private http: Http, private dataService: DataService) {
        this.http.get("http://localhost:3000/login")
            .toPromise()
            .then(response => {
                console.log('got response:');
                console.log(response.json().data);
            })
            .catch();
    }

    onSubmit() {
        console.log('tryig to call service...');
        
        this.http.get("http://localhost:3000/login")
            .toPromise()
            .then(response => {
                console.log('got response:');
                console.log(response.json().data);
            })
            .catch();
        this.isLoginSuccessful = this.dataService.isAuthenticatedUser(this.userName, this.password);
        if (this.isLoginSuccessful) {
            alert("Login success");
        }
        else {
            alert("Login failed");
        }
    }
}
