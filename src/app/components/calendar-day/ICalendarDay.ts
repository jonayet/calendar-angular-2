import {Moment} from 'moment';
import {ICalendarEvent} from './ICalendarEvent'

export interface ICalendarDay {
    day: string;
    date: number;
    month: string;
    isToday: boolean;
    isSelected: boolean;
    moment: Moment;
    events: ICalendarEvent[];
}