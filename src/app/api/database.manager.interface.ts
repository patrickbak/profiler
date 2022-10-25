import { Observable } from 'rxjs';
import { Profile } from '../database/Profile';

/* An interface for retrieving data from server */

export interface IDatabaseManager {
    getProfilesList(): Observable<Profile[]>;
}