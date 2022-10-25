import { Injectable } from '@angular/core';
import { IProfileManipulator } from '../api/profile.manipulator.interface';
import { Profile } from '../database/Profile';
import { IDatabaseManager } from '../api/database.manager.interface';
import { Database } from '../database/Database';
import { Observable, of } from 'rxjs';

/* A service that modify data and make changes in database */

@Injectable({
  providedIn: 'root'
})
export class ProfileManipulatorService implements
  IProfileManipulator,
  IDatabaseManager {

  // Properties required by interfaces

  database: Database;
  profile: Profile;

  constructor() {
    this.database = new Database();
  }
  // Get data from database
  getProfilesList(): Observable<Profile[]> {
    return of(this.database.profilesList);
  }
  // Create new profile
  createProfile(data: Profile): void {
    data.id = this.database.getNextId();
    this.database.profilesList.splice(this.database.profilesList.length, 0, data);
  }
  // Display profile
  readProfile(): Observable<Profile> {
    return of(this.profile);
  }
  // Update profile after changing data
  updateProfile(data: Profile): boolean {
    if (confirm('Are you sure you want to update this profile?')) {
      const index = this.database.profilesList.indexOf(this.profile);
      this.database.profilesList.splice(index, 1, data);
      alert('Profile updated.');
      this.profile = undefined;
      return true;
    }
    return false;
  }
  // Delete profile from list
  deleteProfile(data: Profile): boolean {
    if (confirm('Are you sure you want to delete this profile?')) {
      const index = this.database.profilesList.indexOf(data);
      this.database.profilesList.splice(index, 1);
      this.profile = undefined;
      return true;
    }
    return false;
  }
  // Set profile for display (Observable)
  setProfile(profile: Profile) {
    this.profile = profile;
  }
  // Cancel data editing
  onCancel() {
    return confirm('Are you sure you want to cancel changes to this profile?');
  }
}
