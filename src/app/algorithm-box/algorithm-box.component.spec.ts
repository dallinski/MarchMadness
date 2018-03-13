import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmBoxComponent } from './algorithm-box.component';

describe('AlgorithmBoxComponent', () => {
  let component: AlgorithmBoxComponent;
  let fixture: ComponentFixture<AlgorithmBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
