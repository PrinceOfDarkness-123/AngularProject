import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {
title: string = 'ngIf Example';
showMe: any;
  constructor() { }

  ngOnInit(): void {
  }

}
