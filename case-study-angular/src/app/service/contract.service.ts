import {Injectable} from '@angular/core';
import {Contract} from '../model/contract/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contactList: Contract[] = [{
    id: 1,
    facility: 'Villa',
    customer: 'A',
    startDate: '12-12-2012',
    endDate: '13-12-2012',
    deposit: 3000,
    total: 10000
  }];

  constructor() {
  }
  getAll() {
    return this.contactList;
  }

  saveContract(contract: any) {
    this.contactList.push(contract);
  }
}
