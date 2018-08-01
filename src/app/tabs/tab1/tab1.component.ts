import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {
  title = 'List App';
  text = true;
  itemArray = [];
  buttonText = 'ADD';
  clearText = 'Remove';

  constructor() { }

  ngOnInit() {
  }

  addToList(listValue: string) {
    this.itemArray.push(listValue);
  }

  removeItem(index: number) {
    this.itemArray.splice(index, 1);

}}
