import * as moment from 'moment';
import {Component, OnInit, ViewChild} from '@angular/core';
import {ICalendarDay} from './ICalendarDay';
import {CalendarService} from './calendar.service';
import {CalendarNextEventComponent} from '../calendar-next-event/calendar-next-event.component';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.view.html',
    styleUrls: ['./calendar.style.css']
})
export class CalendarComponent implements OnInit{
    @ViewChild(CalendarNextEventComponent) nextEventComponent: CalendarNextEventComponent;
    days: ICalendarDay[] = [];
    selectedDay: ICalendarDay = null;

    constructor(private calendarService: CalendarService) {

    }

    ngOnInit(){
        const startDate = moment();
        this.days = this.calendarService.getNextDays(startDate, 7, moment());
        this.selectedDay = this.days[0];
        this.nextEventComponent.showNextEvent();
    }

    showNextDays(){
        const startDate = this.days[0].moment.add(1, 'days');
        this.days = this.calendarService.getNextDays(startDate, 7, this.selectedDay.moment);
        this.nextEventComponent.showNextEvent();
    }

    showPreviousDays(){
        const startDate = this.days[0].moment.subtract(1, 'days');
        this.days = this.calendarService.getNextDays(startDate, 7, this.selectedDay.moment);
        this.nextEventComponent.showNextEvent();
    }

    onDaySelect(day: ICalendarDay): void {
        this.updateSelectedDay(day);
    }

    afterEventAdded(day: ICalendarDay): void {
        this.nextEventComponent.showNextEvent();
    }

    afterEventRemoved(){
        this.nextEventComponent.showNextEvent();
    }

    private updateSelectedDay(selectedDay: ICalendarDay){
        this.selectedDay = selectedDay;
        this.days.forEach((day) => {
            day.isSelected = day.moment.isSame(this.selectedDay.moment, 'day');
        });
    }
}