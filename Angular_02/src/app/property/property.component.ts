import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
//properties
  nome:string = "Agora eu saquei";
  sobrenome!: string;
  batata:string = "batatinha frita 123";
  numbero11:number = 25;
  enderecoImagem:string = "https://www.guiadasemana.com.br/contentFiles/system/pictures/2015/4/291212/original/featured.jpg"
  padrao:string = "500"
  icon:string = "50"
  google:string = "https://google.com.br"
  alvo:string = "_blank"
  table_bonita:string = "table table-bordered table-striped";
  google_image:string = "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png"
  constructor() { }

  ngOnInit(): void {
  }

}
