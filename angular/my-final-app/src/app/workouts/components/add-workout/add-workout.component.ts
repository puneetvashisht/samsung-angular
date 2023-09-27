import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkoutService } from '../../workout.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent {
  constructor(private workoutService: WorkoutService){

  }

  myForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    cbpm: new FormControl('', [Validators.min(10)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)] ),
  });


  addWorkout(){
    console.log(this.myForm.value);
    this.workoutService.addWorkout(this.myForm.value)
    .subscribe(res => console.log(res));
    
  }

}
