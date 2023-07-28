import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './home/intro/intro.component';
import { StatsComponent } from './home/stats/stats.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { AboutCardComponent } from './about/about-card/about-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    StatsComponent,
    ProjectsComponent,
    AboutComponent,
    AboutCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
