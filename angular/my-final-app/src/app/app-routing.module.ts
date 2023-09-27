import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMessageComponent } from './components/add-message/add-message.component';
import { ViewMessageComponent } from './components/view-message/view-message.component';

const routes: Routes = [
  {path: 'add', component : AddMessageComponent},
  {path: 'view', component : ViewMessageComponent},
  { path: 'workouts', loadChildren: () => import('./workouts/workouts.module').then(m => m.WorkoutsModule) },
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
