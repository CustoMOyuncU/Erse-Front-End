import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheSliderComponent } from './clothe-slider.component';

describe('ClotheSliderComponent', () => {
  let component: ClotheSliderComponent;
  let fixture: ComponentFixture<ClotheSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClotheSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClotheSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
