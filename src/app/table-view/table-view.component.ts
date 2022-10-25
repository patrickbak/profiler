import { Component, OnInit } from '@angular/core';
import { ITable } from '../api/table.interface';
import { Observable } from 'rxjs';
import { Profile } from '../database/Profile';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, ITable {

  constructor() { }

  // Properties required by interface

  headers: string[];
  list: Observable<Profile[]>;

  ngOnInit(): void {
  }
}
