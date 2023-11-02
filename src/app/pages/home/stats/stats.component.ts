import { InfoService } from './../../../shared/info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(public infoService:InfoService) { }

  ngOnInit(): void {
    
  }

}
