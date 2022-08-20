import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
        id: new FormControl(facility.id),
        name: new FormControl(facility.name),
        type: new FormControl(facility.facilityType),
        area: new FormControl(facility.area),
        rentalCosts: new FormControl(facility.rentalCosts),
        maxPeople: new FormControl(facility.maxPeople),
        rentalType: new FormControl(facility.rentalType),
        url: new FormControl(facility.url),
        roomStandard: new FormControl(facility.roomStandard),
        poolArea: new FormControl(facility.poolArea),
        numberOfFloors: new FormControl(facility.numberOfFloors),
        otherAmenities: new FormControl(facility.otherAmenities)
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
