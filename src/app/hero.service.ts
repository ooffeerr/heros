import { Injectable } from '@angular/core';

import {Hero} from './hero';
import { Http }    from '@angular/http';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class HeroService {

	constructor(private http:Http) {}

	private heroesUrl = 'api/heroes';  // URL to web api

	getHeroes(): Promise<Hero[]> {
  		return this.http.get(this.heroesUrl)
  				.toPromise()
  				.then(response => response.json().data as Hero[])
  				.catch(this.handleError);
  		//Promise.resolve(HEROS);
	}

	private handleError(error: any): Promise<any> {
   	 	console.error('An error occurred', error); // for demo purposes only
    	return Promise.reject(error.message || error);
  	}

	getHero(id: number): Promise<Hero> {
  	const url = `${this.heroesUrl}/${id}`;
 	 return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
}
}