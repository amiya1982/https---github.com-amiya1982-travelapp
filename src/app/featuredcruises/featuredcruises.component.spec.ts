import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedcruisesComponent } from './featuredcruises.component';

describe('FeaturedcruisesComponent', () => {
  let component: FeaturedcruisesComponent;
  let fixture: ComponentFixture<FeaturedcruisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedcruisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedcruisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
