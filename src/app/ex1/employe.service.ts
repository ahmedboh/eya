import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  employes=['WerfelliAhmed','TouilAchref','DridiAnis','WerfelliIlyes'];
  addEmployee(nom:string){
    this.employes.push(nom);
  }

  constructor() { }
}
