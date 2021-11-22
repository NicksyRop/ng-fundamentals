import { Component } from '@angular/core';
import { EventsListComponent } from './events/events-list.components';

@Component({
  selector: 'events-app',
  template: '<events-list></events-list>'

  ,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
