import { Tab4Service } from './../tab4/tab4.service';
import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  cities: any;

  constructor(private renderer2: Renderer2,
     private router: Router,
     private route: ActivatedRoute,
     private tab4Service: Tab4Service
    ) { }

  ngOnInit() {
  }

  addToList(itemName: string) {
    console.log(itemName);
    this.itemArray.push(itemName);
  }

  getCity() {
    this.tab4Service.fetchCities().subscribe(response => {
      this.cities = response;
    });
  }

  // addToList(listValue: string) {
  //   console.log(this.itemName.nativeElement.value);
  //   console.log(this.addBtn);
  //   this.addBtn.nativeElement.style.backgroundColor = 'red';
  //   this.renderer2.setStyle(this.addBtn.nativeElement, 'background-color', 'red');
  //   this.itemArray.push(this.itemName.nativeElement.value);
  // }

  removeItem(index: number) {
    this.itemArray.splice(index, 1);
}

  onNaviagteClick() {
    // this.router.navigate(['/tab4']);
    this.router.navigate(['tab4'], {relativeTo: this.route});
    // this.router.navigate(['tab4'], {relativeTo: this.route, queryParams: {id :  '123'}});
  }

}
