import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class DataService {
    userName: string;
    password: string;
    constructor(private http: Http) {
    }

    isAuthenticatedUser(userName: string, password: string): boolean {
        this.userName = "balram";
        this.password = "chavan";

        return this.userName === userName && this.password === password;
    }

    doPostRequest(url:string, body: any): any {
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
}