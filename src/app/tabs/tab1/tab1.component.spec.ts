import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Tab1Component } from './tab1.component';

// describe('Tab1Component', () => {
//   let component: Tab1Component;
//   let fixture: ComponentFixture<Tab1Component>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ Tab1Component ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(Tab1Component);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('Tab 1 Component', () => {
  let component: Tab1Component;
  let fixture: ComponentFixture<Tab1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [Tab1Component]
    }).overrideTemplate(Tab1Component, '')

    fixture = TestBed.createComponent(Tab1Component);
    component = fixture.componentInstance;

  });

  it('should create the Tab1 component', () => {
    // THEN
    expect(component).toBeTruthy();
  });

  it('should add item to the item array', () => {
    // GIVEN


    // WHEN
    component.addToList('item');

    // THEN
    expect(component.itemArray[0]).toBe('item');

  });

  it('should remove item from the item array', () => {
    // GIVEN
    component.itemArray = ['Item1', 'Item2', 'Item3'];
    const length = component.itemArray.length;

    // WHEN
    component.removeItem(2);

    // THEN
    expect(component.itemArray.length).toBe(2);
    expect(component.itemArray[length - 1]).toBeUndefined();
  });
});
