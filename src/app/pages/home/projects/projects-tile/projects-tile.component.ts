import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-tile',
  templateUrl: './projects-tile.component.html',
  styleUrls: ['./projects-tile.component.scss']
})
export class ProjectsTileComponent implements OnInit {

  @Input() isActivated: boolean = false;
  @Input() icon:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
