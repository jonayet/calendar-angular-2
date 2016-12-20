import * as moment from 'moment';
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {CalendarService} from '../calendar/calendar.service';
import {ICalendarEvent} from '../calendar/ICalendarEvent';
import {ICalendarDay} from '../calendar/ICalendarDay';

@Component({
    selector: 'calendar-add-event',
    templateUrl: './calendar-add-event.view.html',
    styleUrls: ['./calendar-add-event.style.css']
})
export class CalendarAddEventComponent implements OnInit{
    //@Input() day: ICalendarDay;
    //@Output() afterEventAdded = new EventEmitter<ICalendarEvent>();
    event: ICalendarEvent;
    date: string;
    startTime: string;
    endTime: string;

    iconColors: string[] = [
        'coral',
        'gold',
        'cornflowerblue',
        'lightblue',
        'hotpink'
    ];
    isVisible: boolean = true;

    constructor(private router: Router, private route: ActivatedRoute, private calendarService: CalendarService) {

    }

    ngOnInit(){
        this.initialize();
        this.route.params.subscribe((params) => {
            this.date = params['date'];
        });
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
        this.router.navigate(['/']);

        //this.afterEventAdded.emit(event);
        //this.close();
    }

    open(){
        this.initialize();
        this.isVisible = true;
    }

    close(){
        //this.isVisible = false;
        this.router.navigate(['/']);
    }

    private initialize(){
        this.event = <ICalendarEvent>{};
        this.event.iconColor = this.iconColors[0];

        //this.date = this.day.moment.format('YYYY-MM-DD');
        this.startTime = moment().format('HH:mm');
        this.endTime = moment().add(1, 'hours').format('HH:mm');
    }

    private constructTime(dateStr: string, timeStr: string){
        let date = moment(dateStr);
        let time = moment(timeStr, 'HH:mm');
        return date.set({
            hour: time.get('hour'),
            minute: time.get('minute'),
            second: time.get('second')
        });
    }
}