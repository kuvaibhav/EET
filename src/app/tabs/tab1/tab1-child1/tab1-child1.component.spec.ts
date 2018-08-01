import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1Child1Component } from './tab1-child1.component';

describe('Tab1Child1Component', () => {
  let component: Tab1Child1Component;
  let fixture: ComponentFixture<Tab1Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
