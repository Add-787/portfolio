import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/models/links.model';

@Component({
  selector: 'app-links-icon',
  templateUrl: './links-icon.component.html',
  styleUrls: ['./links-icon.component.scss']
})
export class LinksIconComponent implements OnInit {

  @Input() interest!: Link;

  constructor() { }

  ngOnInit(): void {
  }

}
