import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input('dataPersonajes') personajes: Personaje[];
  @Input('dataNuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar(): void {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }
    console.log(this.nuevo);

    //event.preventDefault(); Previene que se recargue la página al disparar el evento (Declarar el event: any en los parámetros de la función)
    this.personajes.push(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }
}
