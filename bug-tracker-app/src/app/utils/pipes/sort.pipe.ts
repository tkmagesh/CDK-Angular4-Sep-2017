import { Pipe, PipeTransform } from '@angular/core';

interface IComparer{
	(item1 : any, item : any) : number
}

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	getComparer(attrName : string) : IComparer {
		return function(item1 : any, item2 : any) : number{
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}
	getDescendingComparer(comparer : IComparer) : IComparer{
		return function(item1 : any, item2 : any) : number{
			return comparer(item1, item2) * -1;
		}
	}
	transform(list : any[], attrName : string = 'name', isDescending : boolean = false) : any[]{
		let comparer = this.getComparer(attrName);
		if (isDescending){
			comparer = this.getDescendingComparer(comparer);
		}
		list.sort(comparer);
		/*for(let i = 0; i < list.length-1; i++)
			for(let j=i+1; j < list.length; j++){
				let item1 = list[i],
					item2 = list[j];
				if (comparer(item1, item2) > 0){
					[list[i], list[j]] = [list[j], list[i]];
				}
			}*/
		return list;
	}
}