import { InfoService } from 'src/app/shared/info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-grid',
  templateUrl: './testimonials-grid.component.html',
  styleUrls: ['./testimonials-grid.component.scss']
})
export class TestimonialsGridComponent implements OnInit {

  constructor(public infoService: InfoService) { }

  ngOnInit(): void {
  }

}
