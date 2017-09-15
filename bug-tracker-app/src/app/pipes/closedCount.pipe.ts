import { Pipe, PipeTransform } from '@angular/core';

import { IBug } from '../models/IBug';

@Pipe({
	name : 'closedCount',
	pure : true
})
export class ClosedCountPipe implements PipeTransform{
	transform(bugs : IBug[]) : number{
		/*console.log('closedCountPipe triggered');
		var closedCount = 0;
		for(let index = 0, count = bugs.length; index < count; index++)
			if (bugs[index].isClosed)
				++closedCount;
		return closedCount;*/

		return bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}