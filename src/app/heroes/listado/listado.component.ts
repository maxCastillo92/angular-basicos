import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  heroes: string [] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor','Capitan America'];
  heroeBorrado:string = '';
  constructor() {

   }

  ngOnInit(): void {

  }

  public  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift();
    console.log(this.heroeBorrado)
  }
}
