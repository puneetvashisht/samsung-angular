import { Component } from '@angular/core';
import { Employee } from '../Employee';
import {HttpClient} from '@angular/common/http'
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private employeeService :EmployeeService){

  }

  addEmployee( e: Employee){
    console.log(e);
    this.employeeService.addEmployee(e)
    .subscribe(res => console.log(res));

  }
}
