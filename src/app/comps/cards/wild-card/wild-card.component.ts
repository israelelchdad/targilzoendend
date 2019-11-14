import { Component, OnInit } from '@angular/core';
import { WildServiceService } from '../../../servers/wild-service.service';

@Component({
  selector: 'app-wild-card',
  templateUrl: './wild-card.component.html',
  styleUrls: ['./wild-card.component.css']
})
export class WildCardComponent implements OnInit {

  constructor(public wildsvc:WildServiceService) { }

  ngOnInit() {
  }

}
