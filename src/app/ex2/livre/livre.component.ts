import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { Livre } from '../Livre';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input()liv:Livre;
  @Input()ind:number;
  constructor(private service:ServiceService) { }
  
  ngOnInit() {
  
  }
  onPromo(x:number,y:number):number{
    return this.service.mmettreEnPromo(x,y);
  }
}
