import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html'
})

export class CreateEventComponent{
  isDirty: boolean = true;
  constructor(private _router: Router){ }

  cancel() {
    this._router.navigate(['/events']);
  }
}