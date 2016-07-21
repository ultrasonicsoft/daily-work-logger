import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    userName: string;
    password: string;

    isAuthenticatedUser(userName: string, password: string):boolean{
        this.userName = "balram";
        this.password = "chavan";

        return this.userName === userName && this.password === password;
    }
}