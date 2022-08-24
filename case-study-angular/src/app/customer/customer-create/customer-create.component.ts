import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer/customer-type';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerList: FormGroup = new FormGroup({
    // id: new FormControl('', Validators.required),
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
    birthDay: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{6,9}$/)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^[\+84][0-9]{9,10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
  });
  customerTypeList: CustomerType[] = [];
  private temp: string;

  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    });
  }

  submit() {
    const customer = this.customerList.value;
    this.customerService.saveCustomer(customer).subscribe(next => {
      this.customerList.reset();
      this.router.navigate(['customer/list']);
      this.toastr.success('Create success', 'Create Congratulation', {
        timeOut: 2000, progressBar: false
      });
    });
  }
}

