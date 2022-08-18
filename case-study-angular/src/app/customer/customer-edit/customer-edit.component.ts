import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerEdit: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerEdit = new FormGroup({
        id: new FormControl(customer.id),
        type: new FormControl(customer.type),
        name: new FormControl(customer.name),
        birthDay: new FormControl(customer.birthDay),
        gender: new FormControl(customer.gender),
        idCard: new FormControl(customer.idCard),
        phoneNumber: new FormControl(customer.phoneNumber),
        email: new FormControl(customer.email),
        address: new FormControl(customer.address)
      });
    });
  }

  ngOnInit(): void {
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
