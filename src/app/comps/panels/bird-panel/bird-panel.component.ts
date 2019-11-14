import { Component, OnInit } from '@angular/core';
import { BirdServiceService } from '../../../servers/bird-service.service';

@Component({
  selector: 'app-bird-panel',
  templateUrl: './bird-panel.component.html',
  styleUrls: ['./bird-panel.component.css']
})
export class BirdPanelComponent implements OnInit {

  constructor(public birdsev:BirdServiceService ) { 

  }

  ngOnInit() {
  }
  cardto (index:number) {
    this.birdsev.corentbird=this.birdsev.birds[index];
    this.birdsev.corentbirdindex=index;
  }
  


}
