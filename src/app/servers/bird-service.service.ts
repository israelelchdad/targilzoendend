import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirdServiceService {

  constructor() { }
 birds=[
  {name:"blue tail",whit:5,food:"water",life:13,growupplace:"africa",img:'https://www.allaboutbirds.org/guide/assets/photo/63740041-480px.jpg'},
  {name:"green tail",whit:6,food:"water",life:14,growupplace:"america",img:'https://media.mnn.com/assets/images/2015/08/bird-quetzal.jpg.838x0_q80.jpg'},
  {name:"gray tail",whit:7,food:"water",life:15,growupplace:"antartica",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviqpP6KrXHtpAI_YiI5MzfsNn1jNqETFaxjK_iE1lA2Wbih_Q&s'},
  {name:"black tail",whit:8,food:"water",life:16,growupplace:"isreal",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRamVN5ICLPQN3kDVIG9iTkfazSJYexfzIutvHVIEze3I-6kbSWg&s'},
  {name:"white tail",whit:9,food:"water",life:17,growupplace:"maroko",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6YFQkQzJLYQD799v_Ubr3pRHqSQKlAbD8EhO5RaNeq5hObM2Wg&s'},
  {name:"red tail",whit:10,food:"water",life:18,growupplace:"sin",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepesvQiwswoJeQLRksRmBfx9OPharUzB86iIWykR45OaJb7K4Vg&s'},
  {name:"orange tail",whit:11,food:"water",life:19,growupplace:"kolombia",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-X4W41wjTvtSTYohc6r5N1UK4IfnWDf6xORUn1O4W7U5SMIp&s'},
  {name:"yellow tail",whit:12,food:"water",life:20,growupplace:"mecsiko",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JxRLYP6LmZv-HhoYQ1fSAeC4fBFPGwt615LxhBrur9tOO3wN&s'}
]

corentbirdindex=0;
corentbird=this.birds[this.corentbirdindex];
}