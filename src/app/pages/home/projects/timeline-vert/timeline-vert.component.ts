import { Component, Input, OnInit } from '@angular/core';
import { InfoService } from 'src/app/shared/info.service';
import { Project } from 'src/app/shared/models/projects.model';

@Component({
  selector: 'app-timeline-vert',
  templateUrl: './timeline-vert.component.html',
  styleUrls: ['./timeline-vert.component.scss']
})
export class TimelineVertComponent implements OnInit {

  @Input() startTimeline: boolean = false;
  stage: number = 0;
  projects: Project[] = [];

  constructor(public infoService: InfoService)
  {

  }

  ngOnInit(): void {
    this.projects = this.infoService.getProjects();

  }

  onActivateNext() {
    this.stage++;
  }

  activated(curr:number) : boolean {
    return this.stage >= curr;
  }

}
