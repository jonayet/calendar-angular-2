import {Component} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.view.html',
    styleUrls: ['./home.style.css']
})
export class HomeComponent {
    content: string = 'Home';
    constructor() {

    }
}