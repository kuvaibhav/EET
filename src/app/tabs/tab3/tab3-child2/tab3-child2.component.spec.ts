import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3Child2Component } from './tab3-child2.component';

describe('Tab3Child2Component', () => {
  let component: Tab3Child2Component;
  let fixture: ComponentFixture<Tab3Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
