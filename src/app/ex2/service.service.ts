import { Injectable } from '@angular/core';
import { Livre } from './Livre';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  livres=[
    new Livre('Pivoine','pearl buck',27.8,0),
    new Livre('Khan El khalili','Nejib Mahfoudh',14.5,0),
    new Livre('Ramadan','Jorgi zaidane',8.6,0)
  ];
  mmettreEnPromo (reduction:number, index:number):number{
    this.livres[index].reduction=reduction;
     return this.livres[index].prix*reduction;
  }

  estEnPromo(index:number):boolean{
    return (this.livres[index].reduction!=0)?true:false;
  }
  addLivre (l :Livre){
    this.livres.push(l);
  }
  annulerReduction(){
    for(let l of this.livres){
      l.reduction=0;
    }
  }

  constructor() { }
}
