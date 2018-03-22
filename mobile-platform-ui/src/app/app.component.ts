import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

const { version: appVersion } = require('../../package.json')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public appVersion
	
	 constructor() {
	 	this.appVersion = appVersion
	 }

}


