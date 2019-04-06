import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private _eventService: EventService,
     private route: ActivatedRoute) {  }

  ngOnInit(){
    this.events = this.route.snapshot.data['events'];
  }
}
