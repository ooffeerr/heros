import { Injectable } from '@angular/core';

import {Hero} from './hero';
import { Http,Headers }    from '@angular/http';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class HeroService {

	constructor(private http:Http) {}

	private heroesUrl = 'http://localhost:8080/heros';  // URL to web api
  //private heroesUrl = 'localhost:8080/heros';  // URL to web api

	getHeroes(): Promise<Hero[]> {
    console.log("getHeros: " + this.heroesUrl)
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', '*');
  	return this.http.get(this.heroesUrl, this.headers)
  				.toPromise()
  				.then( response =>
              response.json() as Hero[]         
          )
          
  				.catch(this.handleError);
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

    private headers = new Headers({'Content-Type': 'application/json'});

    update(hero: Hero): Promise<Hero> {
  		const url = `${this.heroesUrl}/${hero.id}`;
  	return this.http
    	.put(url, JSON.stringify(hero), {headers: this.headers})
    	.toPromise()
    	.then(() => hero)
    	.catch(this.handleError);
	}

  create(name: String): Promise<Hero> {
    return this.http.
    post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise().then(res => res.json().data as Hero)
    .catch(this.handleError)
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }
}
