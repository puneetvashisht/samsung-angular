import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import {HttpClient} from '@angular/common/http'
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employeeId: string = '';
  employeeForm: FormGroup = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.minLength(3)] ),
  });;

  constructor(private employeeService :EmployeeService, private route: ActivatedRoute,  private router: Router , private formBuilder: FormBuilder){
    // this.myForm = formBuilder.group({
    //     "fname" : ['Default name']
    // })
    // this.myForm = new FormGroup({
    //   fName: new FormControl(''),
    // });
  }
  ngOnInit(): void {
    const eId : string = this.route.snapshot.paramMap.get('id') || '';
    console.log('From route param ' + eId);
    this.employeeId = eId;
  }

  addEmployee( e: Employee){
    console.log(this.employeeForm.value);
    
    // console.log(e);
    // this.employeeService.addEmployee(e)
    // .subscribe(res => console.log(res));

  }
  updateEmployee( e: Employee){
    console.log(e);
    this.employeeService.updateEmployee(e , this.employeeId)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['/view'])
    });
   
  }
}
