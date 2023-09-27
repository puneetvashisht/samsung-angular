import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
// import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [MessageService]
})
export class AppComponent implements OnInit {

  isAuthenticated: boolean  = false;

  constructor(private authService : AuthService){

  }
  ngOnInit(): void {
    this.authService.getSubject()
    .subscribe({
      next: (v) =>  {
        console.log(`Navigation Component: ${v}`)
        this.isAuthenticated = true;
      }
    });
  }
  title = 'my-final-app';
}
