import { Profile } from '../database/Profile';

/* An interface for CRUD operations */

export interface IProfileManipulator {
    createProfile(data: Profile): void;
    readProfile(data: Profile): void;
    updateProfile(data: Profile): void;
    deleteProfile(data: Profile): void;
}