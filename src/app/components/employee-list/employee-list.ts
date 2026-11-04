import { Component, inject, OnInit ,signal } from '@angular/core';
import { Employee } from '../../interface/employee';
import { EmployeeService } from '../../services/employee-service';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-employee-list',
  styleUrl: './employee-list.css',
  templateUrl: './employee-list.html',
})
export class EmployeeList implements OnInit {

  service = inject(EmployeeService);
  employees = signal<Employee[]>([]);

  ngOnInit(): void {
    debugger;
    this.service.getEmployees().subscribe(data => {
      this.employees.set(data);
    });
  }
}
