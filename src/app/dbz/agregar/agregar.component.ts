import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  /* @Input('dataPersonajes') personajes: Personaje[]; */

  @Input('dataNuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {

  }

  /* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  agregar(): void {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }
    /* this.onNuevoPersonaje.emit(this.nuevo); */
    this.dbzService.agregarPersonaje(this.nuevo);
    //event.preventDefault(); Previene que se recargue la página al disparar el evento (Declarar el event: any en los parámetros de la función)
    this.nuevo = { nombre: '', poder: 0 };
  }
}
