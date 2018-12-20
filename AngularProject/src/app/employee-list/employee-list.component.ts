import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
@Component({
  selector: 'employee-list',
  template: `
    <h3>
    Employee List
    </h3>
    <ul class="items" *ngFor="let employee of employees">
    <li>
      <span class="badge">{{employee.id}}</span> {{employee.name}}
    </li>
    </ul>`,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }
  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
  }
}