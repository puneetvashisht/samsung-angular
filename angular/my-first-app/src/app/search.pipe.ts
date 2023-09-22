import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './pipes-demo/Employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: Array<Employee>, name: string): unknown {
    console.log('In pipe', employees);
    console.log(name);

    let filteredEmployees = employees.filter((e)=> e.name == name)
    
    return filteredEmployees;
  }

}
