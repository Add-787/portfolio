import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {

  }

  private highlight() {
    
  }

}
