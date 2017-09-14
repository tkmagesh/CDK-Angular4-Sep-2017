import { Component } from '@angular/core';
import { IBug } from '../models/IBug';



@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	addNew(bugName : string){
		let newBug : IBug = {
			name : bugName,
			isClosed : false
		}
		this.bugs.push(newBug);
	}
	toggle(bug : IBug){
		bug.isClosed = !bug.isClosed;
	}
	removeClosed(){
		for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}
	}
	getClosedCount(){
		var closedCount = 0;
		for(let index = 0, count = this.bugs.length; index < count; index++)
			if (this.bugs[index].isClosed)
				++closedCount;
		return closedCount;
	}
}