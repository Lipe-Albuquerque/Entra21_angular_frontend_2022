import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  resultado!:number
  tamanho:number = 500


  minhaFunc(){
    alert("Cade meu pai ?")
  }

  somar(a:number, b:number){
    this.resultado = a+b
  }

  dividir(a:number, b:number){
    this.resultado = a/b
  }

  multiplicar(a:number, b:number){
    this.resultado = a*b
  }

  subtrair(a:number, b:number){
    this.resultado = a-b
  }
  constructor() { }

  ngOnInit(): void {
  }

  aumentar(){
    this.tamanho -=5;
  }


}
