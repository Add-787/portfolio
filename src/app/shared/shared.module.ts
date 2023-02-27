import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    NavbarComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
