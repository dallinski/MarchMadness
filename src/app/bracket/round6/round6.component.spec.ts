import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Round6Component } from './round6.component';

describe('Round6Component', () => {
  let component: Round6Component;
  let fixture: ComponentFixture<Round6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Round6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Round6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
