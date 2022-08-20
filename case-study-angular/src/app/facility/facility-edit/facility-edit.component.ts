import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityTypeService} from '../../service/facility-type.service';
import {FacilityType} from '../../model/facility-type';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityEdit: FormGroup;
  id: number;
  facilityTypeList: FacilityType[] = [];

  constructor(private facilityService: CustomerService,
              private activeRouter: ActivatedRoute,
              private router: Router,
              private facilityType: FacilityTypeService) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getFacility(this.id);
      this.facilityEdit = new FormGroup({});
    });
  }

  ngOnInit(): void {
    this.facilityTypeList = this.facilityService.getAll();
  }

  submit() {
    const facility = this.facilityEdit.value;
    this.facilityService.updateCustomer(this.id, facility);
    this.facilityEdit.reset();
    this.router.navigate(['facility/list']);
  }


  private getFacility(id: number) {
    return this.facilityService.findById(id);
  }
}
