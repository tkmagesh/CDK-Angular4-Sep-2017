import { Component, Output, EventEmitter } from '@angular/core';
import { BugStorageService } from '../../services/BugStorage.service';
import { IBug } from '../../models/IBug';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create New" (click)="addNew()">
		</section>
	`
})
export class BugEditComponent{
	newBugName : string = '';	

	@Output()
	OnNewBug : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugStorage : BugStorageService){

	}

	addNew(){
		let newBug = this.bugStorage.addNew(this.newBugName);
		//this.bugs = [...this.bugs, newBug];
		this.OnNewBug.emit(newBug);
	}
}