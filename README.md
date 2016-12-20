# Simple Calendar app using Angular 2 and Moment.js.

#Functionalities
* Show weekdays, go next or previous days. Responsive design.
* Today is highlighted using 'green' border and bold day & date.
* Selected day is highlighted using 'purple' border.
* '+' button creates a new Event with label icon color, event title is a mandatory field.
* Show events in color icon in each day. If number of events is more, show number of trimmed event. i.e. '+3'
* List of events of the selected day are shown bellow in big screen or right side in small screen.
* Next nearest event of running week is shown in bellow in big screen or right in small screen.
* Nest event time is shown like 'Monday at 2:07 AM', 'Tomorrow at 2:08 AM, 'Today at 4:09 AM'
* If next event is within next hour, a countdown will shown, like '0:47:26'.
* If countdown value is less than 5 minutes, color will be changed to red.

#Live Demo: https://jonayet.github.io/calendar-angular-2

#Tech Specs
* MVC Framework: Angular 2
* Language: TypeScript
* UI Framework: Bootstrap 3
* Date Time Library: Moment.js
* Test Framework: Karma with Jasmine
* Package Manager: NPM
* Module Blunder: Webpack

#Build Instructions
* Install dependencies first       'npm install'
* Run development mode             'npm start'
* Run test suits                   'npm run test'
* Build for production             'npm run build'