import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class LoaderService {
	  
	public loaderSub$ = new Subject<boolean>();

	show() {
		this.loaderSub$.next(true);
	}

	hide() {
		this.loaderSub$.next(false);
	}
}
