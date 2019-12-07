import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-list-eomploye',
  templateUrl: './list-eomploye.component.html',
  styleUrls: ['./list-eomploye.component.css']
})
export class ListEomployeComponent implements OnInit {
  emp:string[];

  constructor(private service:EmployeService) { }

  ngOnInit() {
  this.emp=this.service.employes; 
  }


}
