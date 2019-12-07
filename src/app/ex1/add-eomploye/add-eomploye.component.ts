import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-add-eomploye',
  templateUrl: './add-eomploye.component.html',
  styleUrls: ['./add-eomploye.component.css']
})
export class AddEomployeComponent implements OnInit {
 val:string;
 onAjoute(x:string){
   this.service.addEmployee(x);
 }
  constructor(private service:EmployeService) { }

  ngOnInit() {
  }

}
