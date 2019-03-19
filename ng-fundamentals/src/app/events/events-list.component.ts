import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

 declare let toastr;

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private _eventService: EventService, private _toastr: ToastrService, private route: ActivatedRoute) {  }

  ngOnInit(){
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName){
    this._toastr.success(eventName);
  }
}
