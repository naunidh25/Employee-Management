import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EMPLOYEES } from '../employee-list';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  sub: any;
  id!: number;
  employee!:Employee;
  employeeList:Employee[]=EMPLOYEES;

  constructor(private activatedRoute:ActivatedRoute, private route:Router) { }

  

  ngOnInit() {
    this.sub =this.activatedRoute.params.subscribe(params=>{
      this.id = params['id'];
      for (let employee of this.employeeList) {
        if (employee.id == this.id) {
          this.employee = employee;
        } 
      }
    });
  }
  goBack(){
    this.route.navigate(['employeelist']);
  }
  
}
