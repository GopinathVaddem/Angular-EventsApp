import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html'
})

export class UpvoteComponent {
  iconColor: string;
  @Input() count: number;
  @Input() set voted (val) {
    this.iconColor = val ? "red" : "white";
  }
  @Output() vote = new EventEmitter();

  onClick() {
    this.vote.emit({});
  }
}
