import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ICalendarDay} from './ICalendarDay';

@Component({
    selector: 'calendar-day',
    templateUrl: './calendar-day.view.html',
    styleUrls: ['./calendar-day.style.css']
})
export class CalendarDayComponent {
    @Input() day: ICalendarDay;
    @Output() onSelect = new EventEmitter<ICalendarDay>();

    constructor() {

    }

    selected(): void {
        this.day.isSelected = true;
        this.onSelect.emit(this.day);
    }
}