import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {CalendarService} from './components/calendar/calendar.service';
import {CalendarPersistService} from './components/calendar/calendar-persist.service';
import { Components } from './components/index';
import { routes } from './app.router';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ...Components
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        CalendarService,
        CalendarPersistService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }