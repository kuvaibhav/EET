import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3Child1Component } from './tab3-child1.component';

describe('Tab3Child1Component', () => {
  let component: Tab3Child1Component;
  let fixture: ComponentFixture<Tab3Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
