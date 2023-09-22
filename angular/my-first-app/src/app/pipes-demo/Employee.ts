// export class Employee{
//     constructor(public id: number, public name: string, public last_name: string, public email  : string, public gender: string, public salary: string){

//     }
// }

export interface Employee {
    id?: number, 
    name: string, 
    last_name: string, 
    email: string, 
    gender: string, 
    salary?: string
}