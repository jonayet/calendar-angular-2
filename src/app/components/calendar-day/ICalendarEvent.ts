import {Moment} from 'moment';

export interface ICalendarEvent{
    title: string;
    description: string;
    iconColor: string;
    remindBefore: number;
    start: Moment;
    end: Moment
}