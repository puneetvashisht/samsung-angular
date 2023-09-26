import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit{
  show = false;
  message: string  = ''

  close() {
		this.show = false;
		setTimeout(() => (this.show = true), 3000);
	}
  employees: Array<Employee> = []
  ngOnInit(): void {
    this.employeeService.fetchEmployees()
    .subscribe((res:any) => {
      console.log(res);
      
      this.employees = res;
    })
  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id)
    .subscribe(res=>{
      console.log(res);
      this.show = true;
      this.message = 'Employee Deleted !' 
    })
  }
  constructor(private employeeService: EmployeeService){

  }

}
