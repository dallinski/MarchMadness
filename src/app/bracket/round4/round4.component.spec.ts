import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Round4Component } from './round4.component';

describe('Round4Component', () => {
  let component: Round4Component;
  let fixture: ComponentFixture<Round4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Round4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Round4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
