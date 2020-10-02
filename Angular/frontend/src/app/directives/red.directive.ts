import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // O que é esse private el?
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b';
  }
}
