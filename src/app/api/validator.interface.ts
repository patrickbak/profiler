import { FormGroup, FormControl } from '@angular/forms';
import { Profile } from '../database/Profile';

/* An interface for validating forms */

export interface IFormValidator {

    formName: FormControl;
    formSurname: FormControl;
    formBirthDate: FormControl;
    formGender: FormControl;
    formNationalities: FormControl;
    formEmail: FormControl;
    formPhone: FormControl;
    formGroup: FormGroup;

    validation(profile: Profile);
}