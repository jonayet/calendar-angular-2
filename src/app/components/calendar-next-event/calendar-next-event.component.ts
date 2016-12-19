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
    eventTime: string;
    showWarning: boolean = false;

    private subscription;
    private timerInterval = 1000;

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
        if(!this.nextEvent) {return;}

        const now = moment();
        const duration = moment.duration(this.nextEvent.start.diff(now));
        this.showWarning = duration.asMinutes() <= 5;

        if(duration.asMinutes() > 60){
            this.eventTime = this.nextEvent.start.calendar();
        } else {
            this.eventTime = duration.hours() + ":" + this.padZero(duration.minutes()) + ":" + this.padZero(duration.seconds());
        }
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

    private padZero(number): string{
        return number < 10 ? '0' + number : number;
    }
}