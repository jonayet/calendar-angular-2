import { Routes } from '@angular/router';
import { Components } from './components/index';

export const routes: Routes = [
    { path: '',  component: Components.CalendarComponent },
    { path: 'add/:date',  component: Components.CalendarAddEventComponent },
    { path: '**', component: Components.CalendarComponent }
];