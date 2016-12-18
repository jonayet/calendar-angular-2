import * as moment from 'moment';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';
import {ICalendarDay} from '../calendar/ICalendarDay';
import {ICalendarEvent} from '../calendar/ICalendarEvent';
import {CalendarService} from '../calendar/calendar.service';

@Component({
    selector: 'calendar-next-event',
    templateUrl: './calendar-next-event.view.html',
    styleUrls: ['./calendar-next-event.style.css']
})
export class CalendarNextEventComponent implements OnInit, OnDestroy{
    nextEvent: ICalendarEvent;
    remainingTime: string;
    private subscription;
    private timerInterval = 5000;

    constructor(private calendarService: CalendarService) {

    }

    ngOnInit() {
        this.startNotificationTimer();
    }

    ngOnDestroy(){
        this.stopNotificationTimer();
    }

    showNextEvent(){
        this.nextEvent = this.calendarService.getNextEvent();
        this.remainingTime = this.nextEvent.start.from(moment());
    }

    private startNotificationTimer(){
        let timer = Observable.timer(this.timerInterval, this.timerInterval);
        this.subscription = timer.subscribe(() => {
            this.showNextEvent();
        });
    }

    private stopNotificationTimer(){
        this.subscription.unsubscribe();
    }
}