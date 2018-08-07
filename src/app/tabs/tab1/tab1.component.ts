import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  @ViewChild('itemName') itemName: ElementRef;
  @ViewChild('addBtn') addBtn: ElementRef;

  title = 'List App';
  text = true;
  itemArray = [];
  buttonText = 'ADD';
  clearText = 'Remove';

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
  }

  // addToList(itemName: string) {
  //   console.log(itemName);
  //   this.itemArray.push(itemName);
  // }

  // addToList(listValue: string) {
  //   console.log(this.itemName.nativeElement.value);
  //   console.log(this.addBtn);
  //   // this.addBtn.nativeElement.style.backgroundColor = 'red';
  //   // this.renderer2.setStyle(this.addBtn.nativeElement, 'background-color', 'red');
  //   this.itemArray.push(this.itemName.nativeElement.value);
  // }

  removeItem(index: number) {
    this.itemArray.splice(index, 1);
}

  // addToParent($event) {
  //   $event.forEach(childItem => {
  //     this.itemArray.push(childItem);
  //   });
  // }

}
