import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // @Input('dataPersonaje') personajes: Personaje [] = []
  get personajes(){
    return this.dbzService.personajes;
  }
  constructor(private dbzService:DbzService){}


}
