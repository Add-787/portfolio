import { Component, OnInit } from '@angular/core';
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

  isActive: boolean = false;

  ngOnInit(): void {

  }

  goToPage(navLink: string) {
    this.router.navigate([navLink], { skipLocationChange: true });
  }

}

enum NavLink {
  
}
