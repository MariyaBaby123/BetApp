import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictFinalComponent } from './predict-final.component';

describe('PredictFinalComponent', () => {
  let component: PredictFinalComponent;
  let fixture: ComponentFixture<PredictFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
