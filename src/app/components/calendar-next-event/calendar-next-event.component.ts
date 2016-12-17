import * as moment from 'moment';
import {Component} from '@angular/core';
import {ICalendarDay} from '../calendar/ICalendarDay';
import {ICalendarEvent} from '../calendar/ICalendarEvent';
import {CalendarService} from '../calendar/calendar.service';

@Component({
    selector: 'calendar-next-event',
    templateUrl: './calendar-next-event.view.html',
    styleUrls: ['./calendar-next-event.style.css']
})
export class CalendarNextEventComponent {
    nextEvent: ICalendarEvent;

    constructor(private calendarService: CalendarService) {

    }

    showNextEvent(){
        this.nextEvent = this.calendarService.getNextEvent();
    }

    getRemainingTime(){
        if(!this.nextEvent) {return ''}
        return this.nextEvent.start.diff(moment(), 'minutes');
    }
}