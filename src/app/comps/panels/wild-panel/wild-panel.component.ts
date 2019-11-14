import { Component, OnInit } from '@angular/core';
import { WildServiceService } from '../../../servers/wild-service.service';

@Component({
  selector: 'app-wild-panel',
  templateUrl: './wild-panel.component.html',
  styleUrls: ['./wild-panel.component.css']
})
export class WildPanelComponent implements OnInit {

  constructor(public wildsrv:WildServiceService) { }

  ngOnInit() {
  }
  cardto(index:number){
    this.wildsrv.corentwildwilds=this.wildsrv.wilds[index];
    this.wildsrv.corentwild=index;
  }

}
