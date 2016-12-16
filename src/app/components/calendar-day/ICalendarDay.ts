import {Moment} from 'moment';
import {IEvent} from './IEvent'

export interface ICalendarDay {
    day: string;
    date: number;
    month: string;
    isToday: boolean;
    isSelected: boolean;
    moment: Moment;
    event: IEvent;
}