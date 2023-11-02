import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/shared/models/quotes.model';

@Component({
  selector: 'app-testimonials-tile',
  templateUrl: './testimonials-tile.component.html',
  styleUrls: ['./testimonials-tile.component.scss']
})
export class TestimonialsTileComponent implements OnInit {

  @Input() quote!: Quote


  constructor() { }

  ngOnInit(): void {
  }

}
