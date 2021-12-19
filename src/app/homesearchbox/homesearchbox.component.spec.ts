import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesearchboxComponent } from './homesearchbox.component';

describe('HomesearchboxComponent', () => {
  let component: HomesearchboxComponent;
  let fixture: ComponentFixture<HomesearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesearchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
