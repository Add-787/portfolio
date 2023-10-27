import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input()startTimeLine:boolean = false;
  progress:number = 0;

  constructor() { }

  ngOnInit(): void {
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
