import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../workout.service';
import { MatTableModule } from '@angular/material/table';


export interface Category {
  id: number,
  title: string
}

export interface Workout {
  id?: number;
  title: string;
  cbpm: number;
  description: string;
  port? :string | null
  category?: Category
}

// const ELEMENT_DATA

@Component({
  selector: 'app-view-workouts',
  templateUrl: './view-workouts.component.html',
  styleUrls: ['./view-workouts.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class ViewWorkoutsComponent implements OnInit{

  displayedColumns: string[] = ['id', 'title', 'cbpm', 'description'];
  workouts : Workout[] = [
    {
        "id": 4,
        "title": "Running",
        "cbpm": 34,
        "description": "run for health",
        "port": null,
        "category": {
            "id": 5,
            "title": "Cardio"
        }
    },
    {
        "id": 8,
        "title": "Swimming",
        "cbpm": 8,
        "description": "Good for health",
        "port": null,
        "category": {
            "id": 9,
            "title": "Cardio"
        }
    }
]

  constructor(private workoutService: WorkoutService){

  }

  ngOnInit(): void {
    this.workoutService.fetchAllWorkouts()
    .subscribe((data: any) => {
      console.log(data);
      this.workouts =data
      
    });
    
  }

}


