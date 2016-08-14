import { Component } from '@angular/core';
import { DataService} from '../shared/data.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Typeahead } from '../typeahead/typeahead.component';

@Component({
    selector: 'messages',
    templateUrl: `./app/messages/messages.component.html`,
    directives:[Typeahead]
})
export class MessagesComponent {

    fruits: any[] = [
        {
            id: 1,
            name: "1 - Apple",
            searchText: "apple"
        },
        {
            id: 2,
            name: "2 - Orange",
            searchText: "orange"
        },
        {
            id: 3,
            name: "3 - Banana",
            searchText: "banana"
        }
    ];
    selectedFruit: any;

    public fruitSelected(fruit: any) {
        this.selectedFruit = fruit;
        console.log(this.selectedFruit);
    }
    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        console.log('MessagesComponent initialized.');
    }
}
