import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Round5Component } from './round5.component';

describe('Round5Component', () => {
  let component: Round5Component;
  let fixture: ComponentFixture<Round5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Round5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Round5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
