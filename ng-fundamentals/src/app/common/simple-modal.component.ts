import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";
import { $ } from 'protractor';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styles: [`
    .modal-body { height: 250px; overflow-y: scroll;}
  `]
})

export class SimpleModalComponent{
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modelContainer') containerEl: ElementRef;

  constructor(  @Inject(JQ_TOKEN) private $: any  ){  }

  closeModel(){
    this.$(this.containerEl.nativeElement).modal('hide');
  }
}
