import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerList: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    birthDay: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{6,9}$/)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^[\+84][0-9]{9,10}$/)]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerList.value;
    this.customerService.saveCustomer(customer);
    this.customerList.reset();
    this.router.navigate(['customer/list']);
  }

}

