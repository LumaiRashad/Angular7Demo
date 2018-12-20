import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
      <h3>The selected department is with id: {{DepartmentId}}</h3>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public DepartmentId;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this._route.snapshot.paramMap.get("id"));
    this.DepartmentId = id;
  }

}
