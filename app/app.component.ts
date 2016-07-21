import { Component,OnInit } from '@angular/core';
import { LoginComponent } from './login.component';
import { DataService} from './data.service';

@Component({
    selector: 'my-app',
    templateUrl : `./app/app.component.html`,
    directives: [LoginComponent]
})
export class AppComponent { 
   
}
