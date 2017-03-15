import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Round2Component } from './round2.component';

describe('Round2Component', () => {
  let component: Round2Component;
  let fixture: ComponentFixture<Round2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Round2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Round2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
