import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractList: FormGroup = new FormGroup({
    id: new FormControl(),
    facility: new FormControl(),
    customer: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    deposit: new FormControl(),
    total: new FormControl()
  });
  customerList: Customer[] = [];
  facilityList: Facility[] = [];

  constructor(private facilityService: FacilityService,
              private customerService: CustomerService,
              private contractService: ContractService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerList = this.customerService.getAll();
    this.facilityList = this.facilityService.getAll();
  }

  submit() {
    const contract = this.contractList.value;
    this.contractService.saveContract(contract);
    this.contractList.reset();
    this.router.navigate(['contract/list']);
  }
}
