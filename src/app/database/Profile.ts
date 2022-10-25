import { IProfile } from '../api/Profile.interface';

/* A Profile class */

export class Profile implements IProfile {

    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public birthDate: Date,
        public creationDate: Date = new Date(),
        public lastUpdate: Date = new Date(),
        public gender: string,
        public nationalities: number[],
        public email: string,
        public phone: string,
        public rating: number = 0,
        public isActive: boolean = true
    ) { }
}