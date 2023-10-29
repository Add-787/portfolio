import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/shared/info.service';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.scss']
})
export class SitesListComponent implements OnInit {

  constructor(public infoService: InfoService) { }

  ngOnInit(): void {
  }

}
