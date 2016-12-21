import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {ICalendarEvent} from '../calendar/ICalendarEvent';
import {ICalendarDay} from '../calendar/ICalendarDay';
import {CalendarService} from '../calendar/calendar.service';

@Component({
    selector: 'calendar-events',
    templateUrl: './calendar-events.view.html',
    styleUrls: ['./calendar-events.style.css']
})
export class CalendarEventsComponent {
    @Input() day: ICalendarDay;
    @Input() events: ICalendarEvent[];
    @Output() afterEventAdded = new EventEmitter<ICalendarDay>();
    @Output() afterEventRemoved = new EventEmitter<ICalendarDay>();

    constructor(private router: Router, private calendarService: CalendarService) {

    }

    addEvent(){
        this.router.navigate(['/add', this.day.moment.format('YYYY-MM-DD')]);
    }

    eventAdded(event: ICalendarEvent){
        this.afterEventAdded.emit(this.day);
    }

    removeEvent(event: ICalendarEvent){
        this.calendarService.removeEvent(this.day, event);
        this.afterEventRemoved.emit(this.day)
    }
}