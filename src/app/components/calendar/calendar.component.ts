import {Component} from '@angular/core';
import * as moment from 'moment';
import {ICalendarDay} from '../calendar-day/ICalendarDay';
import {CalendarService} from './calendar.service';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.view.html',
    styleUrls: ['./calendar.style.css'],
    providers: [CalendarService]
})
export class CalendarComponent {
    content: string = 'Calendar';
    days: ICalendarDay[] = [];
    selectedDay: ICalendarDay = null;

    constructor(private calendarService: CalendarService) {
        const startDate = moment();
        this.days = calendarService.getNextDays(startDate, 7, moment());
        this.selectedDay = this.days[0];
    }

    changeToNext(){
        const startDate = this.days[0].moment.add(1, 'days');
        this.days = this.calendarService.getNextDays(startDate, 7, this.selectedDay.moment);
    }

    changeToPrevious(){
        const startDate = this.days[0].moment.subtract(1, 'days');
        this.days = this.calendarService.getNextDays(startDate, 7, this.selectedDay.moment);
    }

    onDaySelect(date: ICalendarDay): void {
        if(!date.moment.isSame(this.selectedDay.moment, 'day')) {
            this.selectedDay.isSelected = false;
            this.selectedDay = date;
        }
        console.log(date);
    }
}