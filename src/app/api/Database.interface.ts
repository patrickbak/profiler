import { Profile } from '../database/Profile';

/* Interface for Database */

export interface IDatabase {
    profilesList: Profile[];
    getNextId(): number;
}