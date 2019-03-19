import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent{
  event: IEvent;
  constructor(private _eventService: EventService, private _route: ActivatedRoute){

  }

  ngOnInit() {
    this.event = this._eventService.getEvent(+this._route.snapshot.params['id']);
  }
}
