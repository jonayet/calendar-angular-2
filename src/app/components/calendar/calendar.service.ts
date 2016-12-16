import * as moment from 'moment';
import {Injectable} from '@angular/core';
import {ICalendarDay} from '../calendar-day/ICalendarDay';

@Injectable()
export class CalendarService {
    getNextDays(dateFrom: moment.Moment, noOfDays: number, selectedDate: moment.Moment,): ICalendarDay[] {
        const _dateFrom = dateFrom.clone();
        let days: ICalendarDay[] = [];
        this.lastMonth = '';

        for (let i = 0; i < noOfDays; i++){
            days.push({
                day: _dateFrom.format('dddd'),
                date: _dateFrom.date(),
                month: this.getMonth(_dateFrom),
                isToday: _dateFrom.isSame(moment(), 'day'),
                isSelected: _dateFrom.isSame(selectedDate, 'day'),
                moment: _dateFrom.clone(),
                event: null,
            });
            _dateFrom.add(1, 'days');
        }
        return days;
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
}
