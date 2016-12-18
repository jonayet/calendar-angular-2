import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {ICalendarEvent} from '../calendar/ICalendarEvent';
import {ICalendarDay} from '../calendar/ICalendarDay';
import {CalendarAddEventComponent} from '../calendar-add-event/calendar-add-event.component';

@Component({
    selector: 'calendar-events',
    templateUrl: './calendar-events.view.html',
    styleUrls: ['./calendar-events.style.css']
})
export class CalendarEventsComponent {
    @Input() day: ICalendarDay;
    @Input() events: ICalendarEvent[];
    @Output() afterEventAdded = new EventEmitter<ICalendarDay>();
    @ViewChild(CalendarAddEventComponent) addEventComponent: CalendarAddEventComponent;

    constructor() {

    }

    addEvent(){
        this.addEventComponent.open();
    }

    eventAdded(event){
        this.afterEventAdded.emit(this.day);
    }
}