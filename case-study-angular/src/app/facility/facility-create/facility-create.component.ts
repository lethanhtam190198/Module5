import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import {RentalTypeService} from '../../service/rental-type.service';
import {RentalType} from '../../model/rental-type';
import {FacilityType} from '../../model/facility-type';
import {FacilityTypeService} from '../../service/facility-type.service';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityList: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    rentalCosts: new FormControl('', Validators.required),
    maxPeople: new FormControl('', [Validators.required]),
    rentalType: new FormControl('', [Validators.required]),
    url: new FormControl(),
    roomStandard: new FormControl(),
    poolArea: new FormControl(),
    numberOfFloors: new FormControl(),
    otherAmenities: new FormControl(),
    facilityType: new FormControl()
  });
  rentalTypeList: RentalType[] = [];
  facilityTypeList: FacilityType[] = [];
  temp: string;

  constructor(private facilityService: FacilityService,
              private router: Router,
              private rentalTypeService: RentalTypeService,
              private facilityTypeService: FacilityTypeService) {
  }

  ngOnInit(): void {
    this.rentalTypeList = this.rentalTypeService.getAll();
    this.facilityTypeList = this.facilityTypeService.getAll();
  }

  submit() {
    const facility = this.facilityList.value;
    this.facilityService.saveFacility(facility);
    this.facilityList.reset();
    this.router.navigate(['facility/list']);
  }

  chooseFacility(value: string) {
    this.temp = value;
  }
}
