import {Injectable} from '@angular/core';
import {RentalType} from '../model/facility/rental-type';

@Injectable({
  providedIn: 'root'
})
export class RentalTypeService {
  rentalTypeList: RentalType[] = [{
    id: 1,
    name: 'Day'
  },
    {
      id: 2,
      name: 'Week'
    },
    {
      id: 3,
      name: 'Month'
    },
    {
      id: 4,
      name: 'Year'
    }];

  constructor() {
  }

  getAll() {
    return this.rentalTypeList;
  }
  findById(id: number) {
    return this.rentalTypeList.find(rentalType => rentalType.id === id);
  }
}
