import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjetas',
  templateUrl: './heroe-tarjetas.component.html',
  styleUrls: ['./heroe-tarjetas.component.css']
})
export class HeroeTarjetasComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;
// Evento que el padre estara escuchando
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(
    private router: Router
  ) {
    // Inicializar el EventEmitter
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    // console.log(this.index);
     this.router.navigate(['/heroe',this.index]);
    // Ejemplo
    // this.heroeSeleccionado.emit(this.index);
  }
}
