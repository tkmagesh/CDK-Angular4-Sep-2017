import { Component } from '@angular/core';

@Component({
	selector : 'list',
	template : `
		<ol>
			<li *ngFor="let product of products">
				{{product}}
			</li>
		</ol>
	`
})
export class ListComponent{
	products : string[] = [ 'Pen', 'Pencil', 'Marker'];
}