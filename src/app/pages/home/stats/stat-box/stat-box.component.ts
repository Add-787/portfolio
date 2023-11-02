import { Stat } from './../../../../shared/models/stats.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-box',
  templateUrl: './stat-box.component.html',
  styleUrls: ['./stat-box.component.scss']
})
export class StatBoxComponent implements OnInit {

  @Input()
  stat!: Stat;

  constructor() { }

  ngOnInit(): void {
  }

}
