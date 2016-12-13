import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.view.html',
    styleUrls: ['./app.style.css']
})
export class AppComponent {
    content: string = 'Angular 2 Quickstart';
    constructor() {

    }
}