import { Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeDetails } from './components/employee-details/employee-details';
import { EmployeeForm } from './components/employee-form/employee-form';

export const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeList },
  { path: 'employee/new', component: EmployeeForm },
  { path: 'employee/:id', component: EmployeeDetails },
];
