import { Injectable } from '@angular/core';
import { Stat } from './models/stats.model';
import { Site } from './models/sites.model';

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
      "./assets/placeholder.png",
      "Github",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "https://github.com/Add-787"
      ),
      new Site
      (
      "./assets/placeholder.png",
      "LinkedIn",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "https://linkedin.com/in/adarsh-shetty-81844b190"
      ),
      new Site
      (
      "./assets/placeholder.png",
      "Substack",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "https://substack.com/@barackodrama?utm_source=edit-profile-page"
      ),
    ]
  }
}

