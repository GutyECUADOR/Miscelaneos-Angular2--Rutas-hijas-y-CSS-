import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tamanoFuente + 'px'}"> Hola este es un parrafo cualquiera</p>
    <button class="btn btn-primary" (click)="moreSize()"><i class="fa fa-plus"></i></button>
    <button class="btn btn-secondary" (click)="lessSize()"><i class="fa fa-minus"></i></button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  constructor() { }
  public tamanoFuente: number;

  ngOnInit() {
    this.tamanoFuente = 15;
  }

  public moreSize() {
    if (this.tamanoFuente <= 40) {
      this.tamanoFuente += 5;
    }
  }

  public lessSize() {
    if (this.tamanoFuente >= 15) {
      this.tamanoFuente -= 5;
    }
  }

}
