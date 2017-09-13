function add(x:number , y:number):number{
	return x + y;
}

let values : number[] = [10,20];
console.log(add(...values))

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

class Employee{
	
	constructor(public id : number, public name : string, public salary : number){
		
	}

	display(){
		console.log(`id = ${this.id} , name = ${this.name} , salary = ${this.salary}`);
	}
}

let emp = new Employee(100, 'Magesh', 10000);
emp.display();

class FullTimeEmployee extends Employee{
	constructor(public id : number, public name : string, public salary : number, public benefits : string){
		super(id, name, salary);
	}
}

let fte = new FullTimeEmployee(200, 'Suresh', 20000, 'Good Food!');
fte.display()
console.log(fte.benefits);