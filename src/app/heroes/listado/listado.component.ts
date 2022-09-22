import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})

export class ListadoComponent {

  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeEliminado:string = '';

  borrarHeroe(){
    console.log('Borrando...');
    this.heroeEliminado = this.heroes[0];
    this.heroes.shift();
    // this.heroeEliminado = this.heroes.shift() || '';
  }

  // constructor() { 
  //   console.log('constructor');
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

}
