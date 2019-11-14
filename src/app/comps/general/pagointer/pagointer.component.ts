import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PagingServiceService } from '../../../servers/paging-service.service';
import { BirdServiceService } from '../../../servers/bird-service.service';
import { WildServiceService } from '../../../servers/wild-service.service';
import { BeastsService } from '../../../servers/beasts.service';

@Component({
  selector: 'app-pagointer',
  templateUrl: './pagointer.component.html',
  styleUrls: ['./pagointer.component.css']
})
export class PagointerComponent implements OnInit {

  constructor(public pagings:PagingServiceService,public bird:BirdServiceService,public wildsrvc:WildServiceService,public bestsrvs:BeastsService) { }

  ngOnInit() {
  }

  // @Output() moveitem:EventEmitter<number> = new EventEmitter<number>();
  
  moveitempage(delta:number):void{
    console.log("pagointercompeter "+delta)
    // this.moveitem.emit(delta)

       switch(this.pagings.curentpanel){
      case 'birds':
      let newbirdsindex=this.getnewcoretindex(
        this.bird.corentbirdindex,delta,this.bird.birds)
        this.bird.corentbirdindex=newbirdsindex;
        this.bird.corentbird=this.bird.birds[newbirdsindex];
        break; 
        case 'wilds':
        let newwildindex=this.getnewcoretindex(
          this.wildsrvc.corentwild,delta,this.wildsrvc.wilds)
          this.wildsrvc.corentwild=newwildindex;
          this.wildsrvc.corentwildwilds=this.wildsrvc.wilds[newwildindex];
          break; 
       case 'bists':
          let newwbistndex=this.getnewcoretindex(
            this.bestsrvs.corenbeadstssndex,delta,this.bestsrvs.beasts)
            this.bestsrvs.corenbeadstssndex=newwbistndex;
            this.bestsrvs.corentbeasts=this.bestsrvs.beasts[newwbistndex];
            break; 
      }
   
  
  
    } 
    getnewcoretindex(corent:number,delta:number,arrey:{}[]):number{
      let max=arrey.length-1;
      let newindex=corent+delta;
      if(newindex>max){
        newindex=0;
      }
      if(newindex<-0){
        newindex=max;
      }
      return newindex;
   }

}
