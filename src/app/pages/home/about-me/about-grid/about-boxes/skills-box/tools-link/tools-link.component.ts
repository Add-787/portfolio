import { Component, Input, OnInit } from '@angular/core';
import { Tool } from 'src/app/shared/models/tools.model';

@Component({
  selector: 'app-tools-link',
  templateUrl: './tools-link.component.html',
  styleUrls: ['./tools-link.component.scss']
})
export class ToolsLinkComponent implements OnInit {

  @Input() tool!: Tool;
  constructor() { }

  ngOnInit(): void {
  }

}
