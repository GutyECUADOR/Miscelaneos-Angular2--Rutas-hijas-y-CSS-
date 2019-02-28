import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private idParent: number;

  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( parametros => {
      console.log(parametros);
    });
  }

  ngOnInit() {
  }

}
