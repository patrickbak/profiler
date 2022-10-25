import { Profile } from './Profile';
import { IDatabase } from '../api/Database.interface';

/* A class that contains all the data used by application */

export class Database implements IDatabase {
    // Example data for table
    profilesList: Profile[] = [
        new Profile(
            0,
            'Kate',
            'Sullivan',
            new Date(1985, 12, 4),
            new Date(2018, 11, 24, 7, 43, 40),
            new Date(2019, 2, 1, 11, 27, 12),
            'Female',
            [39],
            'kate.sullivan@yahoo.com',
            '546435549',
            5,
            false
        ),

        new Profile(
            1,
            'Gregory',
            'Bosman',
            new Date(1969, 8, 17),
            new Date(2020, 1, 10, 15, 12, 8),
            new Date(2020, 2, 11, 22, 31, 48),
            'Male',
            [235],
            'gregory.bosman@yahoo.com',
            '698503854',
            4.8,
            true
        ),

        new Profile(
            2,
            'Mark',
            'House',
            new Date(1977, 8, 14),
            new Date(2018, 3, 27, 20, 36, 12),
            new Date(2020, 3, 1, 12, 48, 58),
            'Male',
            [235, 200, 220],
            'mark.house@yahoo.com',
            '546075445',
            4.6,
            true
        )
    ];
    getNextId(): number {
        let i = 0;
        this.profilesList.forEach((_, index) => {
            if (i === index && index !== this.profilesList.length - 1) {
                i++;
            } else {
                return ++i;
            }
        });
        return ++i;
    }
}