import { Component } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugStorageService } from '../services/BugStorage.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	

	constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}

	newBugCreated(bug : IBug){
		this.bugs = [...this.bugs, bug];
	}
	
	toggle(bugToToggle : IBug){
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ?  toggledBug : bug);
	}
	removeClosed(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(bug => this.bugStorage.remove(bug));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}