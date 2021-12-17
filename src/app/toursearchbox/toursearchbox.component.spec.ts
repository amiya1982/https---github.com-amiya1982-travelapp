import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursearchboxComponent } from './toursearchbox.component';

describe('ToursearchboxComponent', () => {
  let component: ToursearchboxComponent;
  let fixture: ComponentFixture<ToursearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursearchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
