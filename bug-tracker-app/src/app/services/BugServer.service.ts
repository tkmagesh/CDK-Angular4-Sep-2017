import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './BugOperations.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BugServerService{
	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private http : Http, private bugOperations : BugOperationsService){

	}
	getAll() : Observable<IBug[]> {
		return this.http
			.get(this.baseUrl)
			.map(response => response.json())

	}
	addNew(bugName : string) : Observable<IBug> {
		let newBug : IBug = this.bugOperations.createNew(0, bugName);
		return this.http
			.post(this.baseUrl, newBug)
			.map(response => response.json());	
	}
	
	toggle(bug : IBug) : Observable<IBug> {
		let toggledBug = this.bugOperations.toggle(bug);
		return this.http
			.put(this.baseUrl + `/${bug.id}`, toggledBug)
			.map(response => response.json());
	}

	remove(bug : IBug) : Observable<void> {
		return this.http
			.delete(this.baseUrl + `/${bug.id}`)
			.map(response => response.json());
	}
}