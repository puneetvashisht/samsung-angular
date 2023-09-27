import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workout } from './components/view-workouts/view-workouts.component';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  fetchAllWorkouts(){
    return this.http.get('http://localhost:8080/api/v1/workouts/')
  }

  addWorkout(workout: Workout){
    return this.http.post('http://localhost:8080/api/v1/workouts/', workout)
  }
}
