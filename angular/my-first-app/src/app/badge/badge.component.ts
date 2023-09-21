import {Input, Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
    @Input('caption')caption: string = 'Default'
    @Input('count') count : number = 0;

    incrementCount(){
      this.count = this.count + 1;
    }
}
