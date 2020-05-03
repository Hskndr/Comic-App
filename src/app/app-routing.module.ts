import {Component, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {SearchComponent} from './components/search/search.component';


const routes: Routes = [
  {path: 'search/:termino', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
