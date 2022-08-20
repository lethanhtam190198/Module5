import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [{
    id: 1,
    type: {id: 1, name: 'Silver'},
    name: 'Tam',
    birthDay: '12-12-2111',
    gender: 'Male',
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

  saveCustomer(customer: Customer) {
    this.customerList.push(customer);
  }

  findById(id: number) {
    return this.customerList.find(customer => customer.id === id);
  }

  updateCustomer(id: number, customer: Customer) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === id) {
        this.customerList[i] = customer;
      }
    }
  }

  deleteCustomer(id: number) {
    this.customerList = this.customerList.filter(customer => {
      return customer.id !== id;
    });
  }
}
