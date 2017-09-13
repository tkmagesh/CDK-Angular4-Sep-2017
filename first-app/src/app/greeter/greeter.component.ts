import { Component } from '@angular/core';

@Component({
	selector : 'greeter',
	template : `
		<h3>Greeter</h3>
		<hr/>
		<div>{{message}}</div>
		<label for="">Name :</label>
		<input type="text" #txtUserName />
		<input type="button" value="Greet" (click)="onGreetClick(txtUserName.value)"/>`
})
export class GreeterComponent{
	message : string = '[Default message]';

	onGreetClick(userName){
		//let userName = prompt('Enter the username :');
		this.message = `Hi ${userName}, Have a nice day!`;
	}
}