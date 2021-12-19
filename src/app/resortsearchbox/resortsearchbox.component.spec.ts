import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortsearchboxComponent } from './resortsearchbox.component';

describe('ResortsearchboxComponent', () => {
  let component: ResortsearchboxComponent;
  let fixture: ComponentFixture<ResortsearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResortsearchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortsearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
