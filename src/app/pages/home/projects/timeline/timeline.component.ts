import { InfoService } from 'src/app/shared/info.service';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/projects.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input()startTimeLine:boolean = false;
  projects: Project[] = [];
  progress:number = 0;

  constructor(public infoService: InfoService) { }

  ngOnInit(): void {
    this.projects = this.infoService.getProjects();
  }

  ngOnChanges() {
    // console.log('View initialized.')
    if(this.startTimeLine)
    {
      let id = setInterval(() => {
        this.progress++;
        if(this.progress == 100)
        {
          clearInterval(id)
        }
      }, 75);
    }
  }

  isActivated(index: number) {
    return this.progress >= (index/4)* 100;
  }

}
