import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-conditions',
  templateUrl: './weather-conditions.component.html',
  styleUrls: ['./weather-conditions.component.scss']
})
export class WeatherConditionsComponent {

  	currentWeatherData: (zipcode: string) => void;
  
	constructor(
		private _router: Router,
		public locationService: LocationService,
		public weatherService: WeatherService
	) { }

	getCurrentConditions() {
		return this.weatherService.getCurrentWeatherData();
	}
}
