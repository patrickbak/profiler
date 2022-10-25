import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../database/Profile';
import { TableViewComponent } from '../table-view/table-view.component';
import { ProfileManipulatorService } from '../services/profile-manipulator.service';

/* A component for displaying and managing list of profiles */

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends TableViewComponent implements OnInit {

  constructor(
    private service: ProfileManipulatorService
  ) { super(); }

  // Properties required by class

  headers: string[] = [
    "Id",
    "Name",
    "Surname",
    "Email",
    "Creation Date",
    "Active Account",
    "Change Buttons"
  ];
  list: Observable<Profile[]>;

  // A variable that stores current selected profile
  dataSource;

  ngOnInit(): void {
    this.list = this.service.getProfilesList();
    this.list.subscribe(profiles => this.dataSource = profiles);
  }

  viewProfile(profile: Profile): void {
    this.service.setProfile(profile);
  }

  deleteProfile(profile: Profile): void {
    this.service.deleteProfile(profile);
  }
}
