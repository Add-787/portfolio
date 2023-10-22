import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-grid',
  templateUrl: './about-grid.component.html',
  styleUrls: ['./about-grid.component.scss']
})
export class AboutGridComponent implements OnInit {

  constructor() { }

  optionSelected: string = 'skills';

  ngOnInit(): void {
  }

  changeOption(option: string)
  {
    this.optionSelected = option;
  }

}

