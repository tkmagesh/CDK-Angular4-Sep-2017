
import { IBug } from '../models/IBug';


export class BugOperationsService{
	createNew(id : number, bugName : string) : IBug{
		let newBug : IBug = {
			id : id,
			name : bugName,
			isClosed : false
		};
		return newBug;
	}
	toggle(bug : IBug) : IBug {
		return {...bug, isClosed : !bug.isClosed};
	}
}