import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  distionaryList: Dictionary[] = [{
    vietnamese: 'Xin Chao',
    english: 'Hello'
  },
    {
      vietnamese: 'Con Meo',
      english: 'Cat'
    },
    {
      vietnamese: 'Con Cho',
      english: 'Dog'
    }];

  constructor() {
  }

  getAll() {
    return this.distionaryList;
  }
  findByMean(vietnamese: string) {
    return this.distionaryList.find(dictionary => dictionary.vietnamese === vietnamese);
  }
}
