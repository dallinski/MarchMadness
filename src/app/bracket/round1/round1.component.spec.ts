import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Round1Component } from './round1.component';

describe('Round1Component', () => {
  let component: Round1Component;
  let fixture: ComponentFixture<Round1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Round1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Round1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
