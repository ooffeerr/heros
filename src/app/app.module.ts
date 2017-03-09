import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router'
import { AppRoutingModule } from './app-rounting.module'


import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heros.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent,DashboardComponent, HeroesComponent, HeroDetailComponent ],

  providers:	[ HeroService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
