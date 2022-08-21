import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityTypeService} from '../../service/facility-type.service';
import {FacilityType} from '../../model/facility-type';
import {FacilityService} from '../../service/facility.service';
import {RentalType} from '../../model/rental-type';
import {RentalTypeService} from '../../service/rental-type.service';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityEdit: FormGroup;
  id: number;
  facilityTypeList: FacilityType[] = [];
  rentalType: RentalType[] = [];

  constructor(private facilityService: FacilityService,
              private activeRouter: ActivatedRoute,
              private router: Router,
              private facilityTypeService: FacilityTypeService,
              private rentalTypeService: RentalTypeService) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.facilityEdit = new FormGroup({
        id: new FormControl(facility.id, [Validators.required]),
        name: new FormControl(facility.name, [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
        type: new FormControl(facility.facilityType, [Validators.required]),
        area: new FormControl(facility.area, [Validators.required]),
        rentalCosts: new FormControl(facility.rentalCosts, [Validators.required]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required]),
        rentalType: new FormControl(facility.rentalType, [Validators.required]),
        url: new FormControl(facility.url, [Validators.required]),
        roomStandard: new FormControl(facility.roomStandard, [Validators.required]),
        poolArea: new FormControl(facility.poolArea, [Validators.required]),
        numberOfFloors: new FormControl(facility.numberOfFloors, [Validators.required]),
        otherAmenities: new FormControl(facility.otherAmenities, [Validators.required])
      });
    });
  }

  ngOnInit(): void {
    this.facilityTypeList = this.facilityTypeService.getAll();
    this.rentalType = this.rentalTypeService.getAll();
  }

  submit() {
    const facility = this.facilityEdit.value;
    this.facilityService.updateFacility(this.id, facility);
    this.facilityEdit.reset();
    this.router.navigate(['facility/list']);
  }


  private getFacility(id: number) {
    return this.facilityService.findById(id);
  }

  updateFacility(id: number) {
    const facility = this.facilityEdit.value;
    this.facilityService.updateFacility(id, facility);
    alert('Update Success');
  }
}
