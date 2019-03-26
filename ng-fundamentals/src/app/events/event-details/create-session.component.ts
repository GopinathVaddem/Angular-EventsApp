import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, restrictedWords } from '../shared';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})

export class CreateSessionComponent implements OnInit{

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelNewSession = new EventEmitter();

  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  newSessionForm: FormGroup;

  ngOnInit(){
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValue){
    let session: ISession = {
      id: undefined,
      name: formValue.name,
      duration: formValue.duration,
      level: formValue.level,
      presenter: formValue.presenter,
      abstract: formValue.abstract,
      voters: []
    };

    this.saveNewSession.emit(session);
  }

  cancel(){
    this.cancelNewSession.emit();
  }
}
