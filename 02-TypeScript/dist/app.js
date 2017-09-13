var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function add(x, y) {
    return x + y;
}
var values = [10, 20];
console.log(add.apply(void 0, values));
/*class Employee{
    id : number;
    name : string;
    salary : number;

    constructor(id : number, name : string, salary : number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    display(){
        console.log(this.id, this.name, this.salary);
    }
}*/
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.display = function () {
        console.log("id = " + this.id + " , name = " + this.name + " , salary = " + this.salary);
    };
    return Employee;
}());
var emp = new Employee(100, 'Magesh', 10000);
emp.display();
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(id, name, salary, benefits) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.id = id;
        _this.name = name;
        _this.salary = salary;
        _this.benefits = benefits;
        return _this;
    }
    return FullTimeEmployee;
}(Employee));
var fte = new FullTimeEmployee(200, 'Suresh', 20000, 'Good Food!');
fte.display();
console.log(fte.benefits);
