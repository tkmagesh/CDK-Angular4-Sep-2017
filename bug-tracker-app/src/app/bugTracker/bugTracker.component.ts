import { Component } from '@angular/core';
import { IBug } from '../models/IBug';



@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	newBugName : string = '';

	constructor(){
		this.addNew('Server communication failure');
		this.addNew('Data validation error');
		this.addNew('User actions not recognized');
		this.addNew('Application not responding');

		this.toggle(this.bugs[0]);
	}

	addNew(bugName){
		let newBugName = bugName || this.newBugName;
		let newBug : IBug = {
			name : newBugName,
			isClosed : false
		}
		this.bugs = [...this.bugs, newBug];
	}
	toggle(bugToToggle : IBug){
		/*
		let result : IBug[] = [];
		for(let index=0; index < this.bugs.length; index++){
			if (this.bugs[index] === bugToToggle){
				let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
				result.push(toggledBug);
			} else {
				result.push(this.bugs[index]);
			}
		}
		this.bugs = result;
		*/
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? {...bugToToggle, isClosed : !bugToToggle.isClosed} : bug);
	}
	removeClosed(){
		/*
		for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}
		*/

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
	/*getClosedCount(){
		console.log('getClosedCount triggered');
		var closedCount = 0;
		for(let index = 0, count = this.bugs.length; index < count; index++)
			if (this.bugs[index].isClosed)
				++closedCount;
		return closedCount;
	}*/
}