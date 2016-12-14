import {Component} from '@angular/core';
import {ICalendarDay} from './ICalendarDay';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.view.html',
    styleUrls: ['./calendar.style.css']
})
export class CalendarComponent {
    content: string = 'Calendar';
    days: any[] = [
        {
            name: 'Thursday',
            date: 15,
            dateTime: null,
            event: null
        },
        {
            name: 'Friday',
            date: 16,
            dateTime: null,
            event: null
        },
        {
            name: 'Saturday',
            date: 17,
            dateTime: null,
            event: null
        },
        {
            name: 'Sunday',
            date: 18,
            dateTime: null,
            event: null
        },
        {
            name: 'Monday',
            date: 19,
            dateTime: null,
            event: null
        },
        {
            name: 'Tuesday',
            date: 20,
            dateTime: null,
            event: null
        },
        {
            name: 'Wednesday',
            date: 21,
            dateTime: null,
            event: null
        }
    ];

    constructor() {

    }
}