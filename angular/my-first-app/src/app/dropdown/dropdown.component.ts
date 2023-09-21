import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  courses: Array<string> = ['Angular', 'NodeJS', 'EmberJS', 'VueJS'];
  show : boolean = false;
  caption : string = 'Select Course'

  handleItemClicked(item: string){
    console.log('in the parent component..' , item)
    this.caption = item
    this.show = false
  }
  toggleShow(){
    this.show = !this.show
  }

}
