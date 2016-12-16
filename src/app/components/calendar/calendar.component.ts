import * as moment from 'moment';
import {Component} from '@angular/core';
import {ICalendarDay} from '../calendar-day/ICalendarDay';
import {CalendarService} from './calendar.service';
import {CalendarPersistService} from './calendar-persist.service';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.view.html',
    styleUrls: ['./calendar.style.css'],
    providers: [CalendarService, CalendarPersistService]
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

    private updateSelectedDay(selectedDay: ICalendarDay){
        this.selectedDay = selectedDay;
        this.days.forEach((day) => {
           day.isSelected = day.moment.isSame(this.selectedDay.moment, 'day');
        });
    }

    onDaySelect(day: ICalendarDay): void {
        this.updateSelectedDay(day);
        // this.selectedDay.events = [
        //     {
        //         title: 'Event 1',
        //         description: 'desc 1',
        //         iconColor: 'red',
        //         remindBefore: 10,
        //         start: moment(),
        //         end: moment().add(1, 'hours')
        //     },
        //     {
        //         title: 'Event 2',
        //         description: 'desc 2',
        //         iconColor: 'red',
        //         remindBefore: 10,
        //         start: moment(),
        //         end: moment().add(1, 'hours')
        //     },
        //     {
        //         title: 'Event 3',
        //         description: 'desc 3',
        //         iconColor: 'red',
        //         remindBefore: 10,
        //         start: moment(),
        //         end: moment().add(1, 'hours')
        //     }
        // ];
    }

    onAddEvent(day: ICalendarDay): void {
        this.calendarService.addEvent(day, {
            title: 'Event 1',
            description: 'desc 1',
            iconColor: 'red',
            remindBefore: 10,
            start: moment(),
            end: moment().add(1, 'hours')
        });
    }
}