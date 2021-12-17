import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-personal',
  templateUrl: './my-personal.component.html',
  styleUrls: ['./my-personal.component.css']
})
export class MyPersonalComponent implements OnInit {
  //using reference variable
num: number = 0;
title: string = 'ngSwitch Directive';
title2:string = 'ngSwitch Second Example';
  constructor() { }

  ngOnInit(): void {
  }
items: item[] = [{name:'One',val:1},{name: 'Two', val: 2}, {name: 'Three', val: 3}, {name: 'Four', val: 4}, {name: 'Five', val: 5}];
    selectedValue1: string= 'One';
    selectedValue2: string= 'One';
    selectedValue3: string= 'One';
    selectedValue4: string= 'One';
}
//using array of objects
class item{
  name: string = '';
  val: number = 0;

}
