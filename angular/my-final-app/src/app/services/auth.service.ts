import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public subject: Subject<boolean> = new Subject<boolean>();
  public isAuthenticated: boolean = false;

  getSubject(){
    return this.subject;
  }

  constructor(private http: HttpClient, private router: Router) { }

  login(user: any){
    return this.http.post('http://localhost:8321/auth/login', user)
    .subscribe((res:any)=> {
      console.log(res);
      
      if(res.token){
        this.subject.next(true);
        this.isAuthenticated =  true;
        this.router.navigate(['/workouts/view'])
      }
      else{
        // show error message
      }
    })
  }

 
}
