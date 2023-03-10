import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './home/intro/intro.component';
import { StatsComponent } from './home/stats/stats.component';



@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    StatsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
