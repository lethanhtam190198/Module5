import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerList: FormGroup = new FormGroup({
    id: new FormControl(),
    type: new FormControl(),
    name: new FormControl(),
    birthDay: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
  });
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }
  submit() {
    const customer = this.customerList.value;
    this.customerService.saveCustomer(customer);
    this.customerList.reset();
  }

}

