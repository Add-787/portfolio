import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './home/intro/intro.component';
import { StatsComponent } from './home/stats/stats.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { AboutCardComponent } from './about/about-card/about-card.component';
import { SitesListComponent } from './home/sites-list/sites-list.component';
import { SiteCardComponent } from './home/sites-list/site-card/site-card.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './home/contact/contact.component';
import { StatBoxComponent } from './home/stats/stat-box/stat-box.component';
import { ContactCardComponent } from './home/contact/contact-card/contact-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    SitesListComponent,
    IntroComponent,
    StatsComponent,
    ProjectsComponent,
    AboutComponent,
    AboutCardComponent,
    SiteCardComponent,
    TestimonialsComponent,
    ContactComponent,
    StatBoxComponent,
    ContactCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
