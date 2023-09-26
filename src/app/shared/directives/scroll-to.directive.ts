import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {

  @Input() target = 'home';

  @HostListener('click')
  onClick() {
    console.log(this.target);
    const navHeight = 64;

    window.scrollTo({
      behavior: 'smooth',
      top:
        document.querySelector(this.target)!.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        navHeight
    })
  }

  constructor() { }

}
