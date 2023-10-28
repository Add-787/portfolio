import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-vert',
  templateUrl: './timeline-vert.component.html',
  styleUrls: ['./timeline-vert.component.scss']
})
export class TimelineVertComponent implements OnInit {

  @Input() startTimeline: boolean = false;
  stage: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onActivateNext() {
    this.stage++;
  }

  activated(curr:number) : boolean {
    return this.stage >= curr;
  }

}
