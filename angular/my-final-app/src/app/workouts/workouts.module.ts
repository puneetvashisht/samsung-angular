import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutsComponent } from './workouts.component';
import { ViewWorkoutsComponent } from './components/view-workouts/view-workouts.component';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { SharedModule } from '../../../../my-final-app/src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: WorkoutsComponent , children: [
    {path: 'view', component: ViewWorkoutsComponent},
    {path: 'add', component: AddWorkoutComponent}
  ] }
  
];

@NgModule({
  declarations: [
    WorkoutsComponent,
    AddWorkoutComponent 
    // ViewWorkoutsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WorkoutsModule { }
