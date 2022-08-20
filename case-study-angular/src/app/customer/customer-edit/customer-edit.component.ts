import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerEdit: FormGroup;
  id: number;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private activeRouter: ActivatedRoute,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerEdit = new FormGroup({
        id: new FormControl(customer.id, [Validators.required]),
        type: new FormControl(customer.type, [Validators.required]),
        name: new FormControl(customer.name, [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
        birthDay: new FormControl(customer.birthDay, [Validators.required]),
        gender: new FormControl(customer.gender, [Validators.required]),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern(/^[0-9]{6,9}$/)]),
        phoneNumber: new FormControl(customer.phoneNumber, [Validators.required, Validators.pattern(/^[\+84][0-9]{9,10}$/)]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required])
      });
    });
  }
  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.getAll();
  }

  submit() {
    const customer = this.customerEdit.value;
    this.customerService.updateCustomer(this.id, customer);
    this.customerEdit.reset();
    this.router.navigate(['customer/list']);
  }

  private getCustomer(id: number) {
    return this.customerService.findById(id);
  }

  updateCustomer(id: number) {
    const customer = this.customerEdit.value;
    this.customerService.updateCustomer(id, customer);
    alert('Update Success');
  }

}
