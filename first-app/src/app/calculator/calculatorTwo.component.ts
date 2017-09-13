import { Component } from '@angular/core';
import { Calculator } from './Calculator';

@Component({
	selector : 'calculator-two',
	templateUrl : 'calculatorTwo.component.html'
})
export class CalculatorTwoComponent{
	number1 : number = 0;
	number2 : number = 0;
	operator : string = 'add';
	result : number = 0;

	calculator : Calculator = new Calculator();

	onCalculateClick(){
		this.result = this.calculator[this.operator](this.number1, this.number2);
	}
}