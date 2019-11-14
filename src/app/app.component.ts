import { Component } from '@angular/core';
import { PagingServiceService } from './servers/paging-service.service';
import { BirdServiceService } from './servers/bird-service.service';
import { WildServiceService } from './servers/wild-service.service';
import { BeastsService } from './servers/beasts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'targilzoo';
  constructor(public pagings:PagingServiceService,public bird:BirdServiceService,public wildsrvc:WildServiceService,public bestsrvs:BeastsService){

  }
//   getup(ev){
//   console.log("AppComponent  getUp "+ev);
//     switch(this.pagings.curentpanel){
//     case 'birds':
//     let newbirdsindex=this.getnewcoretindex(
//       this.bird.corentbirdindex,ev,this.bird.birds)
//       this.bird.corentbirdindex=newbirdsindex;
//       this.bird.corentbird=this.bird.birds[newbirdsindex];
//       break; 
//       case 'wilds':
//       let newwildindex=this.getnewcoretindex(
//         this.wildsrvc.corentwild,ev,this.wildsrvc.wilds)
//         this.wildsrvc.corentwild=newwildindex;
//         this.wildsrvc.corentwildwilds=this.wildsrvc.wilds[newwildindex];
//         break; 
//      case 'bists':
//         let newwbistndex=this.getnewcoretindex(
//           this.bestsrvs.corenbeadstssndex,ev,this.bestsrvs.beasts)
//           this.bestsrvs.corenbeadstssndex=newwbistndex;
//           this.bestsrvs.corentbeasts=this.bestsrvs.beasts[newwbistndex];
//           break; 
//     }
 


//   } 
//   getnewcoretindex(corent:number,delta:number,arrey:{}[]):number{
//     let max=arrey.length-1;
//     let newindex=corent+delta;
//     if(newindex>max){
//       newindex=0;
//     }
//     if(newindex<-0){
//       newindex=max;
//     }
//     return newindex;
//  }
}
