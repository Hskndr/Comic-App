import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() heroes: any[] = [];
  termino: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
  ) {
  }

  ngOnInit() {
    /*OBSERVABLE*/
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      console.log(params['termino']);/*Parametro definido en las rutas*/
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });

  }
}
