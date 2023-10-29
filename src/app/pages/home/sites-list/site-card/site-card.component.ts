import { Site } from './../../../../shared/models/sites.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.scss']
})
export class SiteCardComponent implements OnInit {

  @Input() site!: Site

  constructor() { }

  ngOnInit(): void {
  }

}
