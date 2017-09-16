import { Component, Output, EventEmitter } from '@angular/core';
//import { BugStorageService } from '../../services/BugStorage.service';
import { BugServerService } from '../../services/BugServer.service';

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

	constructor(private bugServer : BugServerService){

	}

	addNew(){
		this.bugServer
			.addNew(this.newBugName)
			.subscribe(newBug => this.OnNewBug.emit(newBug));
	}
}