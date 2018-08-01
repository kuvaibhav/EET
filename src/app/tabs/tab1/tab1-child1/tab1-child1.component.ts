import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab1-child1',
  templateUrl: './tab1-child1.component.html',
  styleUrls: ['./tab1-child1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Tab1Child1Component implements OnInit {

  @Input() childInput: string;
  // @Output() childList = new EventEmitter<any>();
  childListArray = [];
  constructor() { }

  ngOnInit() {
  }

  addToChildList(value: string) {
      this.childListArray.push(value);
  }

  removeFromChildList() {
    this.childListArray.pop();
  }

  sendToParent() {
    this.childList.emit(this.childListArray);
  }

}
