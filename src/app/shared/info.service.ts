import { Project } from './models/projects.model';
import { Injectable } from '@angular/core';
import { Stat } from './models/stats.model';
import { Site } from './models/sites.model';
import { Quote } from './models/quotes.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  getStats() : Stat[] {
    return [
      new Stat("Websites",3),
      new Stat("Mobile Apps",3),
      new Stat("Articles", 1),
      new Stat("Lighthouse",97)
    ]
  }

  getSites() : Site[] {
    return [
      new Site
      (
      "./assets/github_logo.png",
      "Github",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "https://github.com/Add-787"
      ),
      new Site
      (
      "./assets/linkedin_logo.png",
      "LinkedIn",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "https://linkedin.com/in/adarsh-shetty-81844b190"
      ),
      new Site
      (
      "./assets/substack_logo.png",
      "Substack",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "https://substack.com/@barackodrama?utm_source=edit-profile-page"
      ),
    ]
  }

  getQuotes() : Quote[] {
    return [
      new Quote
      (
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        "Adarsh Shetty",
        "Friend"
      ),
      new Quote
      (
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        "Adarsh Shetty",
        "Friend"
      ),
      new Quote
      (
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        "Adarsh Shetty",
        "Friend"
      ),
      new Quote
      (
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        "Adarsh Shetty",
        "Friend"
      ),
      new Quote
      (
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        "Adarsh Shetty",
        "Friend"
      )
    ]
  }

  getProjects() : Project[] {
    return [
      new Project(
        "Sept 2022",
        "Joined Tismo",
        "rocket",
        [
          "Lorem ipsum dolor sit amet iywfcl fire",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf"
        ]
      ),
      new Project(
        "Sept 2022",
        "Joined Tismo",
        "tick",
        [
          "Lorem ipsum dolor sit amet iywfcl fire",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf"
        ]
      ),
      new Project(
        "Sept 2022",
        "Joined Tismo",
        "tick",
        [
          "Lorem ipsum dolor sit amet iywfcl fire",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf"
        ]
      ),
      new Project(
        "Sept 2022",
        "Joined Tismo",
        "tick",
        [
          "Lorem ipsum dolor sit amet iywfcl fire",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf"
        ]
      ),
      new Project(
        "Sept 2022",
        "Joined Tismo",
        "thumbsup",
        [
          "Lorem ipsum dolor sit amet iywfcl fire",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf",
          "Lorem ipsum dolor cgf"
        ]
      ),

    ]
  }
}

