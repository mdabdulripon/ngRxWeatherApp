import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class WeatherService {

	static baseURL = 'http://api.openweathermap.org/data/2.5';
	static appID = '5a4b2d457ecbef9eb2a71e480b947604';
	static iconURL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
	private _currentWeather = [];

  	constructor(public _http: HttpClient) {}
  
	getCurrentWeather(zipcode: string) {
		this._http.get(`${WeatherService.baseURL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.appID}`)
			.subscribe( data => {
				if(this._currentWeather.length > 0) {
					let index = this._currentWeather.findIndex(z => z.zip === zipcode);
					if(index === -1) {
						return this._currentWeather.push({ zip: zipcode, data: data})
					}  
				} else {
					return this._currentWeather.push({ zip: zipcode, data: data})
				}
			})
	}

	removeCurrentWeather(zipcode: string) {
		for(let i in this._currentWeather) {
			if(this._currentWeather[i].zip === zipcode) {
				this._currentWeather.splice(+i, 1)
			}
		}
	}

	getCurrentWeatherData() {
		return this._currentWeather;
	}

	getForecasts(zipcode): Observable<any> {
		return this._http.get(`${WeatherService.baseURL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.appID}`)
	}
	
	getWeatherIcon(id){
		console.log("TCL: WeatherService -> getWeatherIcon -> id", id)
		if (id >= 200 && id <= 232)
			return WeatherService.iconURL + "art_storm.png";
		else if (id >= 501 && id <= 511)
			return WeatherService.iconURL + "art_rain.png";
		else if (id === 500 || (id >= 520 && id <= 531))
			return WeatherService.iconURL + "art_light_rain.png";
		else if (id >= 600 && id <= 622)
			return WeatherService.iconURL + "art_snow.png";
		else if (id >= 801 && id <= 804)
			return WeatherService.iconURL + "art_clouds.png";
		else if (id === 741 || id === 761)
			return WeatherService.iconURL + "art_fog.png";
		else
			return WeatherService.iconURL + "art_clear.png";
	}
}
