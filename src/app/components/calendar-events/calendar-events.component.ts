import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ICalendarEvent} from '../calendar-day/ICalendarEvent';
import {ICalendarDay} from '../calendar-day/ICalendarDay';

@Component({
    selector: 'calendar-events',
    templateUrl: './calendar-events.view.html',
    styleUrls: ['./calendar-events.style.css']
})
export class CalendarEventsComponent {
    @Input() day: ICalendarDay;
    @Input() events: ICalendarEvent[];
    @Output() onAddEvent = new EventEmitter<ICalendarDay>();

    constructor() {

    }

    addClicked(){
        this.onAddEvent.emit(this.day);
    }
}