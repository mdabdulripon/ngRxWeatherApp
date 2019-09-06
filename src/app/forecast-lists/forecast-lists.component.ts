import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast-lists',
  templateUrl: './forecast-lists.component.html',
  styleUrls: ['./forecast-lists.component.scss']
})
export class ForecastListsComponent implements OnInit {
	zipcode: string;
	forecast: any[] = [];

	constructor(
		private _activatedRoute: ActivatedRoute, 
		private _router: Router,
		private _weatherService: WeatherService
	) { }

	ngOnInit() {
		this._activatedRoute.params
		.subscribe(res => {
			this.zipcode = res.zipcode;
			this._weatherService.getForecasts(this.zipcode).subscribe( data => {
				this.forecast = data;
				console.log("TCL: ForecastsListComponent -> ngOnInit ->  this.forecast",  this.forecast);
			});
		});
	}

}
