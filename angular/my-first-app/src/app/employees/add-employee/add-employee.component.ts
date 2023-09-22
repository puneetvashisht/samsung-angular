import { Component } from '@angular/core';
import { Employee } from 'src/app/pipes-demo/Employee';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private http: HttpClient){

  }

  addEmployee( e: Employee){
    console.log(e);

    this.http.post('http://localhost:3000/employees', e)
    .subscribe(res => console.log(res));

  }
}
