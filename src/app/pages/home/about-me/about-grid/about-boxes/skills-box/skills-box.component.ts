import { InfoService } from 'src/app/shared/info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-box',
  templateUrl: './skills-box.component.html',
  styleUrls: ['./skills-box.component.scss']
})
export class SkillsBoxComponent implements OnInit {

  constructor(public infoService: InfoService) { }

  ngOnInit(): void {
  }

}
