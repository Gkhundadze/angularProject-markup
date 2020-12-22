import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporaty',
  templateUrl: './temporaty.component.html',
  styleUrls: ['./temporaty.component.css']
})
export class TemporatyComponent implements OnInit {

  public num1:number;
  public num2:number;
  public result:number;
  constructor() { }
  ngOnInit(): void {
  }
  add(num1, num2){
    let val = parseInt(num1.value);
    let val2 = parseInt(num2.value);
    let res = val+val2;
    this.result = res;
  }
}
