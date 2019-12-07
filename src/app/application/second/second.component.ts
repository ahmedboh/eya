import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
 dte:Date;
  constructor(private service:DateService) { }

  ngOnInit() {
    this.dte=this.service.dateJour();
  }

}
