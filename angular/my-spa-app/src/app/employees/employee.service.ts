import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './Employee';

const baseUrl: string = 'http://localhost:3000/employees/'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   // all http-communication
   constructor(private http: HttpClient) { }
   
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(baseUrl + id)
  }


  fetchEmployees() : Observable<any>{
    return this.http.get(baseUrl);
  }

  addEmployee(e: Employee) :  Observable<any>{
    return this.http.post(baseUrl, e)
  }
}
