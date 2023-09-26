import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

const forbiddenNameValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    // const forbidden = nameRe.test(control.value);
    console.log('In forbidden validator..');
    
    return (control.value == 'test')? {forbiddenName: {value: control.value}} : null;
    // return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent {
  // message: string = ''

  myForm: FormGroup = new FormGroup({
    message: new FormControl('', [Validators.required, Validators.minLength(3), forbiddenNameValidator()] )
   
  });

  // custom validator
  /** A hero's name can't match the given regular expression */

  constructor(public messageService: MessageService){

  }
  addMessage(){
    console.log('Adding message' , this.myForm.value.message);
    this.messageService.messages.push(this.myForm.value.message);
  }
}
