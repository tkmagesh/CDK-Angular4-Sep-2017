import { Component, Input } from '@angular/core';

@Component({
	selector : 'calculator-result',
	template : `
		<div 
			[ngClass]="{ positive : data >= 0, 
						negative : data < 0}" 
			id="divResult">
				{{data | currency:'INR'}}
		</div>`
})
export class CalculatorResultComponent{

	@Input()
	data : number = 0;
}