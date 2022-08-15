import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1: number;
  number2: number;
  total: number;
  error = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  change(s: string) {
    switch (s) {
      case '+':
        this.total = this.number1 + this.number2;
        return this.error = '';
      case '-' :
        this.total = this.number1 - this.number2;
        return this.error = '';
      case '*' :
        this.total = this.number1 * this.number2;
        return this.error = '';
      case '/' :
        if (this.number2 === 0) {
          return this.error = 'Error';
        } else {
          this.total = this.number1 / this.number2;
          return this.error = '';
        }
    }
  }

}
