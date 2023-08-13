import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './employee-list';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {

  constructor() { }
  getEmployeData():Employee[]{
    return EMPLOYEES;
  }
}
