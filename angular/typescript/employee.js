var Employee = /** @class */ (function () {
    // id: number = 0
    // name: string = ""
    // salary: number = 0
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.incrementSalary = function () {
        this.salary += 5000;
    };
    return Employee;
}());
var e = new Employee(34, 'Ravi', 33333.33);
// e.id = 34
// e.name = 'Raiv'
// e.salary = 34343.34
console.log(e);
