import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrastlewarkComponent } from './brastlewark.component';

describe('BrastlewarkComponent', () => {
  let component: BrastlewarkComponent;
  let fixture: ComponentFixture<BrastlewarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrastlewarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrastlewarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
