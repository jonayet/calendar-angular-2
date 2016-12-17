import * as moment from 'moment';
import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {CalendarService} from '../calendar/calendar.service';
import {ICalendarEvent} from '../calendar/ICalendarEvent';
import {ICalendarDay} from '../calendar/ICalendarDay';

@Component({
    selector: 'calendar-add-event',
    templateUrl: './calendar-add-event.view.html',
    styleUrls: ['./calendar-add-event.style.css']
})
export class CalendarAddEventComponent implements OnInit, OnChanges{
    @Input() day: ICalendarDay;

    event: ICalendarEvent;
    date: string;
    startTime: string;
    endTime: string;
    iconColors: string[] = [
        '#ccc',
        'green',
        'blue'
    ];

    constructor(private calendarService: CalendarService) {
        this.event = <ICalendarEvent>{};
    }

    ngOnInit() {
        this.startTime = moment().format('hh:mm');
        this.endTime = moment().add(1, 'hours').format('hh:mm');
        this.event.iconColor = this.iconColors[0];
    }

    ngOnChanges(changes) {
        if(changes.day) {
            this.date = changes.day.currentValue.moment.format('YYYY-MM-DD');
        }
    }

    onStartTimeChange(startTime){
        this.endTime = moment(startTime, 'hh:mm').add(1, 'hours').format('hh:mm');
    }

    onSubmit(){
        this.event.start = this.constructTime(this.date, this.startTime);
        this.event.end = this.constructTime(this.date, this.endTime);

        let event = Object.assign({}, this.event);
        let day = <ICalendarDay>{};
        day.moment = moment(this.date);
        this.calendarService.addEvent(day, event);
    }

    private constructTime(dateStr: string, timeStr: string){
        let date = moment(dateStr);
        let time = moment(timeStr, 'hh:mm');
        return date.set({
            hour: time.get('hour'),
            minute: time.get('minute'),
            second: time.get('second')
        });
    }
}