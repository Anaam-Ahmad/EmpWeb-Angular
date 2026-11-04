import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-employee',
  styleUrl: './employee.css',
  templateUrl: './employee.html',
})
export class Employee {
  employeeName: string = 'John Doe';
  employeeId: number = 12345;
  displayEmpInfo: string = `Employee Name: ${this.employeeName}, Employee ID: ${this.employeeId}`;
}
