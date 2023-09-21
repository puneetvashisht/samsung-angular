import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css']
})
export class DropdownItemComponent {
  @Input('text') text : string = '';
  @Output('itemClicked') itemClicked: EventEmitter<string> = new EventEmitter();

  handleClick(){
    console.log('Item is clicked ', this.text);
    this.itemClicked.emit(this.text);
  }
}
