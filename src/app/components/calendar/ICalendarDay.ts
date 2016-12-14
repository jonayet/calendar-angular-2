import {IEvent} from './IEvent'

export interface ICalendarDay {
    name: string;
    date: number;
    dateTime: Date;
    event: IEvent
}