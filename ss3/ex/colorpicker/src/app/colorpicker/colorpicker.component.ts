import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css']
})
export class ColorpickerComponent implements OnInit {
  color = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
