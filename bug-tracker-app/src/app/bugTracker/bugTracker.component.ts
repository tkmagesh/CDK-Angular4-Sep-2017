import { Component } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from '../services/BugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	newBugName : string = '';

	constructor(private bugOperations : BugOperationsService){
		
	}

	addNew(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		this.bugs = [...this.bugs, newBug];
	}
	toggle(bugToToggle : IBug){
		this.bugs = this.bugs.map(bug => bug === bugToToggle ?  this.bugOperations.toggle(bugToToggle) : bug);
	}
	removeClosed(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}