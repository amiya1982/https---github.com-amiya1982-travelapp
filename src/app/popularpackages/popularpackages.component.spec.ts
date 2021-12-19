import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularpackagesComponent } from './popularpackages.component';

describe('PopularpackagesComponent', () => {
  let component: PopularpackagesComponent;
  let fixture: ComponentFixture<PopularpackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularpackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
