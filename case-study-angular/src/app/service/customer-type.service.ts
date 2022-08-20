import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList: CustomerType[] = [{
    id: 1,
    name: 'Member'
  },
    {
      id: 2,
      name: 'Silver'
    },
    {
      id: 3,
      name: 'Gold'
    },
    {
      id: 4,
      name: 'Diamond'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.customerTypeList;
  }
}
