import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent {
  event = {
    name: 'ngConf 2025',
    date: '3/1/2025',
    time: '8am',
    price: '200',
    location: {
        address: '123 Main St',
        city: 'Salt Lake City, UT',
        country: 'USA'
      }
  };
}
