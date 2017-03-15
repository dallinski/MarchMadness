import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Round3Component } from './round3.component';

describe('Round3Component', () => {
  let component: Round3Component;
  let fixture: ComponentFixture<Round3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Round3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Round3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
