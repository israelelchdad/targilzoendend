import { Component, OnInit } from '@angular/core';
import { BirdServiceService } from '../../../servers/bird-service.service';

@Component({
  selector: 'app-bird-card',
  templateUrl: './bird-card.component.html',
  styleUrls: ['./bird-card.component.css']
})
export class BirdCardComponent implements OnInit {

  constructor(public birsvc:BirdServiceService) { }

  ngOnInit() {
  }

}
