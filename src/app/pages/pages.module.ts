import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './home/intro/intro.component';
import { StatsComponent } from './home/stats/stats.component';
import { SitesListComponent } from './home/sites-list/sites-list.component';
import { SiteCardComponent } from './home/sites-list/site-card/site-card.component';
import { ContactComponent } from './home/contact/contact.component';
import { StatBoxComponent } from './home/stats/stat-box/stat-box.component';
import { ContactCardComponent } from './home/contact/contact-card/contact-card.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { TimelineComponent } from './home/projects/timeline/timeline.component';
import { TimelineTileComponent } from './home/projects/timeline/timeline-tile/timeline-tile.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { TestimonialsGridComponent } from './home/testimonials/testimonials-grid/testimonials-grid.component';
import { TestimonialsTileComponent } from './home/testimonials/testimonials-grid/testimonials-tile/testimonials-tile.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { AboutGridComponent } from './home/about-me/about-grid/about-grid.component';
import { AboutSidemenuComponent } from './home/about-me/about-grid/about-sidemenu/about-sidemenu.component';
import { IconBoxComponent } from './home/about-me/about-grid/icon-box/icon-box.component';



@NgModule({
  declarations: [
    HomeComponent,
    SitesListComponent,
    IntroComponent,
    StatsComponent,
    SiteCardComponent,
    ContactComponent,
    StatBoxComponent,
    ContactCardComponent,
    ProjectsComponent,
    TimelineComponent,
    TimelineTileComponent,
    TestimonialsComponent,
    TestimonialsGridComponent,
    TestimonialsTileComponent,
    AboutMeComponent,
    AboutGridComponent,
    AboutSidemenuComponent,
    IconBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
