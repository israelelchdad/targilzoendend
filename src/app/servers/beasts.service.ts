import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor() { }
  beasts=[
    {name:"cow red",whit:5,food:"water",life:13,growupplace:"africa",img:'http://www.shuvaisrael.com/wp-content/uploads/2014/06/parah.jpg'},
    {name:"cow black",whit:6,food:"water",life:14,growupplace:"america",img:'https://fscomps.fotosearch.com/compc/CSP/CSP479/a-%D7%A6%D7%A2%D7%99%D7%A8-%D7%A4%D7%A8%D7%94-%D7%9C%D7%91%D7%A0%D7%94-%D7%A9%D7%97%D7%95%D7%A8%D7%94-%D7%9E%D7%90%D7%92%D7%A8-%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA__k4790975.jpg'},
    {name:"cow white",whit:7,food:"water",life:15,growupplace:"antartica",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6eY8V4wmOjzBwfP4p4HWgMzNwqiUQGlo8AIlZAdk8GTCWVlH&s'},
    {name:"cow perpel",whit:8,food:"water",life:16,growupplace:"isreal",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLevux4TBc193KukDKLDdnc4Ufp-4cI5kIO9FTN16kDpSp6MZbg&s'},
    {name:"cow brown",whit:9,food:"water",life:17,growupplace:"maroko",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVOY2FNwGYQDgyiSOPdCInhViaaDx_Uhl7Q_oaHJHBsaLHBUuzg&s"}
 
  ];
  
  corenbeadstssndex=0;
  corentbeasts=this.beasts[this.corenbeadstssndex];

};
