import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  id:any;
  progress:number = 0;
  startTimeline:boolean = false;

  @HostListener('mouseover')
  onMouseOver() {
    this.startTimeline = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

  easeOutCubic(x: number): number {
    return 1 - Math.pow(1 - x, 3);
  }

}
