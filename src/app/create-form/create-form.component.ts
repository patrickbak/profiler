import { Component, OnInit } from '@angular/core';
import { Profile } from '../database/Profile';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileManipulatorService } from '../services/profile-manipulator.service';
import { ValidatorService } from '../services/validator.service';
import { IProfileForm } from '../api/profile.form.interface';
import { UtilityService } from '../services/utility.service';

/* A component for creating new profile form */

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit, IProfileForm {

  constructor(private service: ProfileManipulatorService,
    private validatorService: ValidatorService,
    private utilityService: UtilityService) { }

  // Properties required by interface

  headers: string[];
  formName: FormControl;
  formSurname: FormControl;
  formBirthDate: FormControl;
  formGender: FormControl;
  formNationalities: FormControl;
  formEmail: FormControl;
  formPhone: FormControl;
  formGroup: FormGroup;

  profile: Profile;
  options: string[];

  ngOnInit(): void {
    this.setProfile();
    this.validation();
    this.options = this.utilityService.getNationalityStringList();
  }
  // When the form is submitted
  onSubmit() {
    this.saveProfile();
    this.service.createProfile(this.profile);
  }
  // Form validation
  validation() {
    this.validatorService.validation(this.profile);
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
  // Initialize profile's properties
  setProfile() {
    this.profile = new Profile(
      0,
      '',
      '',
      new Date(),
      new Date(),
      new Date(),
      '',
      [],
      '',
      '',
      0,
      true
    );
  }
  // Save changes to profile
  saveProfile() {
    this.profile.name = this.formName.value;
    this.profile.surname = this.formSurname.value;
    this.profile.birthDate = this.formBirthDate.value;
    this.profile.lastUpdate = new Date();
    this.profile.gender = this.formGender.value;
    this.profile.nationalities = this.utilityService.
      convertStringToNumberList(this.formNationalities.value);
    this.profile.email = this.formEmail.value;
    this.profile.phone = this.formPhone.value;
    this.profile.isActive = true;
  }
}
