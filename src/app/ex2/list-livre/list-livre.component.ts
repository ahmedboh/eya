import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css']
})
export class ListLivreComponent implements OnInit {
 tab;
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.tab=this.service.livres;
  }
  Promo(i:number):boolean{
    return this.service.estEnPromo(i);
  }
}
