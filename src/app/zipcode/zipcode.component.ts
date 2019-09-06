import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.scss']
})
export class ZipcodeComponent implements OnInit {

    constructor(private _locationService: LocationService) { }

	ngOnInit() {
	}

	addLocation(event) {
		this._locationService.addLocation(event);
	}

}
