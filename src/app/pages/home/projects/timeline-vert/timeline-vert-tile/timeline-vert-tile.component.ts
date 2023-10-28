import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timeline-vert-tile',
  templateUrl: './timeline-vert-tile.component.html',
  styleUrls: ['./timeline-vert-tile.component.scss']
})
export class TimelineVertTileComponent implements OnInit {

  @Input()isActivated: boolean = false;
  @Input() icon: string = '';

  @Output() activateNext: EventEmitter<void> = new EventEmitter();


  progress: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {

    if(this.isActivated)
    {
      let id = setInterval(() => {
        this.progress++;

        if(this.progress == 100)
        {
          this.activateNext.emit();
          clearInterval(id);
        }
      }, 50);
    }

  }

  isHalfwayDone(): boolean {
    return this.progress >= 50;
  }




}
