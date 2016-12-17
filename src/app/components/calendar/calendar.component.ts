import * as moment from 'moment';
import {Component, ViewChild} from '@angular/core';
import {ICalendarDay} from './ICalendarDay';
import {CalendarService} from './calendar.service';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.view.html',
    styleUrls: ['./calendar.style.css']
})
export class CalendarComponent {
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

    onDaySelect(day: ICalendarDay): void {
        this.updateSelectedDay(day);
    }

    onAddEvent(day: ICalendarDay): void {

    }

    private updateSelectedDay(selectedDay: ICalendarDay){
        this.selectedDay = selectedDay;
        this.days.forEach((day) => {
            day.isSelected = day.moment.isSame(this.selectedDay.moment, 'day');
        });
    }
}