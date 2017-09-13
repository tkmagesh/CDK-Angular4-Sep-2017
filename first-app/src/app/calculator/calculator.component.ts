import { Component } from '@angular/core';
import { Calculator } from './Calculator';

@Component({
	selector : 'calculator',
	templateUrl : 'calculator.component.html'
})
export class CalculatorComponent{
	number1 : number = 0;
	number2 : number = 0;

	result : number = 0;

	calculator : Calculator = new Calculator();

	onAddClick(){
		this.result = this.calculator.add(this.number1, this.number2);
	}
	onSubtractClick(){
		this.result = this.calculator.subtract(this.number1, this.number2);
	}
}