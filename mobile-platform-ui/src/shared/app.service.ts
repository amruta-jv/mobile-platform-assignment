import { Injectable } from '@angular/core';


export class AppGlobals {
    [key: string]: any;
}

@Injectable()
export class AppService {
	sharedVariables: AppGlobals = {};

	/**
	* Updates 'AppGlobals' object with given key, value.
	* @param {string} Key Field name.
	* @param {string} value Field value.
   */
	updateAppGlobals(key: string, value: string) {
		this.sharedVariables[key] = value; 
	}

	/**
   	* Returns AppGlobals interface.
   	* @return {AppGlobals} The Party interface.
   	*/
	getAppGlobals(): AppGlobals {
		return this.sharedVariables;
	}

	/**
	* Deletes AppGlobals interface data.
	*/
	deleteAppGlobals() {
		this.sharedVariables = {}; 
	}

}