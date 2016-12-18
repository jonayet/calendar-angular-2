import {CalendarComponent} from './calendar/calendar.component';
import {CalendarDayComponent} from './calendar-day/calendar-day.component';
import {CalendarEventsComponent} from './calendar-events/calendar-events.component';
import {CalendarAddEventComponent} from './calendar-add-event/calendar-add-event.component';
import {CalendarNextEventComponent} from './calendar-next-event/calendar-next-event.component';
import {CalendarService} from './calendar/calendar.service';
import {CalendarPersistService} from './calendar/calendar-persist.service';

export const Components = {
    CalendarComponent,
    CalendarDayComponent,
    CalendarEventsComponent,
    CalendarAddEventComponent,
    CalendarNextEventComponent
};

export const ComponentRegistry = [
    CalendarComponent,
    CalendarDayComponent,
    CalendarEventsComponent,
    CalendarAddEventComponent,
    CalendarNextEventComponent
];

export const ProviderRegistry = [
    CalendarService,
    CalendarPersistService
];