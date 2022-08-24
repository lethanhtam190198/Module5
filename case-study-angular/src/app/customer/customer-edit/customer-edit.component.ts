import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer/customer-type';
import {ToastrService} from 'ngx-toastr';

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
              private toastr: ToastrService,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    });
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.customerService.findById(this.id).subscribe(customer => {
        this.customerEdit = new FormGroup({
          id: new FormControl(customer.id, [Validators.required]),
          type: new FormControl(customer.type.id, [Validators.required]),
          name: new FormControl(customer.name, [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
          birthDay: new FormControl(customer.birthDay, [Validators.required]),
          gender: new FormControl(customer.gender, [Validators.required]),
          idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern(/^[0-9]{6,9}$/)]),
          phoneNumber: new FormControl(customer.phoneNumber, [Validators.required, Validators.pattern(/^[\+84][0-9]{9,10}$/)]),
          email: new FormControl(customer.email, [Validators.required, Validators.email]),
          address: new FormControl(customer.address, [Validators.required])
        });
      });
    });
  }

  submit() {
    const customer = this.customerEdit.value;
    this.customerTypeService.findById(this.customerEdit.value.type).subscribe(value => {
      customer.type = value;
      this.customerService.updateCustomer(this.id, customer).subscribe(next => {
      });
      this.customerEdit.reset();
      this.router.navigate(['customer/list']);
      this.toastr.success('Create success', 'Edit Congratulation', {
        timeOut: 2000, progressBar: false
      });
    });
  }

}
