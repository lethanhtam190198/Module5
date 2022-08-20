import {Component, OnInit} from '@angular/core';
import {Dictionary} from '../../model/dictionary';
import {DictionaryService} from '../../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionaryDetail: Dictionary;

  constructor(private dictionaryService: DictionaryService,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe((pramMap: ParamMap) => {
      const vietnamese = pramMap.get('vietnamese');
      this.dictionaryDetail = this.dictionaryService.findByMean(vietnamese);
    });
  }

  ngOnInit(): void {
  }

}
