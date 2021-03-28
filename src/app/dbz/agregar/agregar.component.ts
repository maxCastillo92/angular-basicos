import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  constructor(private dbzService:DbzService){}
  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }


  public agregar( ): void {
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {

      nombre:'',
      poder: 0
    }
  }
}
