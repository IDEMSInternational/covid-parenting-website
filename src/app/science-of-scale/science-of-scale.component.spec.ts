import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceOfScaleComponent } from './science-of-scale.component';

describe('ScienceOfScaleComponent', () => {
  let component: ScienceOfScaleComponent;
  let fixture: ComponentFixture<ScienceOfScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceOfScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceOfScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
