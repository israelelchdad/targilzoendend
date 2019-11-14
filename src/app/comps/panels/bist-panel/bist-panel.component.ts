import { Component, OnInit } from '@angular/core';
import { BirdServiceService } from '../../../servers/bird-service.service';
import { BeastsService } from '../../../servers/beasts.service';

@Component({
  selector: 'app-bist-panel',
  templateUrl: './bist-panel.component.html',
  styleUrls: ['./bist-panel.component.css']
})
export class BistPanelComponent implements OnInit {

  constructor(public bistsrvc:BeastsService) {
  
   }

  ngOnInit() {
  }
  cardto(index:number){
    this.bistsrvc.corentbeasts=this.bistsrvc.beasts[index];
    this.bistsrvc.corenbeadstssndex=index;
  }

}
