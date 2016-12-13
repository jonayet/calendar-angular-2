import {Component} from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: './menu.view.html',
    styleUrls: ['./menu.style.css']
})
export class MenuComponent {
    content: string = 'Menu';
    constructor() {

    }
}