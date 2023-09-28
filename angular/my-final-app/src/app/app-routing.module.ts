import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMessageComponent } from './components/add-message/add-message.component';
import { ViewMessageComponent } from './components/view-message/view-message.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ChangeDetectDemoComponent } from './components/change-detect-demo/change-detect-demo.component';

const routes: Routes = [
  {path: 'add', component : AddMessageComponent, canActivate: [AuthGuard]},
  {path: 'cd', component : ChangeDetectDemoComponent},
  {path: 'view', component : ViewMessageComponent, canActivate: [AuthGuard]},
  {path: 'login', component : LoginComponent},
  { path: 'workouts', loadChildren: () => import('./workouts/workouts.module').then(m => m.WorkoutsModule) , canActivate: [AuthGuard]},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
