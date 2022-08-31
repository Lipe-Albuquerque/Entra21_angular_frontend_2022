import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-for',
  templateUrl: './diretiva-for.component.html',
  styleUrls: ['./diretiva-for.component.css']
})
export class DiretivaForComponent implements OnInit {
alunos:Array<string> = new Array();
nome!:string;
  constructor(
    private router:Router;
  ) { }

  ngOnInit(): void {

  }

  deletar(count:number){
    return this.alunos.splice(count,1)
  }

  add(){
    if(this.nome){
       this.alunos.push(this.nome)
       this.nome = ""
    }
  }

  enviarLista(){
    let lista:any = [
      "Filipe",
      "Ariana"
    ]
    this.router.navigate(["diretivaFor", lista])
  }

}
