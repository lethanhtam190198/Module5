import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer/customer-type';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];
  id: number;
  name: string;
  p = 1;
  customerTypeList: CustomerType[] = [];


  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(next => {
      this.customerList = next;
    });
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    });
  }

  openDetele(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.getAll();
    });
  }
}
