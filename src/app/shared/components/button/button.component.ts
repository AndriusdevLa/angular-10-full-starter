import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
// @TODO Refactor me to material button
export class ButtonComponent {
  @Input() cType: string;
  @Input() classes: string;
  @Input() loading = false;
  @Input() disabled = false;
  @Output() clickEvent: EventEmitter<Event>;

  constructor() {
    this.clickEvent = new EventEmitter<Event>();
  }

  click() {
    this.clickEvent.emit();
  }
}
