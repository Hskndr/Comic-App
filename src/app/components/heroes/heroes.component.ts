import {Component, OnInit} from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import {retry} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(
    /*DECLARACION DEL SERVICIO*/
    private _heroesService: HeroesService,
    /*Declarar el router para redireccionar*/
    private router: Router
  ) {
    console.log('constructor');
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log('ngOnInit');
  }

  verHeroe(idx: number) {
    /*Redireccionar*/
    this.router.navigate(['/heroe', idx]);
    console.log(idx);
  }
}

