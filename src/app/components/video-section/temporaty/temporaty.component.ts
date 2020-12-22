import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporaty',
  templateUrl: './temporaty.component.html',
  styleUrls: ['./temporaty.component.css']
})
export class TemporatyComponent implements OnInit {
  public errorMessage:string = "Calculator Works";
  public testVatiable:string = ":D"
  public result: number;
  public result2: number;
  public result3: number;
  public result4: number;
  constructor() { }
  ngOnInit(): void {
  }
  add(num1, num2): void {
    let val = parseInt(num1.value);
    let val2 = parseInt(num2.value);
    let res = val + val2;
    this.result = res;
    
  }
  sub(num3, num4): void {
    let val = parseInt(num3.value);
    let val2 = parseInt(num4.value);
    let res = val - val2;
    this.result2 = res;
  }
  mult(num5, num6): void {
    let val = parseInt(num5.value);
    let val2 = parseInt(num6.value);
    let res = val * val2;
    this.result3 = res;
  }
  div(num7, num8): void {
    let val = parseInt(num7.value);
    let val2 = parseInt(num8.value);
    let res = val / val2;
    this.result4 = res;
  }
}
