import * as moment from 'moment';
import {Injectable} from '@angular/core';
import {ICalendarDay} from './ICalendarDay';
import {ICalendarEvent} from "./ICalendarEvent";
import {CalendarPersistService} from './calendar-persist.service';

@Injectable()
export class CalendarService {
    private eventsMap: Map<string, ICalendarEvent[]> = new Map<string, ICalendarEvent[]>();
    private days: ICalendarDay[] = [];

    constructor(private calendarPersistService: CalendarPersistService){
        this.eventsMap = this.calendarPersistService.load();
    }

    getNextDays(dateFrom: moment.Moment, noOfDays: number, selectedDate: moment.Moment,): ICalendarDay[] {
        const date = dateFrom.clone();
        this.days = [];
        this.lastMonth = '';

        for (let i = 0; i < noOfDays; i++){
            this.days.push({
                day: date.format('dddd'),
                date: date.date(),
                month: this.getMonth(date),
                isToday: date.isSame(moment(), 'day'),
                isSelected: date.isSame(selectedDate, 'day'),
                moment: date.clone(),
                events: this.getDayEvents(date)
            });
            date.add(1, 'days');
        }
        return this.days;
    }

    bindEvents(day: ICalendarDay, events: ICalendarEvent[]){
        const targetDay = this.days.find((_day) => {
            return _day.moment.isSame(day.moment, 'day')
        });
        if(targetDay){
            targetDay.events = events;
        }
    }

    addEvent(day: ICalendarDay, event: ICalendarEvent){
        let events = this.getDayEvents(day.moment);
        events.push(event);
        this.bindEvents(day, events);
        this.calendarPersistService.save(this.eventsMap);
    }

    private lastMonth;
    private getMonth(moment: moment.Moment){
        let month = moment.format('MMMM');
        if(month == this.lastMonth) {
            month = '';
        } else {
            this.lastMonth = month;
        }
        return month;
    }

    private getDayEvents(date: moment.Moment){
        const mapKey = date.format('YYMMDD');
        let events;
        if(!this.eventsMap.get(mapKey)){
            events = [];
            this.eventsMap.set(mapKey, events);
        } else {
            events = this.eventsMap.get(mapKey);
        }
        return events;
    }
}
