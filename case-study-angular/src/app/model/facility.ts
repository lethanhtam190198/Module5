import {RentalType} from './rental-type';
import {FacilityType} from './facility-type';

export interface Facility {
  id?: number;
  name?: string;
  facilityType?: FacilityType;
  area?: number;
  rentalCosts?: number;
  maxPeople?: number;
  rentalType?: RentalType;
  url?: string;
  roomStandard: string;
  poolArea: number;
  numberOfFloors: number;
  otherAmenities: string;
}
