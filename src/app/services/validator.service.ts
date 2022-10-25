import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { IFormValidator } from '../api/validator.interface';
import { Profile } from '../database/Profile';

/* A service that is responsible for setting input validation */

@Injectable({
  providedIn: 'root'
})
export class ValidatorService implements IFormValidator {

  constructor() { }
  formName: FormControl;
  formSurname: FormControl;
  formBirthDate: FormControl;
  formGender: FormControl;
  formNationalities: FormControl;
  formEmail: FormControl;
  formPhone: FormControl;
  formGroup: FormGroup;

  profileNationalities: string[];

  // Form validation
  validation(profile: Profile) {
    this.formNameValidator(profile);
    this.formSurnameValidator(profile);
    this.formBirthdateValidator(profile);
    this.formGenderValidator(profile);
    this.formNationalitiesValidator(profile);
    this.formEmailValidator(profile);
    this.formPhoneValidator(profile);

    this.formGroupValidator();
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
  // Methods that validate single input
  formNameValidator(profile: Profile) {
    this.formName = new FormControl(profile.name, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern("^[A-Z][a-zA-Z]*$")
    ]);
  }
  formSurnameValidator(profile: Profile) {
    this.formSurname = new FormControl(profile.surname, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern("^[A-Z][a-zA-Z]*$")
    ]);
  }
  formBirthdateValidator(profile: Profile) {
    this.formBirthDate = new FormControl(profile.birthDate,
      Validators.required);
  }
  formGenderValidator(profile: Profile) {
    this.formGender = new FormControl(profile.gender,
      Validators.required);
  }
  formNationalitiesValidator(profile: Profile) {
    this.formNationalities = new FormControl(profile.nationalities,
      Validators.required);
  }
  formEmailValidator(profile: Profile) {
    this.formEmail = new FormControl(profile.email, [
      Validators.required,
      Validators.email
    ]);
  }
  formPhoneValidator(profile: Profile) {
    this.formPhone = new FormControl(profile.phone, [
      Validators.minLength(9),
      Validators.maxLength(15),
      Validators.pattern("^[0-9]*$")
    ]);
  }
}
