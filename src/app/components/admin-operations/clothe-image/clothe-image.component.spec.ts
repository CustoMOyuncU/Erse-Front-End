import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheImageComponent } from './clothe-image.component';

describe('ClotheImageComponent', () => {
  let component: ClotheImageComponent;
  let fixture: ComponentFixture<ClotheImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClotheImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClotheImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
