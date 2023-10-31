import { InfoService } from 'src/app/shared/info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others-box',
  templateUrl: './others-box.component.html',
  styleUrls: ['./others-box.component.scss']
})
export class OthersBoxComponent implements OnInit {

  constructor(public infoService: InfoService) { }

  ngOnInit(): void {
  }
}
