import { Component, OnInit } from '@angular/core';
import { BeastsService } from '../../../servers/beasts.service';

@Component({
  selector: 'app-bists-card',
  templateUrl: './bists-card.component.html',
  styleUrls: ['./bists-card.component.css']
})
export class BistsCardComponent implements OnInit {

  constructor(public bistsrvs:BeastsService) { 
   
  }
  

  ngOnInit() {
  }

}
