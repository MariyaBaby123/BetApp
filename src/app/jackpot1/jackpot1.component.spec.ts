import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jackpot1Component } from './jackpot1.component';

describe('Jackpot1Component', () => {
  let component: Jackpot1Component;
  let fixture: ComponentFixture<Jackpot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jackpot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jackpot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
