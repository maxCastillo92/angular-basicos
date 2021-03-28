import { Injectable } from "@angular/core";
import { Personaje } from "../interface/dbz.interface";

@Injectable()


export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'GOKU',
      poder: 15000
    },
    {
      nombre: 'VEGETA',
      poder: 14000
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  constructor(){

  }
  agregarPersonaje( personaje: Personaje){
    this._personajes.push(personaje);
  }
}
