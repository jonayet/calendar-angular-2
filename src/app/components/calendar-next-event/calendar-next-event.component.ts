import * as moment from 'moment';
import {Component} from '@angular/core';
import {ICalendarDay} from '../calendar/ICalendarDay';
import {CalendarService} from '../calendar/calendar.service';

@Component({
    selector: 'calendar-next-event',
    templateUrl: './calendar-next-event.view.html',
    styleUrls: ['./calendar-next-event.style.css']
})
export class CalendarNextEventComponent {
    content = "Next";

    constructor(private calendarService: CalendarService) {

    }
}