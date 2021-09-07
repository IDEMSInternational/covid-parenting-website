import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDatesJulyComponent } from './save-dates-july.component';

describe('SaveDatesJulyComponent', () => {
  let component: SaveDatesJulyComponent;
  let fixture: ComponentFixture<SaveDatesJulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveDatesJulyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDatesJulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
