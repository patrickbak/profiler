import { Observable } from 'rxjs';
import { Profile } from '../database/Profile';

/* An interface for table */

export interface ITable {
    headers: string[];
    list: Observable<Profile[]>;
}