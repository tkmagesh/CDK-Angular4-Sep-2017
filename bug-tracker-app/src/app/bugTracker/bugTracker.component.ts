import { Component } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugStorageService } from '../services/BugStorage.service';
import { BugServerService } from '../services/BugServer.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	

	constructor(private bugStorage : BugStorageService, private bugServer : BugServerService){
		this.bugServer
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}

	newBugCreated(bug : IBug){
		this.bugs = [...this.bugs, bug];
	}
	
	toggle(bugToToggle : IBug){
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ?  toggledBug : bug));
		
	}
	removeClosed(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(bug => this.bugServer.remove(bug).subscribe( _ => {}));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}