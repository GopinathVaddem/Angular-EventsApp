import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent{
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private _eventService: EventService, private _route: ActivatedRoute){

  }

  ngOnInit() {
    this.event = this._eventService.getEvent(+this._route.snapshot.params['id']);
  }

  addSession(){
    this.addMode = true;
  }

  saveNewSession(session: ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this._eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelNewSession(){
    this.addMode = false;
  }
}
