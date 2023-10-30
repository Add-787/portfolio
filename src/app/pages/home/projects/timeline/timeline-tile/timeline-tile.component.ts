import { Project } from './../../../../../shared/models/projects.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-tile',
  templateUrl: './timeline-tile.component.html',
  styleUrls: ['./timeline-tile.component.scss']
})
export class TimelineTileComponent implements OnInit {

  @Input()isActivated: boolean = false;
  @Input() project!: Project;
  @Input()icon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
