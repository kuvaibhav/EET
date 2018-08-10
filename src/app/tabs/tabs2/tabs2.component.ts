import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs2.component.html',
  styleUrls: ['./tabs2.component.css']
})
export class Tabs2Component implements OnInit {

  public textField = '';
  public twoWayTextField = '';

  constructor() { }

  ngOnInit() {
  }

  detectChanges(value) {
  this.textField = value;
  }

}
