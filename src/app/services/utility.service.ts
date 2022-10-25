import { Injectable } from '@angular/core';
import { INationalityListManipulator } from '../api/nationality.list.manipulator.interface';
import { NationalityList } from '../database/NationalityList';

/* A service for exporting and translating 
nationality list */

@Injectable({
  providedIn: 'root'
})
export class UtilityService implements INationalityListManipulator {

  // Properties required by interface

  nationalityList = NationalityList;

  constructor() { }

  getNationalityStringList() {
    const stringNationalityList: string[] = [];
    for (let i = 0; i < 248; i++) {
      stringNationalityList.splice(i, 0, this.nationalityList[i]);
    }
    return stringNationalityList;
  }
  convertStringToNumberList(list: string[]): number[] {
    const numberNationalityList: number[] = [];
    list.forEach((element, index) => {
      numberNationalityList.splice(index, 0, this.nationalityList[element]);
    });
    return numberNationalityList;
  }
  convertNumberToStringList(list: number[]): string[] {
    const stringNationalityList: string[] = [];
    list.forEach((element, index) => {
      stringNationalityList.splice(index, 0, this.nationalityList[element]);
    });
    return stringNationalityList;
  }
}
