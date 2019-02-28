import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) { // ElementRef hace referencia al elemento que implementa la directiva
    console.log('directiva llamada' + this.nuevoColor);
   }

  // tslint:disable-next-line:no-input-rename
  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseover') onMouseEnter() { // Hostlistener permite capturar cualquier evento del elemento
    this.resaltar(this.nuevoColor);
   }

  @HostListener('mouseleave') onMouseExit() {
    this.resaltar();
  }

  private resaltar(color: string = 'yellow') {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
