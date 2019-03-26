import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent{
  newEvent;
  isDirty: boolean = true;

  constructor(private _router: Router, private eventService: EventService){ }

  cancel() {
    this._router.navigate(['/events']);
  }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this._router.navigate(['/events']);
  }
}
