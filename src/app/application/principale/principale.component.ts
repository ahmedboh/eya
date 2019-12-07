import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {
 laDate:Date;
  constructor(private service:DateService) { }

  ngOnInit() {
    this.laDate=this.service.dateJour();
  }

}
