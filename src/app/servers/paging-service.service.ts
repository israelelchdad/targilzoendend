import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingServiceService {
 
 
  public curentpanel="birds";

  constructor() {
    console.log('corantpanel='+this.curentpanel)
   }
}
