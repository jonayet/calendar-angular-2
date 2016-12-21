import {Moment} from 'moment';

export interface ICalendarEvent{
    id: string;
    title: string;
    description: string;
    iconColor: string;
    remindBefore: number;
    start: Moment;
    end: Moment
}