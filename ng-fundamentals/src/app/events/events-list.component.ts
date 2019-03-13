import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr;

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private _eventService: EventService, private _toastr: ToastrService) {  }

  ngOnInit(){
    this.events = this._eventService.getEvents();
  }

  handleThumbnailClick(eventName){
    this._toastr.success(eventName);
  }
}
