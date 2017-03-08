import { Injectable } from '@angular/core';

import {Hero} from './hero';
import {HEROS} from './mock-heros';


@Injectable()
export class HeroService {
	 getHeroes(): Promise<Hero[]> {
  		return Promise.resolve(HEROS);
	}

	getHero(id: number): Promise<Hero> {
		return this.getHeroes().then(heros => heros.find(hero=>hero.id === id));
	}
}