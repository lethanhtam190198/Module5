import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilityList: Facility[] = [];

  constructor() {
    this.facilityList.push({
      id: 1,
      name: 'PHÒNG STUDIO SUITE HƯỚNG BIỂN',
      area: 100,
      rentalCosts: 10000000,
      maxPeople: 4,
      rentalType: 'tháng',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    });
    this.facilityList.push({
      id: 2,
      name: 'PHÒNG SUITE HƯỚNG BIỂN',
      area: 85,
      rentalCosts: 100000,
      maxPeople: 3,
      rentalType: 'ngày',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    });
    this.facilityList.push({
      id: 3,
      name: 'PHÒNG STUDIO SUITE HƯỚNG BIỂN',
      area: 100,
      rentalCosts: 100000,
      maxPeople: 4,
      rentalType: 'tháng',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
    });
    this.facilityList.push({
      id: 4,
      name: 'PHÒNG SUPERIOR HƯỚNG HỒ',
      area: 100,
      rentalCosts: 100000,
      maxPeople: 4,
      rentalType: 'tháng',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg'
    });
  }

  ngOnInit(): void {
  }


}
