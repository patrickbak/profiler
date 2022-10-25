import { Component, OnInit } from '@angular/core';
import { INavbar } from '../api/navbar.interface';
import { ProfileManipulatorService } from '../services/profile-manipulator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, INavbar {

  constructor(
    private service: ProfileManipulatorService
  ) { }


  ngOnInit(): void {
  }

  // Properties required by interface

  onClick(): void {
    if (this.service.profile) {
      this.service.onCancel();
    }
  }
}
