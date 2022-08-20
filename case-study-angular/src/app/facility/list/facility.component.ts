import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilityList: Facility[] = [];
  id: number;
  name: string;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityList = this.facilityService.getAll();
  }

  saveFacility(facility: Facility) {
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
    this.facilityList = this.facilityList.filter(facility => {
      return facility.id !== id;
    });
  }
  openDetele(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    this.facilityService.deleteFacility(id);
    this.facilityList = this.facilityService.getAll();
  }

}
