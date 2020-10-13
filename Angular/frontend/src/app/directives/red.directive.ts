import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // O que é esse private el?
  // ElementRef referencia ao elemento HTML
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b';
    console.log(el);
    
  }
}
