import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer/customer';
import {Facility} from '../../model/facility/facility';
import {ContractService} from '../../service/contract.service';
import {Toast, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractList: FormGroup = new FormGroup({
    id: new FormControl(),
    facility: new FormControl('', Validators.required),
    customer: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    deposit: new FormControl('', Validators.required),
    total: new FormControl('', Validators.required)
  });
  customerList: Customer[] = [];
  facilityList: Facility[] = [];

  constructor(private facilityService: FacilityService,
              private customerService: CustomerService,
              private contractService: ContractService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    // this.customerList = this.customerService.getAll();
    this.facilityList = this.facilityService.getAll();
  }

  submit() {
    const contract = this.contractList.value;
    this.contractService.saveContract(contract);
    this.contractList.reset();
    this.router.navigate(['contract/list']);
    this.toastr.success('Create success', 'Create Congratulation', {
      timeOut: 1500, progressBar: false
    });
  }
}
