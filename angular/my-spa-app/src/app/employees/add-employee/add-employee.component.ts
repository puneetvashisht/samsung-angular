import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import {HttpClient} from '@angular/common/http'
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employeeId: string = '';
  show = false;
  message: string  = ''

  close() {
		this.show = false;
		setTimeout(() => (this.show = true), 3000);
	}

  genders: Array<string>= ['Male', 'Female']

  employeeForm: FormGroup = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    lName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    gender: new FormControl('Male'),
    salary: new FormControl('', [Validators.min(1000)])
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

    if(this.employeeId){
      // make get request
      this.employeeService.fetchEmployee(this.employeeId)
      .subscribe(res => {
        console.log(res);
        this.employeeForm.get('fName')?.setValue(res.fName);
        this.employeeForm.get('lName')?.setValue(res.lName);
        this.employeeForm.get('gender')?.setValue(res.gender);
        this.employeeForm.get('email')?.setValue(res.email);
        this.employeeForm.get('salary')?.setValue(res.salary);
      })
    }
  }

  addEmployee(){
    console.log(this.employeeForm.value);
    
    // console.log(e);

    let e :Employee = this.employeeForm.value;
    e.name = this.employeeForm.value.fName;
    e.last_name = this.employeeForm.value.lName

    console.log('Validted employee ', e);
    

    this.employeeService.addEmployee(e)
    .subscribe(res => {
      console.log(res);
      this.show = true;
      this.message = 'Successfully created employee !'
    });

  }
  updateEmployee(){
    let e :Employee = this.employeeForm.value;
    e.name = this.employeeForm.value.fName;
    e.last_name = this.employeeForm.value.lName
    console.log(e);
    this.employeeService.updateEmployee(e , this.employeeId)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['/view'])
    });
   
  }
}
