import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent implements OnInit {

  private idParent: number;

  constructor(public activatedRoute: ActivatedRoute) {
    // Capturar los parametros del padre con ¨.patent¨
    this.activatedRoute.parent.params.subscribe(parametros => {
      this.idParent = parametros['id'];
      console.log(parametros);
      console.log('parametro recibido por el padre:' + this.idParent);
    });
  }

  ngOnInit() {
  }

}
