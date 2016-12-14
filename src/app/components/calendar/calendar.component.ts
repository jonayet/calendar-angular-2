import {Component} from '@angular/core';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.view.html',
    styleUrls: ['./calendar.style.css']
})
export class CalendarComponent {
    content: string = 'Calendar';
    constructor() {

    }
}