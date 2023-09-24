import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './home/intro/intro.component';
import { StatsComponent } from './home/stats/stats.component';
import { AboutComponent } from './about/about.component';
import { AboutCardComponent } from './about/about-card/about-card.component';
import { SitesListComponent } from './home/sites-list/sites-list.component';
import { SiteCardComponent } from './home/sites-list/site-card/site-card.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './home/contact/contact.component';
import { StatBoxComponent } from './home/stats/stat-box/stat-box.component';
import { ContactCardComponent } from './home/contact/contact-card/contact-card.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { TimelineComponent } from './home/projects/timeline/timeline.component';
import { TimelineTileComponent } from './home/projects/timeline/timeline-tile/timeline-tile.component';



@NgModule({
  declarations: [
    HomeComponent,
    SitesListComponent,
    IntroComponent,
    StatsComponent,
    AboutComponent,
    AboutCardComponent,
    SiteCardComponent,
    TestimonialsComponent,
    ContactComponent,
    StatBoxComponent,
    ContactCardComponent,
    ProjectsComponent,
    TimelineComponent,
    TimelineTileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
