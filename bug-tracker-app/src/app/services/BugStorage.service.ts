import {IBug} from '../models/IBug';
import {BugOperationsService} from './BugOperations.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BugStorageService{
	private storage : Storage = window.localStorage;
	private currentBugId = 0;

	constructor(private bugOpertations : BugOperationsService){

	}
	getAll() : IBug[] {
		let result : IBug[] = [];
		for(let index=0; index < this.storage.length; index++){
			let rawData = this.storage.getItem(this.storage.key(index));
			let bug = JSON.parse(rawData);
			this.currentBugId = this.currentBugId < bug.id ? bug.id : this.currentBugId;
			result.push(bug);
		}
		return result;
	}

	addNew(bugName : string) : IBug {
		let newBug : IBug = this.bugOpertations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}
	private save(bug : IBug){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	toggle(bug : IBug) : IBug {
		let toggledBug = this.bugOpertations.toggle(bug);
		this.save(toggledBug);
		return toggledBug;
	}
	remove(bug : IBug) : void {
		this.storage.removeItem(bug.id.toString());
	}
}