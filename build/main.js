webpackJsonp([0],{0:function(e,n,t){"use strict";t(1),t(486)},1:function(e,n,t){"use strict";var r=t(2),a=t(4),o=t(24);a.enableProdMode(),r.platformBrowserDynamic().bootstrapModule(o.AppModule)},24:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,i=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(o<3?a(i):o>3?a(n,t,i):a(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},o=t(4),i=t(23),d=t(22),s=t(25),l=t(29),c=t(59),p=t(62),v=t(485),f=function(){function AppModule(){}return AppModule}();f=r([o.NgModule({imports:[d.BrowserModule,s.FormsModule,l.RouterModule.forRoot(v.routes)],declarations:[c.AppComponent].concat(p.ComponentRegistry),providers:[{provide:i.LocationStrategy,useClass:i.HashLocationStrategy}].concat(p.ProviderRegistry),bootstrap:[c.AppComponent]}),a("design:paramtypes",[])],f),n.AppModule=f},59:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,i=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(o<3?a(i):o>3?a(n,t,i):a(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},o=t(4),i=function(){function AppComponent(){}return AppComponent}();i=r([o.Component({selector:"app",template:t(60),styles:[t(61)]}),a("design:paramtypes",[])],i),n.AppComponent=i},60:function(e,n){e.exports='<div class="app">\r\n    <router-outlet></router-outlet>\r\n</div>'},61:function(e,n){e.exports="@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n\r\n:host{\r\n    display: block;\r\n}\r\n\r\n.app{\r\n    font-family: \"Roboto Condensed\", Helvetica, Arial, sans-serif;\r\n}\r\n"},62:function(e,n,t){"use strict";var r=t(63),a=t(476),o=t(479),i=t(480),d=t(177),s=t(175),l=t(176);n.Components={CalendarComponent:r.CalendarComponent,CalendarDayComponent:a.CalendarDayComponent,CalendarEventsComponent:o.CalendarEventsComponent,CalendarAddEventComponent:i.CalendarAddEventComponent,CalendarNextEventComponent:d.CalendarNextEventComponent},n.ComponentRegistry=[r.CalendarComponent,a.CalendarDayComponent,o.CalendarEventsComponent,i.CalendarAddEventComponent,d.CalendarNextEventComponent],n.ProviderRegistry=[s.CalendarService,l.CalendarPersistService]},63:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,i=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(o<3?a(i):o>3?a(n,t,i):a(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},o=t(64),i=t(4),d=t(175),s=t(177),l=function(){function CalendarComponent(e){this.calendarService=e,this.days=[],this.selectedDay=null}return CalendarComponent.prototype.ngOnInit=function(){var e=o();this.days=this.calendarService.getNextDays(e,7,o()),this.selectedDay=this.days[0],this.nextEventComponent.showNextEvent()},CalendarComponent.prototype.showNextDays=function(){var e=this.days[0].moment.add(1,"days");this.days=this.calendarService.getNextDays(e,7,this.selectedDay.moment),this.nextEventComponent.showNextEvent()},CalendarComponent.prototype.showPreviousDays=function(){var e=this.days[0].moment.subtract(1,"days");this.days=this.calendarService.getNextDays(e,7,this.selectedDay.moment),this.nextEventComponent.showNextEvent()},CalendarComponent.prototype.onDaySelect=function(e){this.updateSelectedDay(e)},CalendarComponent.prototype.afterEventAdded=function(e){this.nextEventComponent.showNextEvent()},CalendarComponent.prototype.updateSelectedDay=function(e){var n=this;this.selectedDay=e,this.days.forEach(function(e){e.isSelected=e.moment.isSame(n.selectedDay.moment,"day")})},CalendarComponent}();r([i.ViewChild(s.CalendarNextEventComponent),a("design:type",s.CalendarNextEventComponent)],l.prototype,"nextEventComponent",void 0),l=r([i.Component({selector:"calendar",template:t(474),styles:[t(475)]}),a("design:paramtypes",[d.CalendarService])],l),n.CalendarComponent=l},175:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,i=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(o<3?a(i):o>3?a(n,t,i):a(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},o=t(64),i=t(4),d=t(176),s=function(){function CalendarService(e){this.calendarPersistService=e,this.eventsMap=new Map,this.days=[],this.eventsMap=this.calendarPersistService.load()}return CalendarService.prototype.getNextDays=function(e,n,t){var r=e.clone();this.days=[],this.lastMonth="";for(var a=0;a<n;a++)this.days.push({day:r.format("dddd"),date:r.date(),month:this.getMonth(r),isToday:r.isSame(o(),"day"),isSelected:r.isSame(t,"day"),moment:r.clone(),events:this.getDayEvents(r)}),r.add(1,"days");return this.days},CalendarService.prototype.bindEvents=function(e,n){var t=this.days.find(function(n){return n.moment.isSame(e.moment,"day")});t&&(t.events=this.sortEvents(n))},CalendarService.prototype.addEvent=function(e,n){var t=this.getDayEvents(e.moment);t.push(n),this.bindEvents(e,t),this.calendarPersistService.save(this.eventsMap)},CalendarService.prototype.getNextEvent=function(){var e=null,n=o(),t=this.days.filter(function(e){return e.moment.isSameOrAfter(n,"days")&&e.events.length>0});if(!t.length)return e;for(var r=0,a=t;r<a.length;r++){var i=a[r];if(e=i.events.find(function(e){return e.start.isSameOrAfter(n,"seconds")}))break}return e},CalendarService.prototype.getMonth=function(e){var n=e.format("MMMM");return n==this.lastMonth?n="":this.lastMonth=n,n},CalendarService.prototype.sortEvents=function(e){return e.sort(function(e,n){return e.start.diff(n.start,"minutes")})},CalendarService.prototype.getDayEvents=function(e){var n,t=e.format("YYMMDD");return this.eventsMap.get(t)?n=this.eventsMap.get(t):(n=[],this.eventsMap.set(t,n)),this.sortEvents(n)},CalendarService}();s=r([i.Injectable(),a("design:paramtypes",[d.CalendarPersistService])],s),n.CalendarService=s},176:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,i=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(o<3?a(i):o>3?a(n,t,i):a(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},o=t(64),i=t(4),d=function(){function CalendarPersistService(){this.storageKey="calendar"}return CalendarPersistService.prototype.save=function(e){localStorage[this.storageKey]=JSON.stringify(Array.from(e.entries()))},CalendarPersistService.prototype.load=function(){var e=localStorage[this.storageKey];if(e){var n=new Map(JSON.parse(e));return this.constructEventProperties(n)}return new Map},CalendarPersistService.prototype.constructEventProperties=function(e){return e.forEach(function(e){e.forEach(function(e){e.start=o(e.start),e.end=o(e.end)})}),e},CalendarPersistService}();d=r([i.Injectable(),a("design:paramtypes",[])],d),n.CalendarPersistService=d},177:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,i=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(o<3?a(i):o>3?a(n,t,i):a(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},o=t(64),i=t(4),d=t(178),s=t(175),l=function(){function CalendarNextEventComponent(e){this.calendarService=e,this.showWarning=!1,this.timerInterval=1e3}return CalendarNextEventComponent.prototype.ngOnInit=function(){this.startNotificationTimer()},CalendarNextEventComponent.prototype.ngOnDestroy=function(){this.stopNotificationTimer()},CalendarNextEventComponent.prototype.showNextEvent=function(){if(this.nextEvent=this.calendarService.getNextEvent(),this.nextEvent){var e=o(),n=o.duration(this.nextEvent.start.diff(e));this.showWarning=n.asMinutes()<=5,n.asMinutes()>60?this.eventTime=this.nextEvent.start.calendar():this.eventTime=n.hours()+":"+this.padZero(n.minutes())+":"+this.padZero(n.seconds())}},CalendarNextEventComponent.prototype.startNotificationTimer=function(){var e=this,n=d.Observable.timer(this.timerInterval,this.timerInterval);this.subscription=n.subscribe(function(){e.showNextEvent()})},CalendarNextEventComponent.prototype.stopNotificationTimer=function(){this.subscription.unsubscribe()},CalendarNextEventComponent.prototype.padZero=function(e){return e<10?"0"+e:e},CalendarNextEventComponent}();l=r([i.Component({selector:"calendar-next-event",template:t(472),styles:[t(473)]}),a("design:paramtypes",[s.CalendarService])],l),n.CalendarNextEventComponent=l},472:function(e,n){e.exports='<div *ngIf="nextEvent" class="calendar-next-event">\r\n    <div class="calendar-next-event_header">\r\n        Next Event\r\n    </div>\r\n    <div class="calendar-next-event_title">\r\n        {{nextEvent.title}}\r\n    </div>\r\n    <div class="calendar-next-event_time" [ngStyle]="{\'color\': this.showWarning ? \'red\': \'black\'}">\r\n        {{eventTime}}\r\n    </div>\r\n</div>'},473:function(e,n){e.exports=".calendar-next-event{\r\n    margin-top: 30px;\r\n}\r\n\r\n.calendar-next-event .calendar-next-event_header{\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n}\r\n\r\n.calendar-next-event .calendar-next-event_title{\r\n    font-size: 1.2em;\r\n}\r\n\r\n.calendar-next-event .calendar-next-event_time{\r\n    font-size: 2em;\r\n}"},474:function(e,n){e.exports='<div class="calendar">\r\n    <div class="calendar_md_top-offset hidden-xs hidden-sm"></div>\r\n    <div class="row">\r\n        <div class="col-xs-6 col-md-12">\r\n            <div class="calendar_show-previous col-xs-12 col-md-offset-1 col-md-1">\r\n                <button (click)="showPreviousDays()" class="calendar_btn calendar_btn-left hidden-xs hidden-sm">\r\n                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">\r\n                        <polyline fill="none" stroke-linecap="round" stroke-linejoin="round" points="50,100 0,50 50,0"></polyline>\r\n                    </svg>\r\n                </button>\r\n                <button (click)="showPreviousDays()" class="calendar_btn calendar_btn-up hidden-md hidden-lg">\r\n                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">\r\n                        <polyline fill="none" stroke-linecap="round" stroke-linejoin="round" points="0,50 50,0 100,50"></polyline>\r\n                    </svg>\r\n                </button>\r\n            </div>\r\n            <div *ngFor=\'let day of days\' class="calendar_days col-xs-12 col-md-1">\r\n                <div class="calendar_month hidden-xs hidden-sm">\r\n                    {{day.month}}\r\n                </div>\r\n                <div *ngIf="day.month" class="calendar_month hidden-md hidden-lg">\r\n                    {{day.month}}\r\n                </div>\r\n                <calendar-day [day]="day" (onSelect)="onDaySelect($event)"></calendar-day>\r\n            </div>\r\n\r\n            <div class="col-xs-12 col-md-1">\r\n                <button (click)="showNextDays()" class="calendar_btn calendar_btn-right hidden-xs hidden-sm">\r\n                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 60 60">\r\n                        <polyline fill="none" stroke-linecap="round" stroke-linejoin="round" points="30,60 60,30 30,0"></polyline>\r\n                    </svg>\r\n                </button>\r\n                <button (click)="showNextDays()" class="calendar_btn calendar_btn-down hidden-md hidden-lg">\r\n                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 60 60">\r\n                        <polyline fill="none" stroke-linecap="round" stroke-linejoin="round" points="0,30 30,60 60,30"></polyline>\r\n                    </svg>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class="calendar_col-2-top-offset"></div>\r\n        <div class="calendar_events col-xs-6 col-md-7 col-md-offset-2">\r\n            <calendar-events [day]="selectedDay" [events]="selectedDay.events" (afterEventAdded)="afterEventAdded($event)"></calendar-events>\r\n            <calendar-next-event></calendar-next-event>\r\n        </div>\r\n    </div>\r\n</div>'},475:function(e,n){e.exports=".calendar{\r\n\r\n}\r\n\r\n.calendar .calendar_month{\r\n    font-size: 1.1em;\r\n    min-height: 21px;\r\n    text-align: center;\r\n    margin: 5px 0;\r\n}\r\n\r\n.calendar .calendar_days{\r\n    padding: 2px;\r\n}\r\n\r\n.calendar .calendar_md_top-offset{\r\n    margin-top: 100px;\r\n}\r\n\r\n.calendar .calendar_col-2-top-offset{\r\n    margin-top: 30px;\r\n}\r\n\r\n.calendar .calendar_events{\r\n    margin-top: 20px;\r\n}\r\n\r\n.calendar svg {\r\n    padding: 5px;\r\n}\r\n\r\n.calendar button.calendar_btn {\r\n    -webkit-appearance: none;\r\n    background: transparent;\r\n    border: 0;\r\n    outline: 0;\r\n    cursor: pointer;\r\n    width: 60px;\r\n    height: 60px;\r\n    display: block;\r\n}\r\n\r\n.calendar button.calendar_btn-left {\r\n    margin-top: 50px;\r\n}\r\n\r\n.calendar button.calendar_btn-right {\r\n    margin-top: 50px;\r\n}\r\n\r\n.calendar button.calendar_btn-up {\r\n    margin: 0 auto;\r\n}\r\n\r\n.calendar button.calendar_btn-down {\r\n    margin: 0 auto;\r\n}\r\n\r\n.calendar button.calendar_btn:hover polyline,\r\n .calendar button.calendar_btn:focus polyline {\r\n     stroke-width: 4;\r\n }\r\n\r\n.calendar button.calendar_btn:active polyline {\r\n    stroke-width: 6;\r\n    transition: all 100ms ease-in-out;\r\n}\r\n\r\n.calendar polyline {\r\n    stroke: #000000;\r\n    stroke-width: 2;\r\n    transition: all 250ms ease-in-out;\r\n}"},476:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,i=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(o<3?a(i):o>3?a(n,t,i):a(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},o=t(4),i=function(){function CalendarDayComponent(){this.onSelect=new o.EventEmitter,this.maxEventsToShow=4}return CalendarDayComponent.prototype.selected=function(){this.day.isSelected=!0,this.onSelect.emit(this.day)},CalendarDayComponent}();r([o.Input(),a("design:type",Object)],i.prototype,"day",void 0),r([o.Output(),a("design:type",Object)],i.prototype,"onSelect",void 0),i=r([o.Component({selector:"calendar-day",template:t(477),styles:[t(478)]}),a("design:paramtypes",[])],i),n.CalendarDayComponent=i},477:function(e,n){e.exports='<div (click)="selected()"\r\n     class="calendar-day"\r\n     [ngClass]="{\'calendar-day_selected\': day.isSelected, \'calendar-day_today\': day.isToday}">\r\n    <div class="calendar-day_date">\r\n        {{day.date}}\r\n    </div>\r\n    <div class="calendar-day_day">\r\n        {{day.day}}\r\n    </div>\r\n    <div class="calendar-day_events">\r\n        <div *ngFor="let event of day.events.slice(0, maxEventsToShow); let index = index;" class="calendar-day_event">\r\n            <div *ngIf="index <= maxEventsToShow" class="calendar-day_event_icon" [ngStyle]="{\'background\': event.iconColor}">\r\n\r\n            </div>\r\n        </div>\r\n        <div *ngIf="day.events.length > maxEventsToShow" class="calendar-day_event">\r\n            <div class="calendar-day_event_number">\r\n            +{{day.events.length - maxEventsToShow}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},478:function(e,n){e.exports=":host{\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100px;\r\n    cursor: default;\r\n    user-select: none;\r\n}\r\n\r\n.calendar-day{\r\n    width: 100%;\r\n    height: 100%;\r\n    border: solid 1px #c2c2c2;\r\n    display: inline-block;\r\n    background: #f5f5f5;\r\n}\r\n\r\n.calendar-day.calendar-day_today{\r\n    border: solid 1px lightseagreen;\r\n}\r\n\r\n.calendar-day.calendar-day_selected{\r\n    border: solid 1px blueviolet;\r\n}\r\n\r\n.calendar-day .calendar-day_date {\r\n    width: 100%;\r\n    font-size: 4em;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: -10px;\r\n}\r\n\r\n.calendar-day .calendar-day_day {\r\n    width: 100%;\r\n    font-size: 1.1em;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 55px;\r\n}\r\n\r\n.calendar-day_today .calendar-day_day {\r\n    font-weight: bold;\r\n}\r\n\r\n.calendar-day_today .calendar-day_date {\r\n    font-weight: bold;\r\n}\r\n\r\n.calendar-day .calendar-day_events{\r\n    position: absolute;\r\n    top: 75px;\r\n    right: 8px;\r\n}\r\n\r\n.calendar-day .calendar-day_event{\r\n    display: inline-block;\r\n    margin: 0 2px;\r\n}\r\n\r\n.calendar-day .calendar-day_event_icon{\r\n    width: 10px;\r\n    height: 10px;\r\n}\r\n\r\n.calendar-day .calendar-day_event_number{\r\n    font-size: 1em;\r\n    font-weight: bold;\r\n    margin-right: 0;\r\n}"},479:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,i=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(o<3?a(i):o>3?a(n,t,i):a(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},o=t(4),i=t(29),d=t(480),s=function(){function CalendarEventsComponent(e){this.router=e,this.afterEventAdded=new o.EventEmitter}return CalendarEventsComponent.prototype.addEvent=function(){this.router.navigate(["/add",this.day.moment.format("YYYY-MM-DD")])},CalendarEventsComponent.prototype.eventAdded=function(e){this.afterEventAdded.emit(this.day)},CalendarEventsComponent}();r([o.Input(),a("design:type",Object)],s.prototype,"day",void 0),r([o.Input(),a("design:type",Array)],s.prototype,"events",void 0),r([o.Output(),a("design:type",Object)],s.prototype,"afterEventAdded",void 0),r([o.ViewChild(d.CalendarAddEventComponent),a("design:type",d.CalendarAddEventComponent)],s.prototype,"addEventComponent",void 0),s=r([o.Component({selector:"calendar-events",template:t(483),styles:[t(484)]}),a("design:paramtypes",[i.Router])],s),n.CalendarEventsComponent=s},480:function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var a,o=arguments.length,i=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(o<3?a(i):o>3?a(n,t,i):a(n,t))||i);return o>3&&i&&Object.defineProperty(n,t,i),i},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},o=t(64),i=t(4),d=t(29),s=t(175),l=function(){function CalendarAddEventComponent(e,n,t){this.router=e,this.route=n,this.calendarService=t,this.iconColors=["coral","gold","cornflowerblue","lightblue","hotpink"],this.isVisible=!0}return CalendarAddEventComponent.prototype.ngOnInit=function(){var e=this;this.initialize(),this.route.params.subscribe(function(n){e.date=n.date})},CalendarAddEventComponent.prototype.onStartTimeChange=function(e){this.endTime=o(e,"hh:mm").add(1,"hours").format("hh:mm")},CalendarAddEventComponent.prototype.onSubmit=function(){this.event.start=this.constructTime(this.date,this.startTime),this.event.end=this.constructTime(this.date,this.endTime);var e=Object.assign({},this.event),n={};n.moment=o(this.date),this.calendarService.addEvent(n,e),this.router.navigate(["/"])},CalendarAddEventComponent.prototype.open=function(){this.initialize(),this.isVisible=!0},CalendarAddEventComponent.prototype.close=function(){this.router.navigate(["/"])},CalendarAddEventComponent.prototype.initialize=function(){this.event={},this.event.iconColor=this.iconColors[0],this.startTime=o().format("HH:mm"),this.endTime=o().add(1,"hours").format("HH:mm")},CalendarAddEventComponent.prototype.constructTime=function(e,n){var t=o(e),r=o(n,"HH:mm");return t.set({hour:r.get("hour"),minute:r.get("minute"),second:r.get("second")})},CalendarAddEventComponent}();l=r([i.Component({selector:"calendar-add-event",template:t(481),styles:[t(482)]}),a("design:paramtypes",[d.Router,d.ActivatedRoute,s.CalendarService])],l),n.CalendarAddEventComponent=l},481:function(e,n){e.exports='<div *ngIf="isVisible" class="modal-backdrop fade in"></div>\r\n<div *ngIf="isVisible" class="calendar-add-event modal fade show in" role="dialog">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content">\r\n            <div class="modal-header">\r\n                <button type="button" class="close" (click)="close()">&times;</button>\r\n                <h2>Add Event</h2>\r\n            </div>\r\n            <div class="modal-body">\r\n                <form (ngSubmit)="onSubmit()">\r\n                    <div class="form-group">\r\n                        <label for="date">Date</label>\r\n                        <input type="date"\r\n                               id="date"\r\n                               name="date"\r\n                               class="form-control"\r\n                               required\r\n                               [(ngModel)]="date">\r\n                    </div>\r\n\r\n                    <div class="row">\r\n                        <div class="col-md-6">\r\n                            <div class="form-group">\r\n                                <label for="startTime">Start</label>\r\n                                <input type="time"\r\n                                       id="startTime"\r\n                                       name="startTime"\r\n                                       class="form-control"\r\n                                       required\r\n                                       [(ngModel)]="startTime"\r\n                                       (ngModelChange)="onStartTimeChange($event)">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class="col-md-6">\r\n                            <div class="form-group">\r\n                                <label for="endTime">End</label>\r\n                                <input type="time"\r\n                                       class="form-control"\r\n                                       id="endTime"\r\n                                       name="endTime"\r\n                                       class="form-control"\r\n                                       required\r\n                                       [(ngModel)]="endTime">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                        <label for="title">Title</label>\r\n                        <input type="text"\r\n                               id="title"\r\n                               name="title"\r\n                               class="form-control"\r\n                               required\r\n                               [(ngModel)]="event.title">\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                        <label for="description">Description</label>\r\n                        <textarea type="text"\r\n                                  id="description"\r\n                                  name="description"\r\n                                  class="form-control"\r\n                                  [(ngModel)]="event.description"></textarea>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                        <label for="iconColor">Icon</label>\r\n                        <select class="form-control"\r\n                                id="iconColor"\r\n                                name="iconColor"\r\n                                [ngStyle]="{\'background\': event.iconColor}"\r\n                                [(ngModel)]="event.iconColor">\r\n                            <option *ngFor="let iconColor of iconColors"\r\n                                    [value]="iconColor"\r\n                                    [ngStyle]="{\'background\': iconColor}">\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <button type="submit" class="btn btn-default">Add</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},482:function(e,n){e.exports=".calendar-add-event{\r\n\r\n}\r\n\r\n.calendar-add-event .icon-color{\r\n    width: 20px;\r\n    height: 100%;\r\n    margin-left: 50px;\r\n}\r\n"},483:function(e,n){e.exports='<div class="calendar-events">\r\n    <div *ngIf="events.length" class="calendar-events_body">\r\n        <div class="calendar-events_header">\r\n            Events\r\n        </div>\r\n\r\n        <div *ngFor="let event of events" class="calendar-events_event row">\r\n            <div class="calendar-events_event_time col-xs-12 col-md-4">\r\n                {{event.start.format(\'hh:mm A\')}} - {{event.end.format(\'hh:mm A\')}}\r\n            </div>\r\n            <div class="calendar-events_event_title col-xs-12 col-md-8">\r\n                {{event.title}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <button (click)="addEvent()" class="calendar-events_add calendar-events_add-pc hidden-xs hidden-sm">\r\n        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" (click)="addEvent()">\r\n            <circle cx="50" cy="50" r="50"></circle>\r\n            <path stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" d="M20,50 h10,50 M50,20 v50,10" ></path>\r\n        </svg>\r\n    </button>\r\n\r\n    <button (click)="addEvent()" class="calendar-events_add calendar-events_add-mobile hidden-md hidden-lg">\r\n        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" (click)="addEvent()">\r\n            <circle cx="50" cy="50" r="50"></circle>\r\n            <path stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" d="M20,50 h10,50 M50,20 v50,10" ></path>\r\n        </svg>\r\n    </button>\r\n</div>'},484:function(e,n){e.exports=":host{\r\n    display: block;\r\n}\r\n\r\n.calendar-events{\r\n\r\n}\r\n\r\n.calendar-events .calendar-events_body{\r\n\r\n}\r\n\r\n.calendar-events .calendar-events_header{\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n}\r\n\r\n.calendar-events_event .calendar-events_event_time{\r\n    font-size: 1em;\r\n\r\n}\r\n\r\n.calendar-events_event .calendar-events_event_title{\r\n    font-size: 1em;\r\n    font-weight: bold;\r\n}\r\n\r\n.calendar-events .calendar-events_add{\r\n    -webkit-appearance: none;\r\n    background: transparent;\r\n    border: 0;\r\n    outline: 0;\r\n    cursor: pointer;\r\n    display: block;\r\n}\r\n\r\n.calendar-events .calendar-events_add.calendar-events_add-pc{\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 100%;\r\n}\r\n\r\n.calendar-events .calendar-events_add.calendar-events_add-mobile{\r\n    position: fixed;\r\n    right: 20px;\r\n    bottom: 20px;\r\n}\r\n\r\n.calendar-events svg{\r\n    width: 60px;\r\n    height: 60px;\r\n    padding: 5px;\r\n    display: block;\r\n}\r\n\r\n.calendar-events .calendar-events_add circle{\r\n    stroke-width: 0;\r\n    stroke: crimson;\r\n    fill: crimson;\r\n}\r\n\r\n.calendar-events button.calendar-events_add:hover circle{\r\n    stroke: darkmagenta;\r\n    fill: darkmagenta;\r\n    transition: all 100ms ease-in-out;\r\n}\r\n\r\n.calendar-events button.calendar-events_add:active circle {\r\n    stroke: coral;\r\n    fill: coral;\r\n    transition: all 100ms ease-in-out;\r\n}"},485:function(e,n,t){"use strict";var r=t(62);n.routes=[{path:"",component:r.Components.CalendarComponent},{path:"add",component:r.Components.CalendarAddEventComponent},{path:"add/:date",component:r.Components.CalendarAddEventComponent},{path:"**",component:r.Components.CalendarComponent}]},486:749});
//# sourceMappingURL=main.js.map