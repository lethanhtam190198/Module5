import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerList = this.customerService.getAll();
  }

}
