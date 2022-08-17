import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [{
    id: 1,
    type: 'Vip',
    name: 'Tam',
    birthDay: '12-12-2111',
    gender: 'Nam',
    idCard: '12121212',
    phoneNumber: '12312312',
    email: 'tam@gmail.com',
    address: 'DN'
  }];

  constructor() {
  }
  getAll() {
    return this.customerList;
  }
  saveCustomer(customer) {
    this.customerList.push(customer);
  }
  findById(id: number) {
    return this.customerList.find(customer => customer.id === id);
  }
}
