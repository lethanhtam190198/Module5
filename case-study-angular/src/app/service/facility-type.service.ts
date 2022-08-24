import {Injectable} from '@angular/core';
import {FacilityType} from '../model/facility/facility-type';

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
  findById(id: number) {
    return this.facilityTypeList.find(type => type.id === id);
  }
}
