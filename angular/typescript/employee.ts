class Employee {
    // id: number = 0
    // name: string = ""
    // salary: number = 0
    constructor(public id: number, public name: string, public salary: number){

    }

    incrementSalary(): void{
        this.salary += 5000
    }
}

let e: Employee = new Employee(34, 'Ravi', 33333.33);
// e.id = 34
// e.name = 'Raiv'
// e.salary = 34343.34

console.log(e);
