import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo:string = 'Contador APP';
  public numero:number = 15;

  // suma(){
  //   this.numero+=1;
  // }
  // resta(){
  //   this.numero-=1;
  // }


  public base:number = 5;

  acumula():void{
    this.numero += this.base;
  }

  // acumula(valor:number):void{
  //   this.numero += valor;
  // }

}
