import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruisesearchboxComponent } from './cruisesearchbox.component';

describe('CruisesearchboxComponent', () => {
  let component: CruisesearchboxComponent;
  let fixture: ComponentFixture<CruisesearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruisesearchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruisesearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
