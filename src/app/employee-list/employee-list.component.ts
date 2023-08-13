import { EmployeedataService } from './../employeedata.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList!:Employee[];
  constructor(private EmployeedataService:EmployeedataService,private router:Router) { }

  ngOnInit(){
    this.getEmployee();
  }
  getEmployee():void{
    this.employeeList=this.EmployeedataService.getEmployeData();
  }
  seeDetails(id: Number){
    this.router.navigate(['employeedetail',id]);
  }

}
