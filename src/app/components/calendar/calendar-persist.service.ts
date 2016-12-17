import * as moment from 'moment';
import {Injectable} from '@angular/core';
import {ICalendarEvent} from '../calendar/ICalendarEvent';

@Injectable()
export class CalendarPersistService {
    private storageKey: string = 'calendar';

    save(map: Map<string, ICalendarEvent[]>): void {
        localStorage[this.storageKey] = JSON.stringify(Array.from(map.entries()));
    }

    load(): Map<string, ICalendarEvent[]>{
        const mapEntities: string = localStorage[this.storageKey];
        if(mapEntities) {
            const map = new Map<string, ICalendarEvent[]>(JSON.parse(mapEntities));
            return this.constructEventProperties(map);
        } else {
            return new Map<string, ICalendarEvent[]>();
        }
    }

    private constructEventProperties(map: Map<string, ICalendarEvent[]>): Map<string, ICalendarEvent[]>{
        map.forEach(function (events: ICalendarEvent[]) {
            events.forEach(function (event: ICalendarEvent) {
                event.start = moment(event.start);
                event.end = moment(event.end);
            })
        });
        return map;
    }
}