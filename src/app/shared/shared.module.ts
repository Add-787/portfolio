import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollToDirective } from "./directives/scroll-to.directive";


@NgModule({
  declarations: [
    NavbarComponent,
    ScrollToDirective,
   ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class SharedModule { }
