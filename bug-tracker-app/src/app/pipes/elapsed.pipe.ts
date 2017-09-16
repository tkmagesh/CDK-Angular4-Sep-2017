//Install moment -> npm install moment --save

import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name : 'elapsed'
})
export class ElapsedPipe implements PipeTransform{
	transform(data : string) : string{
		return moment(new Date(data)).fromNow();
	}
}