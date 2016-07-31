import { Component,OnInit } from '@angular/core';
import { LoginComponent } from './login.component';
import { DataService} from './data.service';
import { DashboardComponent } from './dashboard.Component';
@Component({
    selector: 'my-app',
    templateUrl : `./app/app.component.html`,
    directives: [LoginComponent,DashboardComponent]
})
export class AppComponent { 
   isUserLoggedIn=false;

   onLogin(data:any){
       this.isUserLoggedIn = <boolean>data.isAuthenticatedUser;
   }
}
