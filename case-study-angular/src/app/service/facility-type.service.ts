import {Injectable} from '@angular/core';
import {FacilityType} from '../model/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityTypeList: FacilityType[] = [{
    id: 1,
    name: 'Room'
  },
    {
      id: 2,
      name: 'House'
    },
    {
      id: 3,
      name: 'Villa'
    }];

  constructor() {
  }

  getAll() {
    return this.facilityTypeList;
  }
}
