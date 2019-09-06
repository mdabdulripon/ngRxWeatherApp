import { Component, OnInit } from "@angular/core";
import { Subject } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
	selector: "app-loader",
	templateUrl: "./loader.component.html",
	styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent {
	color: 'Primary';
	mode: 'Indeterminate';
	value: 50;
	isLoading$: Subject<boolean>;
	
	constructor(private _loaderService: LoaderService) {
		this.isLoading$ = this._loaderService.loaderSub$;
	}
}
