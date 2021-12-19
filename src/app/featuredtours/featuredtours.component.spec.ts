import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedtoursComponent } from './featuredtours.component';

describe('FeaturedtoursComponent', () => {
  let component: FeaturedtoursComponent;
  let fixture: ComponentFixture<FeaturedtoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedtoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedtoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
