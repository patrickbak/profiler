import { Component, OnInit } from '@angular/core';
import { Profile } from '../database/Profile';
import { ProfileManipulatorService } from '../services/profile-manipulator.service';
import { IProfileForm } from '../api/profile.form.interface';
import { FormGroup } from '@angular/forms';
import { ValidatorService } from '../services/validator.service';
import { UtilityService } from '../services/utility.service';
import { TableViewComponent } from '../table-view/table-view.component';

/* A component for displaying profile details and editing profile data */

@Component({
  selector: 'app-table-profile-details',
  templateUrl: './table-profile-details.component.html',
  styleUrls: ['./table-profile-details.component.scss']
})
export class TableProfileDetailsComponent extends TableViewComponent
  implements OnInit, IProfileForm {

  constructor(
    private service: ProfileManipulatorService,
    private validatorService: ValidatorService,
    private utilityService: UtilityService,
  ) { super(); }

  // Properties required by interface and class

  headers: string[] = [
    "Property",
    "Value"
  ];

  formGroup: FormGroup;
  formName;
  formSurname;
  formBirthDate;
  formGender;
  formNationalities;
  formEmail;
  formPhone;
  options: string[];

  // Currently displayed profile
  profile: Profile;
  // A variable for saving changes to the profile
  editProfile: Profile;
  // A flag that decides if profile is being edited
  edit: boolean = false;
  // A list that contains string representation of 
  // profile nationalities
  profileNationalities: string[];

  ngOnInit(): void {
    this.service.readProfile().
      subscribe(profile => this.profile = profile);
    this.options = this.utilityService.getNationalityStringList();
    if (this.profile) {
      this.profileNationalities =
        this.utilityService.
          convertNumberToStringList(this.profile.nationalities);
    }
  }
  // On submit changes
  onSubmit() {
    this.saveProfile();
    if (this.service.updateProfile(this.editProfile)) {
      this.edit = false;
    }
  }
  // On cancel editing
  onCancel() {
    if (this.service.onCancel()) {
      this.edit = false;
    }
  }
  // On back
  onBack() {
    this.profile = undefined;
  }
  // On press edit button
  onEdit() {
    this.edit = true;
    this.editProfile = this.profile;
    this.validation();
    this.formNationalities.value = this.profileNationalities;
  }
  // On press delete button
  onDelete() {
    if (this.service.deleteProfile(this.profile)) {
      this.edit = false;
      this.profile = undefined;
    }
  }
  // Form validation
  validation() {
    this.validatorService.validation(this.editProfile);
    this.formGroup = this.validatorService.formGroup;

    this.formName = this.validatorService.formName;
    this.formSurname = this.validatorService.formSurname;
    this.formBirthDate = this.validatorService.formBirthDate;
    this.formGender = this.validatorService.formGender;
    this.formNationalities = this.validatorService.formNationalities;
    this.formEmail = this.validatorService.formEmail;
    this.formPhone = this.validatorService.formPhone;
  }
  // A method that creates form group
  formGroupValidator() {
    this.formGroup = new FormGroup({
      formName: this.formName,
      formSurname: this.formSurname,
      formBirthDate: this.formBirthDate,
      formGender: this.formGender,
      formNationalities: this.formNationalities,
      formEmail: this.formEmail,
      formPhone: this.formPhone
    });
  }
  // Save changes to profile
  saveProfile() {
    this.editProfile.name = this.formName.value;
    this.editProfile.surname = this.formSurname.value;
    this.editProfile.birthDate = this.formBirthDate.value;
    this.editProfile.lastUpdate = new Date();
    this.editProfile.gender = this.formGender.value;
    this.editProfile.nationalities = this.utilityService.
      convertStringToNumberList(this.formNationalities.value);
    this.editProfile.email = this.formEmail.value;
    this.editProfile.phone = this.formPhone.value;
    this.editProfile.isActive = true;
  }
}
