import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Components } from './components/index';
import { Pages } from './pages/index';
import { routes } from './app.router';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ...Components,
        ...Pages
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }