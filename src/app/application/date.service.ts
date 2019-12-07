import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  dateJour():Date{
    return new Date();
  }

  constructor() { }
}
