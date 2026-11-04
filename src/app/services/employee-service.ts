import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    employees: Employee[] = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', address: '123 Main St' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '098-765-4321', address: '456 Oak Ave' },
        { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-1234', address: '789 Pine Rd' },
        { id: 4, name: 'Alice Williams', email: 'alice.williams@example.com', phone: '555-5678', address: '101 Elm St' },
        { id: 5, name: 'Charlie Brown', email: 'charlie.brown@example.com', phone: '555-9012', address: '202 Maple Dr' }
    ];

    getEmployees(): Observable<Employee[]> {
        debugger;
        return of(this.employees);
    }

    getEmployeeById(id: number): Employee | undefined {
        debugger;
        return this.employees.find(employee => employee.id === id);
    }
}
