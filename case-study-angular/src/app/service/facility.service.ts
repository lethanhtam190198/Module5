import {Injectable} from '@angular/core';
import {Facility} from '../model/facility/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [{
    id: 1,
    name: 'PHÒNG DELUXE HƯỚNG VƯỜN',
    area: 50,
    rentalCosts: 10000000,
    maxPeople: 5,
    rentalType: {
      id: 1, name: 'Day'
    },
    url: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-F-370x239.jpg',
    roomStandard: 'Abc',
    poolArea: 100,
    numberOfFloors: 3,
    otherAmenities: 'Aaaaa',
    facilityType: {
      id: 3,
      name: 'Villa'
    }
  }];

  constructor() {
  }

  getAll() {
    return this.facilityList;
  }

  saveFacility(facility) {
    this.facilityList.push(facility);
  }

  findById(id: number) {
    return this.facilityList.find(facility => facility.id === id);
  }

  updateFacility(id: number, facility: Facility) {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === id) {
        this.facilityList[i] = facility;
      }
    }
  }

  deleteFacility(id: number) {
    this.facilityList = this.facilityList.filter(customer => {
      return customer.id !== id;
    });
  }
}
