import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service';

@Injectable({
  	providedIn: 'root'
})
export class LocationService {

  locations: string[] = [];
	
	constructor(private _http: HttpClient, private _weatherService: WeatherService) {}

	addLocation(zipcode: string) {
		this.locations.push(zipcode);
		this._weatherService.getCurrentWeather(zipcode);
	}

	removeLocation(zipcode: string) {
		let index = this.locations.indexOf(zipcode);
		if(index !== -1) {
			this.locations.splice(index, 1);
			this._weatherService.removeCurrentWeather(zipcode);
		}
	}

	getLocation(): string[] {
		return this.locations;
	}
}
