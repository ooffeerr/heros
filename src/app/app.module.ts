import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router'
import { AppRoutingModule } from './app-rounting.module'
import { HttpModule }    from '@angular/http';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heros.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService),AppRoutingModule],
  declarations: [ AppComponent,DashboardComponent, HeroesComponent, HeroDetailComponent ],

  providers:	[ HeroService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
