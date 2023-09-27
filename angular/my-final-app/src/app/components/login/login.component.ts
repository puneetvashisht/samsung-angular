import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private authService : AuthService, private router: Router){

  }
  ngOnInit(): void {
    this.authService.getSubject()
    .subscribe({
      next: (v) => console.log(`Login Component: ${v}`),
    });
  }

  

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.authService.login(this.form.value)
      
    }
  }
  @Input()
  error!: string | null;

  @Output() submitEM = new EventEmitter();
}
