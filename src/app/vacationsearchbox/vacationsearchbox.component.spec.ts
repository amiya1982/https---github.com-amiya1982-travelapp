import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsearchboxComponent } from './vacationsearchbox.component';

describe('VacationsearchboxComponent', () => {
  let component: VacationsearchboxComponent;
  let fixture: ComponentFixture<VacationsearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationsearchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationsearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
