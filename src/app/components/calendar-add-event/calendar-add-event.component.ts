import * as moment from 'moment';
import {Component, Input, OnInit} from '@angular/core';
import {CalendarService} from '../calendar/calendar.service';
import {ICalendarEvent} from '../calendar/ICalendarEvent';
import {ICalendarDay} from '../calendar/ICalendarDay';

@Component({
    selector: 'calendar-add-event',
    templateUrl: './calendar-add-event.view.html',
    styleUrls: ['./calendar-add-event.style.css'],
    providers: [CalendarService]
})
export class CalendarAddEventComponent implements OnInit{
    @Input() day: ICalendarDay;

    event: ICalendarEvent;
    date: string;

    iconColors: string[] = [
        'red',
        'green',
        'blue'
    ];

    constructor(private calendarService: CalendarService) {
        this.event = <ICalendarEvent>{};
    }

    ngOnInit() {
        this.date = this.day.moment.format('YYYY-MM-DD');
    }

    onDateChange(date){
        console.log(moment(date));
    }

    onSubmit(){
        console.log(this.event);
    }
}