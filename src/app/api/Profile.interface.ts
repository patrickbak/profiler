/* A Profile interface */

export interface IProfile {
    name: string;
    surname: string;
    birthDate: Date;
    creationDate: Date;
    lastUpdate: Date;
    gender: string;
    nationalities: number[];
    email: string;
    phone: string;
    rating: number;
    isActive: boolean;
}