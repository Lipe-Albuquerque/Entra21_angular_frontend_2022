import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receber-dados',
  templateUrl: './receber-dados.component.html',
  styleUrls: ['./receber-dados.component.css']
})
export class ReceberDadosComponent implements OnInit {
dado1!:string;
dado2!:number;
dado3!:string;

  constructor(
    private rout:ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("Recebi", this.rout.snapshot.paramMap);

  }

}
