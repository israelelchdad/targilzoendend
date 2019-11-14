import { Component, OnInit } from '@angular/core';
import { PagingServiceService } from '../../../servers/paging-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( public pag:PagingServiceService) { }

  ngOnInit() {
  }
  navto(pagname:string):void{
    console.log(`pagname=${pagname}`)
    this.pag.curentpanel=pagname;

  }

}
