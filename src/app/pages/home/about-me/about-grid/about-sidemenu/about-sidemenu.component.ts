import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-sidemenu',
  templateUrl: './about-sidemenu.component.html',
  styleUrls: ['./about-sidemenu.component.scss']
})
export class AboutSidemenuComponent implements OnInit {

  @Output() selectedMenuEvent = new EventEmitter<string>();

  optionSelected : string = 'skills';

  constructor() { }

  ngOnInit(): void {
  }

  onOptionSelected(option: string)
  {
    this.optionSelected = option;
    this.selectedMenuEvent.emit(option);
  }

}
