import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'
import { OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';




@Component({
  selector: 'my-heroes',
  templateUrl: './app/heros.component.html',
  styleUrls: [`./app/heros.component.css`],
providers: [HeroService]

})
	
export class HeroesComponent {
  name = 'Tour of Heroes';
  heroes : Hero[];

  	selectedHero: Hero;

    constructor(private heroService: HeroService, private router: Router) { }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    getHeros() {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
      this.getHeros();
    }

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}


