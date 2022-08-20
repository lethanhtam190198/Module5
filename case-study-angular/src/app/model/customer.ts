import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  type?: CustomerType;
  name?: string;
  birthDay?: string;
  gender?: string;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
}
