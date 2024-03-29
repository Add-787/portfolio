import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  scrollToView(element: HTMLElement)
  {
    element.scrollIntoView({behavior: 'smooth'});
  }

  goToPage(navLink: string) {
    this.router.navigate([navLink], { skipLocationChange: true });
  }

}

