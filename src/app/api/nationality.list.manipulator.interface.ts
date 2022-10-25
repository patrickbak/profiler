import { INationalityList } from './nationality.list.interface';

export interface INationalityListManipulator extends INationalityList {

    convertStringToNumberList(list: string[]): number[];
    convertNumberToStringList(list: number[]): string[];
}