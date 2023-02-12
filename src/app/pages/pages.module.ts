import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './home/intro/intro.component';



@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
