import { Project } from './models/projects.model';
import { Injectable } from '@angular/core';
import { Stat } from './models/stats.model';
import { Site } from './models/sites.model';
import { Quote } from './models/quotes.model';
import { Tool } from './models/tools.model';
import { Link } from './models/links.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  getStats() : Stat[] {
    return [
      new Stat("Websites",9),
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
        "Not as good in fifa as he thinks, but he tries",
        "Trevor Pinto",
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
        "Aug 2021",
        "Joined Tismo",
        "rocket",
        [
          "Started my career at Tismo as a Trainee Engineer.",
        ]
      ),
      new Project(
        "Dec 2021",
        "Mobile Apps",
        "tick",
        [
          "Led the development of Android applications that communicate with firmware devices.",
          "Used technologies such as Bluetooth LE and NFC.",
          "Worked with databases like Sqlite for offline storage of application data.",
          "Have been working with both view based and Jetpack compose to build modern UI."
        ]
      ),
      new Project(
        "Mar 2022",
        "Kiosk Mode",
        "tick",
        [
          "Worked on updating the framework and libraries of legacy applications to newer versions.",
          "Configured the OS in rasperry pi systems to operate safely in kiosk mode.",
        ]
      ),
      new Project(
        "July 2022",
        "Web Apps with .NET",
        "tick",
        [
          "Worked on ASP.NET web application that connected medical professionals to laser service professionals through instant video calls.",
          "Worked with signalR for sending real-time notifications to service individuals.",
          "Deployed the application as docker containers on an AWS EC2 instance.",
        ]
      ),
      new Project(
        "Sept 2022",
        "To be Contd.",
        "thumbsup",
        [
          "Still going. Don't know till when.",
        ]
      ),

    ]
  }

  getTools() : Tool[] {
    return [
      new Tool("./assets/dotnet_icon.png","https://angular.io/"),
      new Tool("./assets/angular_icon.png","https://angular.io/"),
      new Tool("./assets/docker_icon.png","https://angular.io/"),
      new Tool("./assets/androidstudio_icon.png","https://angular.io/"),
      new Tool("./assets/flutter_icon.png","https://angular.io/"),
      new Tool("./assets/figma_icon.png","https://angular.io/"),
      new Tool("./assets/tailwind_icon.png","https://angular.io/"),
      new Tool("./assets/vscode_icon.png","https://angular.io/"),
    ]
  }

  getInterests() : Link[] {
    return [
      new Link("./assets/realmadrid_icon.png","interests","https://angular.io/"),
      new Link("./assets/guitar_icon.png","interests","https://angular.io/"),
      new Link("./assets/pokemon_icon.png","interests","https://angular.io/"),
      new Link("./assets/marvel_icon.png","interests","https://angular.io/"),
      new Link("./assets/aot_icon.png","interests","https://angular.io/"),
      new Link("./assets/tiss_icon.webp","interests","https://angular.io/"),
    ]
  }
}

