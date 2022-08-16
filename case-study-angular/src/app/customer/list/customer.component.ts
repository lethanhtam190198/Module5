import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];

  constructor() {
    this.customerList.push({
      id: 1,
      type: 'Vip',
      name: 'Tâm',
      birthDay: '19-01-1998',
      gender: 'Nam',
      idCard: '123123123',
      phoneNumber: '12312312',
      email: 'tam@gmail.com',
      address: 'QN'
    });
    this.customerList.push({
      id: 2,
      type: 'ProVip',
      name: 'Hùng',
      birthDay: '12-01-2000',
      gender: 'Nam',
      idCard: '1412314',
      phoneNumber: '09099909',
      email: 'hung@gmail.com',
      address: 'DN'
    });
  }

  ngOnInit(): void {
  }

}

