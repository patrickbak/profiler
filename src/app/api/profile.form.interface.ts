import { Profile } from '../database/Profile';
import { FormGroup, FormControl } from '@angular/forms';

/* An interface for creating forms */

export interface IProfileForm {

    headers: string[];
    options: string[];

    formName: FormControl;
    formSurname: FormControl;
    formBirthDate: FormControl;
    formGender: FormControl;
    formNationalities: FormControl;
    formEmail: FormControl;
    formPhone: FormControl;
    profile: Profile;
    formGroup: FormGroup;

    onSubmit();
    validation();
}