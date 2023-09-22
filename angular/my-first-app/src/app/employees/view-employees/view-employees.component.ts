import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from 'src/app/pipes-demo/Employee';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit{

  employees: Array<Employee> = []
  ngOnInit(): void {
    this.http.get('http://localhost:3000/employees')
    .subscribe((res:any) => {
      console.log(res);
      
      this.employees = res;
    })
  }

  constructor(private http : HttpClient){

  }

}
