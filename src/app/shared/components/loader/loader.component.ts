import { Component, Input} from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() width: number;
  @Input() height: number;
  @Input() borderColor: string;
  @Input() borderWidth: number;

  constructor() {
    this.width = 18;
    this.height = 18;
    this.borderColor = '#9aa4b7';
    this.borderWidth = 2;
  }
}
